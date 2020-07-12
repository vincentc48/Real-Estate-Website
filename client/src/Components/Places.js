import React from "react"

function Places(){
    const iframeStyles ={
        width: "90%",
        height: "100vh",
        margin: "6vh 5% 5% 5%",
        border: "3px solid black"
    }
    const titleStyles = {
        margin: "8vh 0 0 6%",
        fontSize: "40px"
    }
    return(
        <div>
            <h2 style={titleStyles} className="places-title">Explore</h2>
            <iframe style ={iframeStyles}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8657333247015!2d-73.95447848472946!3d40.808944179321486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW%20123rd%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1594322073367!5m2!1sen!2sus" allowFullScreen="" ariaHidden="false" tabIndex="0"></iframe>
        </div>
    )
}

export default Places