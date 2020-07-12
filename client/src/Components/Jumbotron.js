import React from "react"
import {Link} from "react-router-dom"

class Jumbotron extends React.Component{
    constructor(){
        super()
        this.state = {
            imageFromTop: 0,
            displayBoolean: true,
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.moveJumbotron);
    }

    moveJumbotron = () => {
        console.log(window.scrollY + " window height:" + window.outerHeight);
        this.setState({
            imageFromTop: window.scrollY * 0.3,
            displayBoolean: window.scrollY > window.outerHeight?false:true,
        })
        
    }

    render(){
        return(
            <div>
                <div className="jumbotron" >
                    <div className="gradient-down"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        className="jumbotron-image" 
                        style={{top: this.state.imageFromTop, display: this.state.displayBoolean?"block":"none"}}
                    />
                    <div className="gradient-up"> </div>
                    <div id="jumbotron-text">Our Services
                        <div id="jumbotron-description">Lorem Ipsum sit dolor amet</div>
                        <Link to="/homes" className="jumbotron-button">Buy Now</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron