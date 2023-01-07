import React from 'react'
import {Outlet, Link} from 'react-router-dom'

const Recipe = ({title, cuisine, images,  ingredients, meal}) => {
  return (
    <div className=''>
    <div className='flex flex-col justify-center items-center bg'>
      <h1 className='text-4xl mb-8 text-center pt-6'>{title}</h1>
      <div className='flex justify-center items-center'> <img className='max-w-full h-auto rounded shadow-xl' src={images} /></div>
<div className=' bg-white m-8 flex space-between shadow-md'>
      <div className='m-4'><p className='pt-1 font-semibold text-orange-500 text-xl'>Cuisine Type</p> <p className=' capitalize'>{cuisine}</p></div>
      <div className='flex-1 m-4'><p className='pt-1 font-semibold text-orange-500 text-xl'>Meal Type </p> <p  className=' capitalize'>{meal}</p></div>
      </div>
      <div className='flex'>
        <p className='mr-32 text-gray-600'>Ingredients</p>
        <p className='text-gray-600'>{ingredients.length} Items</p>
      </div>
      <ol className=' bg-white p-2 mt-8 mb-8 shadow-md'>
        {ingredients.map(ingredient =>(
            <li className='m-2 p-2'>{ingredient.text}</li>
        ))}

        </ol>
      <Outlet/>
    </div>
    </div>
  )
}

export default Recipe
