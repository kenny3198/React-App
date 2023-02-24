import "./App.css"
import React, { useEffect, useState} from "react"
import Recipe from "./Recipe"
 function App () {

const APP_ID = "3f1573a5"
const APP_KEY = "b0d66be0c35a3a9658d9eb2730d94faa"

const [recipes, setRecipes] = useState([]) 
const [search, setSearch] = useState("")
const [query, setQuery] = useState("chicken")
const updateSearch = e => {
  setSearch(e.target.value)
}
const getSearch = e => {
  e.preventDefault()
  setQuery(search)
  setSearch("")
}
useEffect(() => {

getRecipes();

 }, [query]);

 const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     const data =  await response.json()
     setRecipes(data.hits);
     console.log(data.hits);
  }

return(
    <div className="App">
    <form onSubmit={getSearch} className="form-search">
      <input className="search-bar" placeholder="Search Recipes" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit" >Search</button>
    </form>
    <div className="recipes">
       {recipes.map (recipe => (
     <Recipe key={recipe.recipe.label} title={recipe.recipe.label} 
      ingredients={recipe.recipe.ingredients}  calories={recipe.recipe.calories}
      image={recipe.recipe.image}
     />
       ))}
       </div>
    </div>
  )
 }
 export default App;