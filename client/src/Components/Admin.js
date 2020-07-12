import React from "react"
import Axios from "axios"
import Modify from "./Modify"
import Login from "./Login"

class Admin extends React.Component{
    constructor(){
        super()
        this.state= {
            isAuthenticated: false
        }
    }

    componentDidMount(){
        if(!sessionStorage.getItem('token')) return;
        Axios.post('/auth/authorize',{token: sessionStorage.getItem('token')})
            .then(res => {
                this.setState({isAuthenticated: res.data.canAccess})
            })
    }

    render(){
        return(
            <div>
                {this.state.isAuthenticated?<Modify/>:<Login/>}
            </div>
        )
    }
}

export default Admin