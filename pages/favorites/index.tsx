import { Layout } from "@/components/layouts";
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import React, { useEffect, useState } from 'react';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons );
  }, [])  

    return (
      <Layout title="Favorite Pokemons">

        {
          favoritePokemons.length === 0
            ? ( <NoFavorites /> )
            : ( <FavoritePokemons pokemons={favoritePokemons} /> )
        }

      </Layout>
    )
}
  
export default FavoritesPage;