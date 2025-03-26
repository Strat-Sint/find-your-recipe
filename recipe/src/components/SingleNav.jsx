import React from 'react'
import { Link } from 'react-router'

function SingleNav() {
    return (
        <div className='navbar hide-small'>
          <nav className='nav'>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/results'>Search Recipe</Link></li>
            </ul>
          </nav>
        </div>
      )
}

export default SingleNav
