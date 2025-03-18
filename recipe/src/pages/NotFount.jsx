import React from 'react'
import NavBar from '../components/NavBar'

function NotFount() {
  
  return (
    <div>
      <NavBar />
      <div className="notFound">
        <h1>404 Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
      </div>
    </div>
  )
}

export default NotFount
