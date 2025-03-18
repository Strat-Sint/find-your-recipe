import React from 'react'
import NavBar from './NavBar'

function NotFnd(  ) {
  return (
    <div>
        <NavBar />
      <div className="notFound">
        <h1>404 Page Not Found</h1>
        <p>Sorry, the recipe you are looking for doesn't exist.</p>
        <p>We currently have 30 different recipes.</p>
        <p>Please enter a value of 1 up to 30</p>
      </div>
    </div>
  )
}

export default NotFnd
