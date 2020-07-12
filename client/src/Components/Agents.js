import React from "react"

function Agents(props){
    var arr = [];
    for(var i =0; i<props.number;i++){
        arr.push(
            <div class="agent">
                    <img className="agent-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREC96n-JINuzTgkyUBZImdvT77GI89GpvbNw&usqp=CAU"></img>
                    <div className="agent-name">First Name, Last Name</div>
                    <div className="agent-email">Email: <a href="mailto:firstlast@company.com">firstlast@company.com</a></div>
            </div>
        )
    }
    return(
        <div>
            <h2 class="agents-title">Agents</h2>
            <div className="agents-list">
               {arr}
            </div>
        </div>
    )
}

export default Agents