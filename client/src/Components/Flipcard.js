import React from "react"
import {Link} from "react-router-dom"

class Flipcard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var url = `/viewhome/${this.props.obj.id}`
        return(
            <div className="card-container" style={{backgroundImage: `url(${this.props.obj.imgUrl})`,border: "none"}}>
                <div className="card">
                    <div className="card-front">
                    </div>
                    <div className="card-back" >
                        <div className="address">{this.props.obj.address}</div>
                        <div className="price">${this.props.obj.price || this.props.obj.rent + " /month"}</div> 
                        <Link className="view-button"to ={url}>View</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flipcard