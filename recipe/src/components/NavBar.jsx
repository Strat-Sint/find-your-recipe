import React from 'react'
import { Link } from 'react-router'


function NavBar() {
  return (
    <div className='navbar'>
      <nav className='nav'>
        <ul>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/results'>Search Recipe</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
