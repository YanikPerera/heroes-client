import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from "react-router-dom";
import Heroes from "./components/Heroes";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HeroDetails from "./components/HeroDetails"
//const firstElement = <h1>Hello World</h1>;

//ReactDOM.render(firstElement, document.getElementById("root"));//root getting from index.html
ReactDOM.render(
<BrowserRouter>
<React.Fragment>

    <NavBar/>
    <Route exact path = "/" component = {Home}></Route>>
    <Route exact path = "/heroes" component = {Heroes}></Route>>
    <Route exact path = "/home" component = {Home}></Route>>
    <Route exact path = "/heroes/:id" component = {HeroDetails}></Route>>
    

</React.Fragment>
</BrowserRouter>,
document.getElementById("root"));




//const firstElement = <h1>Hello World</h1>;

//ReactDOM.render(firstElement, document.getElementById("root"));//root getting from index.html
