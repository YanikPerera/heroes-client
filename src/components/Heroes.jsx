import React,{Component} from "react";
import Hero from "./Hero"
import Axios from "axios";
class Heroes extends Component{
state = {
allHeroes : [

]
};
render() {

return(
<div className="container">
    <div className = "row">
   
        {this.state.allHeroes.map(h =>(
        <div key={Hero.id}className="col">
                 <Hero hero={h}/>
             </div>
        ))}

</div>
</div>);
}
async componentDidMount(){

    const {data} = await Axios.get("http://localhost:5000/api/heroes");
    console.log(data);
    let heroes = data.map(hero => {
        return {
        id : hero._id, 
        name : hero.name, 
        imgUrl : hero.imgUrl,
        likeCount: hero.likeCount,
        movies : hero.movies
    };

    }); 
    this.setState({ allHeroes:heroes});
    
}

}

export default Heroes;
