import React from 'react'
const typesColor =(type)=>{

  switch(type){
    case "Electric":
      return "yellow";
    case "Fire":
      return "orange";
    case "Flaying":
      return "blue";
    case "Water":
      return "blue";
    case "Grass":
      return "green";
    case "Poison":
      return "gray";
    case "Rock":
      return "gray";
    case "Ground":
      return "yellow";
    case "Psychic":
      return "purple";
    case "Ground":
      return "red";
    default:
      return "green";
  }
}


function Pokemon({pokemon}) {

  return (
    <div className='data col-md-4'>
      <div className='pokemon-item'>
                <img src={pokemon.image.thumbnail} className='images' alt={pokemon.type}/>

              
          <p className='name '>{pokemon.name}</p>
          <p className='poke-type'>
          {Object.values(pokemon.type).map((type,index)=>(
            <div key={index} className="types" style={{backgroundColor:typesColor(type)}}>
              {type}
              
            </div>
          ))

          }
          </p>

      </div>
    
    

    
    
    </div>
  )
}

export default Pokemon