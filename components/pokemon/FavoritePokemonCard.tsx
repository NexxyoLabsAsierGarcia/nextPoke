import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    pokemonId: number;
}

export const FavoritePokemonCard: React.FC<Props> = ({ pokemonId }) => {

    const router = useRouter();

    const onFavoriteClicked = () => { router.push(`/pokemon/${pokemonId}`); }

  return (
    <Card key={pokemonId} isHoverable isPressable style={{margin: '10px', width: '140px'}} onClick={onFavoriteClicked}>
        <CardBody style={{ padding: '0'}}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                alt={`${pokemonId} pokémon image`}
                width={'100%'}
                height={140}
                shadow="sm"
                radius="lg"
                className="w-full object-contain h-[140px]"
            />
        </CardBody>
        <CardFooter className="text-small justify-between">
            <p className="text-default-500">#{pokemonId}</p>
            {/* <p className="text-default-500" style={{color: 'red'}} onClick={removeFavorite(id)}>X</p> */}
        </CardFooter>
    </Card>
  )
}
