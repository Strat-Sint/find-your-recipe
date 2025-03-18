import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NotFnd from '../components/NotFnd'
import NavBar from '../components/NavBar'

function Recipe() {

    const [recipes, setRecipes] = useState([])
    const { id } = useParams()
    const recipeID = Number(id)

  
  useEffect(() => {  

    fetch(`https://dummyjson.com/recipes`)
    .then(response => response.json())
    .then(data => {
      setRecipes(data.recipes);
    })
  }, [])

  const isOver = () => {
    if(recipeID > 30) {
      return true
  } else {return false}
  }

  return (
    <>
      <NavBar />
      <div className="singleContainer">
      <div className='singleRecipe'>
      {isOver() ? <NotFnd/> : null }
        {recipes.map((recipe, i) => {     
          if(recipe.id === recipeID) { 
              return (
                  <div className="recCard" key={i}>
                      <h2>{recipe.name}</h2>
                      <div className="recInside">
                          <img src={recipe.image} alt="" className='recipeImg'/>
                          <div className="ingridients">
                              <h3>Ingredients:</h3>
                              <ul className='liIngr'>
                                  {recipe.ingredients.map((ingr,ind) => {
                                      return (
                                          <li key={ind}>{ingr}</li>
                                      )
                                  })}
                              </ul>
                          </div>
                      </div>
                      <div className="instructions">
                          <h3>Instructions:</h3>
                          <p>{recipe.instructions.join(' ')}</p>
                      </div>
                      <div className="info">
                          <p><span>Difficulty</span>: {recipe.difficulty}</p>
                          <p><span>Rating</span>: {recipe.rating} out of 5</p>
                          <p><span>Time</span>: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes</p>
                          <p><span>Cuisine</span>: {recipe.cuisine}</p>
                          <p><span>Servings</span>: {recipe.servings} portions</p>
                          <p><span>Calories</span>: {recipe.caloriesPerServing} kcal</p>
                      </div>                  
                  </div>
              ) 
          }
        })} 
      </div>
    </div> 
    </>   
  )
}

export default Recipe
