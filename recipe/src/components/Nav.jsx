import React from 'react'
import { Link } from 'react-router'

function Nav() {
  return (
    <div className='nbar'>
          <nav className='bar'>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/results'>Search Recipe</Link></li>
            </ul>
          </nav>
        </div>
  )
}

export default Nav
