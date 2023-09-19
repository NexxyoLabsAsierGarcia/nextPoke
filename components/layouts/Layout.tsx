import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '': window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  
  return (
    <>
    <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Asier" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="kewords" content={ `${title}, pokemon, pokedex` } />
        <meta property="og:title" content={`Información sobre el pokémon ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre el pokémon ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>

    <Navbar></Navbar>

    <main style={{
        padding: '0px 20px'
    }}>
        { children }
    </main>
    </>
  )
}
