import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '@components/Button';
import PokemonSolo from '@components/PokemonSolo';

function Pokemon() {
  const [pokemon, setPokemon] = useState();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/pokemon/${name}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        toast.error('The pokemon was not found.');
        navigate('/pokemons');

        throw err;
      });
  }, [name]);

  return (
    <div>
      {pokemon ? (
        <>
          <PokemonSolo pokemon={pokemon} />

          <div className="flex justify-center gap-4 mt-20">
            {pokemon.id > 1 ? (
              <Button to={`/pokemon/${pokemon.id - 1}`}>
                Previous pokemon
              </Button>
            ) : null}
            <Button variant="secondary" to="/pokemons">
              Go to pokemons
            </Button>
            {pokemon.id < 905 ? (
              <Button to={`/pokemon/${pokemon.id + 1}`}>Next pokemon</Button>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Pokemon;
