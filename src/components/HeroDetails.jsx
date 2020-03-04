import React, {Component} from "react-router-dom";

class HeroDetails extends Component{
state = {};
render(){
return(
<div>
    <h1>Hero Details : {this.props.match.params.id}</h1>
    <button onClick={this.goHome}> Go Home </button>
    </div>
);
}
goHome = ()=>{
this.props.history.push("/home");

};
}

export default HeroDetails;