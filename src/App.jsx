import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import axios from "axios";

import sadFace from "./Assets/sad-face.png";

function App() {
  /*const APP_ID = import.meta.env.VITE_REACT_APP_ID;
const APP_KEY = import.meta.env.VITE_REACT_APP_KEY;*/
  const APP_ID = "43a0645d";
  const APP_KEY = "d2c78f5e3bff03bdf400aa1f671a2504";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("all");

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  //using fetch method
  // const getRecipes = async () => {
  //   const response = await fetch(
  //     `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   );
  //   const data = await response.json();
  //   setRecipes(data.hits);
  // };

  //using axios
  const getRecipes = async () => {
    try {
      const res = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(res.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App w-full mx-auto lg:w-[75%]">
      {/* header */}
      <div className="flex flex-col mt-5 space-y-5 justify-between items-center mx-auto md:space-y-0 md:flex-row md:px-2">
        <div>
          <h1 className="text-3xl">
            Search
            <span className="text-orange-500 text-4xl italic font-bold">
              Recipe
            </span>
          </h1>
          <p className="text-gray-500">
            Hello there! What would you like to cook?
          </p>
        </div>

        <div className="">
          <form
            action=""
            onSubmit={getSearch}
            className="flex flex-row h-max border rounded border-orange-500 mx-auto md:w-[350px] md:max-w-[350px]"
          >
            <input
              type="text"
              className="search border-none outline-none flex-1 bg-transparent pl-2"
              placeholder="Search over 2.3 million recipes"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyUp={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="btn shadow-md bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {recipes.length ?  (
        <div className="mt-20 mx-auto gap-2  grid grid-cols-2 md:gap-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
          {recipes.map((recipe, i) => (
            <Recipe
              title={recipe.recipe.label}
              cuisine={recipe.recipe.cuisineType}
              images={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              meal={recipe.recipe.mealType}
              key={i}
            />
          ))}
        </div>
      ) : (
        <div className="my-10 text-center">
          <img src={sadFace} alt="" className="h-48 mx-auto" />
          <button
            className="bg-orange-500 py-2 px-5 text-white mt-5 rounded font-semibold"
            onClick={() => setQuery("All")}
          >
            Try Searching
          </button>
        </div>
      )}

      <div className="footer text-center">
        Developed by{" "}
        <a href="https://salamah.netlify.app" className="text-blue-500">
          {" "}
          Salamah
        </a>
      </div>
    </div>
  );
}

export default App;
