import React from 'react'
import Jumbotron from "./Jumbotron"
import Title from "./Title"
import Agents from "./Agents.js"

class Main extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Jumbotron/>
                <Title title="About Us" description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" />
                <Agents number={3}/>
            </div>
        )
    }
}


export default Main