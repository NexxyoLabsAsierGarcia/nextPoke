import { SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: React.FC<Props> = ({pokemon}) => {

    const router = useRouter();

    const onClick = () => { router.push(`/name/${pokemon.name}`); }

  return (
    <Card shadow="sm" isHoverable isPressable onClick={onClick} style={{width: '140px'}}>
        <CardBody className="overflow-visible p-0">
            <Image
            shadow="sm"
            radius="lg"
            width="100%"
            height={140}
            alt={`${pokemon.name} image`}
            className="w-full object-contain h-[140px]"
            src={pokemon.img}
            ></Image>
        </CardBody>
        <CardFooter className="text-small justify-between">
            <b style={{textTransform: 'capitalize'}}>{pokemon.name}</b>
            <p className="text-default-500">#{pokemon.id}</p>
        </CardFooter>
    </Card>
  )
}
