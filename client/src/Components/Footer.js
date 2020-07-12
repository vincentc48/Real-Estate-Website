import React from "react"
import { withRouter } from "react-router-dom"

function Footer(){
    var styles={
        width: "100%",
        height: "15vh",
        backgroundColor: "black",
        position: "relative"
    }
    var copyrightStyles ={
        color: "white",
        position: "absolute",
        bottom: "40%",
        right: "10%",
        fontSize: "16px"
    }
    return(
        <footer style={styles}>
            <div style={copyrightStyles}>&copy; Copyright Real Estate 2020</div>
        </footer>
    )
}

export default Footer