const express = require('express')
const router = express.Router()
const fs = require('fs')
const {v4}= require('uuid')

const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get("/allhomes",(req,res)=>{
    fs.readFile('./homes.json', "utf-8",(err,data)=>{
        if (err) throw err;
        const allhomes = JSON.parse(data)
        res.header("Access-Control-Allow-Origin", "*").json(allhomes);
        res.end();
    })
})

router.get("/:id",(req,res)=>{
    const targetid = req.params.id;
    fs.readFile("./homes.json","utf-8",(err,data)=>{
        if (err) throw err    
        var jsonObj = JSON.parse(data);
        var arr = jsonObj.homes
        var isValid = false;
        for (var index in jsonObj.homes){
            if (jsonObj.homes[index].id===targetid){
                isValid = true;
                break;
            }
        }
        if (!isValid){
            res.status(404).send("id not found")
            res.end();
            return;
        }
        for (var index in arr){
            if (arr[index].id === targetid){
                res.header("Access-Control-Allow-Origin", "*").json(arr[index])
                res.end();
                return;
            }
        }
        res.status(404).send("id not Found")
    })
})

router.post("/add",jsonParser,(req,res)=> {
    fs.readFile("./homes.json","utf-8",(err,data)=>{
        if (err) throw err;
        var jsonObj = JSON.parse(data);
        var newHome = req.body;
        newHome.id = v4();
        jsonObj.homes.push(newHome)
        jsonObj = JSON.stringify(jsonObj)
        fs.writeFile('./homes.json',jsonObj,(err)=>{
            if (err) throw err;
            else{
                res.header("Access-Control-Allow-Origin", "*").send("successfully written")
            }
        })
    })
})

router.put("/:id",jsonParser,(req,res)=>{
    fs.readFile("./homes.json","utf-8",(err,data)=>{
        if (err) throw err;
        else{
            var jsonObj = JSON.parse(data)
            var newHome = req.body;
            const targetid = req.params.id
            var isValid = false;
            for (var index in jsonObj.homes){
                if (jsonObj.homes[index].id===targetid){
                    isValid = true;
                    break;
                }
            }
            if (!isValid){
                res.status(404).send("id not found")
                res.end();
                return;
            }
            for (var index in jsonObj.homes){
                if(jsonObj.homes[index].id===targetid){
                    jsonObj.homes[index] = newHome;
                    jsonObj.homes[index].id = targetid;
                    var objToWrite = JSON.stringify(jsonObj);
                    fs.writeFile('./homes.json',objToWrite,(err)=>{
                        if (err) throw err
                        else{
                            res.send("Updated successfully")
                            res.end()
                            return;
                        }
                    })
                }
            }
        }
    })
})

router.delete("/:id",(req,res)=>{
    fs.readFile("./homes.json","utf-8",(err,data)=>{
        if (err) throw err;
        else{
            var jsonObj = JSON.parse(data)
            const targetid = req.params.id;
            var isValid = false;
            for (var index in jsonObj.homes){
                if (jsonObj.homes[index].id===targetid){
                    isValid = true;
                    jsonObj.homes.splice(index,1)
                    break;
                }
            }
            if (!isValid){
                res.status(400).send("id not found")
                res.end();
                return;
            }
            jsonObj = JSON.stringify(jsonObj)
            fs.writeFile('./homes.json',jsonObj,(err)=>{
                if (err) throw err
                res.send("Deleted Element")
                res.end()
            })
        }
    })
})

module.exports = router