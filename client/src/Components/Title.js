import React from "react"

class Title extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const styles = {
            backgroundColor:"black" ,
            width: "100%", 
            height: "auto", 
            margin:"0px", 
            zIndex: "100",
            position: "relative",
            marginTop: "-6vh",
            padding: "3vh",
        }
        const h2Styles ={
            color: "white",
            fontSize: "4vw",
            fontWeight: "100",
            padding: "6vw"
        }
        const textStyles = {
            color: "white",
            padding: "1vh 3vw 4vh 7vw",
            fontSize: "2vw",
        }
        return(
            <div  className="title"style={styles}>
                <div>
                    <h2 style={h2Styles}>{this.props.title}</h2><div style={textStyles}>{this.props.description}</div>
                </div>
            </div>
        )
    }
}

export default Title