import React, {component} from "react"
import { Component } from "react";
import{Link} from "react-router-dom"

class NavBar extends Component{

    state = {};
    render() {
    return (
<nav class="navbar navbar-dark bg-dark">
<Link className="navbar-brand" to="/home"> 
Home
</Link>
<Link className="navbar-brand" to="/heroes"> Heroes
</Link>
</nav>
    );
}
}

export default NavBar;