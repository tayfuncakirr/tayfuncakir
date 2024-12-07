import React from 'react'

const SearchInput = (props)=> {
    
   
  return (
    <div>
        <input name="search" className='inputsearch' 
        value={props.search}
        onChange={props.changeSearch}
        placeholder=' search pokemons...'/>
    </div>
  )
}

export default SearchInput