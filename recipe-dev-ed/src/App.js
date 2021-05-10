import React, {useEffect,useState} from "react";
import Recipe from "./Recipe";
import './App.css';
import Title from "./Title";
let searchxD="";
const App = () =>{

  const APP_ID = "e31b6325";
  const APP_KEY = "8c01bef9687508a592bb3d98efc6610b";

  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() =>{
    getRecipes();
  }, [query]);

  

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    
    setRecepies(data.hits);
    
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    searchxD=e.target.value;
    console.log(searchxD)

  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(searchxD);
    console.log("search" + searchxD)
    
  }

  return(

    <div className="App">
      <Title/>
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button onClick = {getSearch} className = "search-button" type = "submit">Search</button>
      </form>

      <div className="content">
          {recepies.map(recipe =>(
            <div className="recipes">
              <Recipe 
                ingredients={recipe.recipe.ingredients} 
                key={recipe.recipe.title} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}/>
            </div>
            
          ))}
      </div>
      
    </div>
  )
}

export default App;
