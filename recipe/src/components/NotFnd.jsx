import React from 'react'
import NavBar from './NavBar'

function NotFnd( {number} ) {
  return (
    <div>
        <NavBar />
      <div className="notFound">
        <h1>404 Page Not Found</h1>
        <p>Sorry, the recipe you are looking for doesn't exist.</p>
        <p>We currently have {number} different recipes.</p>
        <p>Please enter a value of 1 up to {number}</p>
      </div>
    </div>
  )
}

export default NotFnd
