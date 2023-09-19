import { Spacer, Link } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: '#333333'
    }}
    >
        <Image
            src={'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/132.png'}
            alt='icono de la app'
            width={70}
            height={70}
        />

        <Link href={'/'}>
          <h2>Pokémon</h2>
        </Link>

        <Spacer style={{flex: 1}} />

        <Link href={'/favorites'}>
          <p>Favoritos</p>
        </Link>
    </div>
  )
}
