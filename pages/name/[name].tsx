import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import React from 'react';
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setisInFavorites] = React.useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      });
    }
  }

  return (
    <Layout title={`${pokemon.name} detail page`}>
        <div className="gap-2 grid grid-cols-4">
          <Card isHoverable className="col-span-1">
            <CardBody>
              <Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height="200px"
              ></Image>
            </CardBody>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <h1 style={{textTransform: 'capitalize'}}>{pokemon.name}</h1>
              <Button color='primary' onClick={onToggleFavorite}>
                { isInFavorites ? 'En Favoritos' : 'Guardar en favoritos' }
              </Button>
            </CardHeader>
            <CardBody>
              <p>Sprites:</p>
              <div style={{
                display: 'flex',
                flexFlow: 'wrap',
                gap: '10px',
                justifyContent: 'space-around'
              }}>
                <Image
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={100}
                  height={100}
                />
                <Image
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={100}
                  height={100}
                />
                <Image
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={100}
                  height={100}
                />
                <Image
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={100}
                  height={100}
                />
              </div>
            </CardBody>            
          </Card>
        </div>
    </Layout>
  )
}

export default PokemonByNamePage;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151'); 

  return {
    paths:  data.results.map( pkmn =>({
      params: { name: pkmn.name }
    })),
    fallback: false
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}
