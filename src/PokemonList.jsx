import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
<<<<<<< HEAD
    <div className="list-container" style={{ backgroundColor: '#eeeeee' }}>
=======
    <div className="list-container" style={{ backgroundColor: 'red' }}>
>>>>>>> 637d1383c6358cff96d80e3d4d221a6690b3c37b
      {pokemonList.map(({ id, name }) => (
        <Link
          key={id}
          to={`/pokemon/${name}`}
          className="list-item"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
          }}
        >
          <div className="list-item-name">{name}</div>
        </Link>
      ))}
    </div>
  )
}

export default PokemonList
