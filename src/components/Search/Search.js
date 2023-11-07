import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <form>
      <input  
        type='text'
        placeholder='Search for a drink'
        />
        <button className='search-btn'>🔎</button>
    </form>
  )
}

export default Search