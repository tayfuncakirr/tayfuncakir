import React from 'react'
import axios from 'axios'




import { useState,useEffect } from 'react'
import Pokemon from '../component/Pokemon'




function Poke(props) {
    const [pokes,setPokes] = useState([])
    
    
    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/tahsincanpolat/pokedex/pokemons')
       .then((response)=>{
            setPokes(response.data)
            
       })

    },[]);
      
      
  return (
    
      <div className='data-wrapper container'>
        <div className='row p-3'>
            {
            pokes.filter(pokemon=>pokemon.name.toLowerCase().includes(props.search.toLowerCase())).map((pokemon,key)=>{
                return(
                   <Pokemon pokemon={pokemon} key={key}/>

                )
            })
            }
        
    </div>
    </div>
    
  )
}

export default Poke