import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearchPlus } from 'react-icons/fa';
import { pokemonTypesColour } from '@utils/colors';
import { toPropercase } from '@utils/stringFormatter';

function PokemonItem({ pokemonBase }) {
  const [pokemon, setPokemon] = useState();
  const pokemonTypeColour = pokemonTypesColour[pokemon?.types[0].type.name];

  useEffect(() => {
    axios
      .get(pokemonBase.url)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <li
      className="flex flex-col justify-end h-full relative p-4 overflow-hidden rounded shadow bg-slate-700"
      style={{ color: pokemonTypeColour }}
    >
      {pokemon ? (
        <>
          <div>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`${toPropercase(pokemon.name)} - Front View`}
              className="max-h-48 max-w-full mx-auto"
            />
            <hr className="my-4 opacity-25" />
            <h3 className="text-xl text-center">
              {toPropercase(`${pokemon.name}`)}
            </h3>
          </div>

          <Link
            className="grid place-items-center absolute inset-0 bg-rose-600/75 opacity-0 transition-opacity text-white hover:opacity-100 focus:opacity-100"
            to={`/pokemon/${pokemon.name}`}
          >
            <FaSearchPlus size="3em" />
          </Link>
        </>
      ) : null}
    </li>
  );
}

export default PokemonItem;
