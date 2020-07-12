import React from "react"
import Flipcard from "./Flipcard.js"
import axios from "axios"
import Title from './Title'

class Homes extends React.Component{
    constructor(){
        super()
        this.state = {
            homes: [],
        }
    }

    componentDidMount(){
        console.log(this.state.homes)
        axios.get("/api/allhomes")
            .then(data=>{
                var arr = data.data.homes
                const arrMapped = arr.map(element =>{
                    return (<Flipcard key={element.id}obj={element}/>)
                })
                console.log(arrMapped)
                this.setState({homes: arrMapped});
                console.log(this.state.homes)
            })
    }

    render(){
        const titleStyles ={
            width: '100%',
            textAlign: "center",
            padding: "30vh 10vw",
            color: "white",
            textShadow: "5px 5px 3px black",
            backgroundColor: "white",
            fontSize: "6vw",
            margin: "0px",
            backgroundImage: "url(https://images.pexels.com/photos/1146135/pexels-photo-1146135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
            backgroundSize: "100% 100%"
        }

            return(
                <div className="containerhomes" style={{margin: "0px", padding: "0px",width:"100%"}}>
                    <div className="homes-title" style={titleStyles}>Homes</div>
                    <Title title="Our Listings" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
                    <div className="homes-list" style={{margin: "10vh 0"}}>
                        {this.state.homes}
                    </div>
                </div>
            )
    }
}


export default Homes