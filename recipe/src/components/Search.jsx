import React from 'react'
import {FaSearch} from 'react-icons/fa'

function Search({searchTerm, setSearchTearm}) {
  
  return (
    <div className='search'>
      <FaSearch className='search-icon'/>
      <input className='input' type="text" 
      placeholder='Filter by food name:' 
      value={searchTerm}
      onChange={(e) => setSearchTearm(e.target.value)}/>
    </div>
  )
}

export default Search
