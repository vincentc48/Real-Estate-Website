import React from "react"
import Axios from "axios"
import {Form,Button} from "react-bootstrap"

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username: '',
            password: '',
            showInvalid: false //just to show a message that the credentials are invalid
        }
    }

    login = () =>{
        Axios.post('/auth/login',{username: this.state.username, password: this.state.password})
            .then(res => {
                console.log(res)
                if(!res||!res.data) return this.loginFailed()
                else{
                    console.log(res)
                    sessionStorage.setItem('token',res.data.token);
                    window.location = '/admin'
                }
            })
            .catch(err=>console.log(err))
    }

    loginFailed = () =>{
        this.setState({showInvalid: true})
    }

    changeText = (event)=>{
        const {name,value} = event.target;
        this.setState({[name]:value})
        if (this.state.showInvalid) this.setState({showInvalid: false})
    }


    render(){
        return (
            <div style={{margin: " 30vh 5vw"}}>
                <h2 style={{width: '100%',textAlign:"center", margin:"5vh 0"}}>Login</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username'value={this.state.username} onChange={this.changeText} type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        Must be an Admin user to make changes. Ten minute login session before expiration.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password'value={this.state.password} onChange={this.changeText} type="password" placeholder="Password" />
                        <Form.Text className="text-muted" >
                            {this.state.showInvalid?<div style={{color: 'red', fontWeight: 'bold'}}>Invalid Username or Password</div>:<span></span>}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.login}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login