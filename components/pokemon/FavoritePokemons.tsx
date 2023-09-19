import React from 'react'
import { FavoritePokemonCard } from './';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: React.FC<Props> = ({ pokemons }) => {

  return (
    <div style={{
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'space-around',
      gap: '10px'
    }}>
      {
        pokemons.map(id => (
          <FavoritePokemonCard key={id} pokemonId={id} />
        ))
      }
    </div>
  )
}
