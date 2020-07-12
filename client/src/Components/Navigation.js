import React from "react"
import {Navbar,Nav, NavDropdown,Form, FormControl, Button, Table} from "react-bootstrap"

class Navigation extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Navbar variant="dark" style={{backgroundColor: 'black', color: 'white'}} expand="md">
                <a href="/" ><h1 style={{}}>Real Estate</h1></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="fa fa-bars"id="toggler-button"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav ml-auto">
                        <Nav.Link href="/homes" className="nav-item"style={{color: "white"}}>Homes</Nav.Link>
                        <Nav.Link href="/places" className="nav-item"style={{color: "white"}}>Places</Nav.Link>
                        <Nav.Link href="/agents" className="nav-item"style={{color: "white"}}>Agents</Nav.Link>
                        <Nav.Link href="/admin" className="nav-item"style={{color: "white"}}>Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <div className="navbar-brand"><span className="logo"></span><h1>Real Estate</h1></div> 
            //     <button type="button" className="navbar-toggler" dataToggle="collapse" dataTarget=".navcontent">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>

            //     <div className="collapse navbar-collapse navcontent">
            //         <ul className="navbar-nav ml-auto">
            //             <li className="nav-item">
            //                 Homes
            //             </li>
            //             <li className="nav-item">
            //                 Agents
            //             </li>
            //         </ul>
            //     </div>
           
            // </nav>
        )
    }
}

export default Navigation