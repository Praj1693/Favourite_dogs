import React, {Component} from "react";
import "./home.css";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {dogsList: [], favList:[]};
    }
   
    componentDidMount(){
        this.getDogs()
    }
    

    setItem=(key, item) => {
        localStorage.setItem(key, JSON.stringify(item));
    }

    getItem=(key) => {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    getDogs= async() => {
        for(let i =0;i<3;i++){
        await fetch("https://random.dog/woof.json").then(res=>res.json())
        .then(res => {this.setState({list:res.url})
        this.state.dogsList.push(res.url)
        })}
    }
    
    addFavorites=(image) => { 
        let a = JSON.parse(localStorage.getItem('favorites'))
        if(a) {
            a.push(image)
            this.setItem('favorites', a)
        }
        else{
        this.state.favList.push(image)
        
        this.setItem('favorites', this.state.favList)
        }
    }

    refresh = ()=>{
        window.location.reload();
    }

    render() {
        return (
        <div>
        <h1 className="head">All Dogs List</h1> <button className="button1" onClick={() => this.refresh()}>Refresh</button>
        { 
            this.state.dogsList.map(img_url => 
            <div key={img_url}>
            <img className="home5Main" src={img_url} alt = "Missing dog Image! (Found Video)" width="200px" height="200px"/> 
            <button className="button" onClick={() =>this.addFavorites(img_url)}>Add to Favorites</button><hr></hr></div>
        )}
        </div>
        )
    }
}

export default Home;