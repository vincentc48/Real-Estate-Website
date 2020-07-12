import React from "react"
import {Form, Button} from"react-bootstrap"
import axios from "axios"


class Modify extends React.Component{
    constructor(){
        super()
        this.state={
            validDelete: true
        }
    }

    change = (event) => {
        const {name,value} = event.target;
        this.setState({[name]: value});
        if(!this.state.validDelete) this.setState({validDelete: true})
    }

    submitAdd = (event) =>{
        axios.post("/api/add",this.state)
            .then(res=> {
                console.log(res)
                window.location = "/homes"
            })

    }

    submitDelete = () =>{
        if(!this.state.delete)
        axios.delete('/api/'+this.state.idToDelete)
            .then(res=>{
                window.location="/homes"
            })
            .catch(err=>{
                console.log(err)
                this.setState({validDelete:false});
            })
    }

    logout = () =>{
        sessionStorage.removeItem('token');
        window.location = "/"
    }

    render(){
        return(
            <div className="modify-form" style={{margin: "3vw"}}>
                <h3 style={{margin: "15vh 0 5vh 5vw"}}>Add a Home</h3>
                <Form>
                    <Form.Group controlId="formaddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" placeholder="Enter address" value={this.state.address} onChange={this.change}/>
                    </Form.Group>
                    <Form.Group controlId="formlocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location" placeholder="Enter location" value={this.state.location} onChange={this.change}/>
                    </Form.Group>
                    <Form.Group controlId="formprice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" placeholder="Enter price" value={this.state.price} onChange={this.change}/>
                    </Form.Group>
                    <Form.Group controlId="formrent">
                        <Form.Label>Rent</Form.Label>
                        <Form.Control name="rent" placeholder="Enter rent" value={this.state.rent} onChange={this.change}/>
                    </Form.Group>
                    <Form.Group controlId="formdescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" placeholder="Enter description" value={this.state.description} onChange={this.change}/>
                    </Form.Group>
                    <Form.Group controlId="formimgUrl">
                        <Form.Label>Image URL:</Form.Label>
                        <Form.Control name="imgUrl" placeholder="Enter Image URL" value={this.state.imgUrl} onChange={this.change}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.submitAdd}>
                        Submit
                    </Button>
                </Form>

                <h3 style={{margin:  "15vh 0 5vh 5vw"}}>Delete an Existing Home</h3>
                <Form>
                    <Form.Group controlId="formId">
                        <Form.Label>ID of home</Form.Label>
                        <Form.Control name="idToDelete" placeholder="Enter Home ID" value={this.state.idToDelete} onChange={this.change}/>
                    </Form.Group>
                    <div>{this.state.validDelete?"":<div style={{color: "red"}}>Invalid ID</div>}</div>
                    <Button variant="primary" onClick={this.submitDelete}>
                        Delete
                    </Button>
                </Form>
                <Button variant="danger" type="button" onClick={this.logout} style={{margin: "3vw 5vh"}}>
                        Logout
                </Button>
            </div>
        )
    }
}

export default Modify