import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "./Components/Main.js"
import Navigation from "./Components/Navigation.js"
import Homes from "./Components/Homes.js"
import Viewhome from './Components/Viewhome'
import Modify from "./Components/Modify.js"
import Places from "./Components/Places.js"
import Agents from "./Components/Agents.js"
import Footer from "./Components/Footer"
import Admin from "./Components/Admin"

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/homes" component={Homes}></Route>
          <Route path="/viewhome/:id" component={Viewhome}></Route>
          <Route path="/places" component = {Places}></Route>
          <Route path="/agents" component ={()=><Agents number={9}/>}></Route>
          <Route path="/admin" component = {Admin}></Route>
        </Switch>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
