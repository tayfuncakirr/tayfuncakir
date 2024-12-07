import React, { useState } from 'react' 
import Poke from './pages/Poke.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'
import SearchInput from './SearchInput.jsx'



function App() {
  const [search,setSearch]= useState("")
  const changeSearch = event => setSearch(event.target.value);
  return (
    <>
    <SearchInput search={search} changeSearch={changeSearch}/>
    <Poke search={search}/>
    </>
  )
}

export default App
