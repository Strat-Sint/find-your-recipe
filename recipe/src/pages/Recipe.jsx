import React from 'react'
import { useParams } from 'react-router-dom'
import NotFnd from '../components/NotFnd'
import NavBar from '../components/NavBar'
import SingleRecipe from '../components/SingleRecipe'

function Recipe() {

    
    const { id } = useParams()
    const recipeID = Number(id)

  
  

  const isOver = () => {
    if(recipeID > 30) {
      return true
  }
  }

  return (
    <>
      
      <NavBar />   
          
      {isOver() ? <NotFnd/> : <SingleRecipe />  }
      
    </>   
  )
}

export default Recipe
