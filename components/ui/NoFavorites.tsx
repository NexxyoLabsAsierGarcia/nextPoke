import { Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <div style={{
        margin: '10px auto',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <h1>No hay favoritos</h1>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg"
          alt="No pokemon"
          width={150}
          height={150}
          style={{
            opacity: 0.2
          }}
        ></Image>
      </div>
  )
}
