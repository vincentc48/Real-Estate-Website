const router = require('express').Router();
const mongoose = require('mongoose')
const User = require('./Usermodel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//request body should be username, password and isAdmin in an object
router.post('/register',async (req,res)=>{
    const hashedWord = await bcrypt.hash(req.body.password,10)
    const newUser = new User({
        username: req.body.username,
        password: hashedWord,
        isAdmin: req.body.isAdmin
    })
    await newUser.save();
    res.send("User saved")
})

//request body should be username and password in an object
//will always return 200 status, just responds with "false" if incorrect uname/password and responds with a token if correct credentials
router.post('/login',async (req,res)=>{
    const user = await User.find({
        username: req.body.username
    })
    //to get the info from the user, use user[0].property
    if (user.length==0) return res.send(false)

    //console.log(user);
    const decryptedpassword = await bcrypt.compare(req.body.password,user[0].password);
    if(!decryptedpassword) res.send(false)

    //serialize the user and send back the seralized jwt
    console.log(user[0].isAdmin)
    const token = jwt.sign({isAdmin:user[0].isAdmin},process.env.SECRET_KEY);//add expiration date
    res.send({token: token})
})


//request body should have an object with "token" property that ocntains the serialized jwt to verify
//this endpoint is meant to be called just to determine access. if it returns true, the frontend will handle the accessing of routes/capability
//just note that this is a get endpoint and it will return a 200 response no matter what, just with canAcess: false if unauthorized
router.post('/authorize', (req,res)=>{
    if(!req.body.token) return res.send({canAccess: false});
    jwt.verify(req.body.token,process.env.SECRET_KEY, (err,decoded)=>{
        if(err) return res.send({canAccess: false});
        res.send({canAccess: decoded.isAdmin})
    })  
})



module.exports = router;