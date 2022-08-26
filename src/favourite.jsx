import React, {Component} from "react";
import "./App.css";
import "./home.css";

class Favourite extends Component {
    

    getItem=(key) =>{
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    render() {
        const isFav = this.getItem('favorites') != null
        return (
        <div>
           <h1 className="head">Favorites Dogs List</h1> 
           <div>
            {isFav ?
            this.getItem('favorites').map(img_url => 
                <img  key={img_url} className="home5Main" src={img_url} alt = "Favorite Image" width="200px" height="200px"/> 
            )
                :<h3 className="no">No Favorites Dog selected</h3>
            }
            </div>
        </div>
    )}
    }

export default Favourite;