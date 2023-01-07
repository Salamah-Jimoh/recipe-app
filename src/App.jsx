import { useState, useEffect } from 'react'
import './App.css'
import Recipe from './Recipe';
function App() {
/*const APP_ID = import.meta.env.VITE_REACT_APP_ID;
const APP_KEY = import.meta.env.VITE_REACT_APP_KEY;*/
const APP_ID  = '43a0645d';
const APP_KEY = 'd2c78f5e3bff03bdf400aa1f671a2504'
const[recipes, setRecipes]= useState([]);
const[search, setSearch] = useState('');
const[query, setQuery] = useState('spaghetti');
useEffect(()=>{
 getRecipes();
  
}, [query])
const getSearch = e =>{
e.preventDefault();
setQuery(search);
setSearch('')
}
const getRecipes = async()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits)
}
  return (
    <div className="App">
    <h1 className='m-6 text-3xl'>Search<span className='text-orange-500 text-4xl'>Recipe</span></h1>
    <p className='text-gray-500 m-4 '>Hello there! What would you like to cook?</p>
    <form action="" onSubmit={getSearch} className='form shadow-lg p-8'>
      <input type="text" 
      className='search rounded shadow-md focus:border-orange-600 focus:outline-none'
      placeholder='Search over 2.3 million recipes' value={search} onChange={(e)=>{
        setSearch(e.target.value) 
      } } />
      <button type="submit" className='btn shadow-md bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>Search</button>
    </form>
    {recipes.map(recipe =>(<Recipe 
    title={recipe.recipe.label} 
    cuisine={recipe.recipe.cuisineType}
    images={recipe.recipe.image}
    ingredients={recipe.recipe.ingredients}
    meal={recipe.recipe.mealType}
    key={recipe.recipe.calories}
    />))}
    <div className="footer">Developed by <a href="https://salamah.netlify.app" className='text-blue-500'> Salamah</a></div>
    </div>
  )
 
}

export default App
