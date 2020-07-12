/*
HOME OBJECT LAYOUT:
{
    imgUrl: url here
    address: 123 street name
    location: city, state, ZIP code
    price:
    rent: 
    description:
}
*/


import React from "react"

import axios from "axios"

class Viewhome extends React.Component{
    constructor(){
        super()
        this.state ={
            obj: {},
            isAuthorized: false
        }
    }

    componentDidMount(){
        var id = this.props.match.params.id;
        axios.get("/api/"+id)
            .then((data)=>{
                var homeObj = data.data;
                this.setState({obj: homeObj})
                if(!sessionStorage.getItem('token')) return;
                axios.post("/auth/authorize",{token: sessionStorage.getItem('token')})
                    .then(res=>{
                        this.setState({isAuthorized: res.data.canAccess})
                    })
            })
    }

    render(){
        return(
            <div>
            <div className="home-view-container">
                <div className="viewhome-image"><img src={this.state.obj.imgUrl} style={{width: "100%"}}></img></div>
                {this.state.obj.address&&<div className="address">{this.state.obj.address}</div>}
                {this.state.obj.location&&<div className="location">{this.state.obj.location}</div>}
                {this.state.obj.price&&<div className="price"><span>Price: $</span>{this.state.obj.price}</div>}
                {this.state.obj.rent&&<div className="rent"><span>Rent: $</span>{this.state.obj.rent}</div>}
                {this.state.obj.description&&<div className="description">{this.state.obj.description}</div>}
                <div class="placeholder-for-grid-so-image-extends-longer" style={{ height: "auto"}}></div>
            </div>
            <a href="/homes" className="back-to-homes-button">Back To Homes</a>
            <div style={{margin: "3vw"}}>{this.state.isAuthorized?<div>Home ID: {this.state.obj.id}</div>:<span></span>}</div>
            </div>
        )
    }
}

export default Viewhome