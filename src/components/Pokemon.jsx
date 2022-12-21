import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toPropercase } from '@utils/stringFormatter';
import { Link } from 'react-router-dom';
import { FaSearchPlus } from 'react-icons/fa';

function Pokemon({ pokemonBase }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(pokemonBase.url)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <li className="flex flex-col justify-end h-full relative p-4 overflow-hidden rounded shadow bg-slate-700">
      {pokemon ? (
        <>
          <div>
            <img
              src={pokemon.sprites?.other.dream_world.front_default}
              alt={`${toPropercase(pokemon.name)} - Front View`}
              className="max-h-48 max-w-full mx-auto"
            />
            <hr className="my-4 opacity-25" />
            <h3 className="text-xl text-center">{toPropercase(`${pokemon.name}`)}</h3>
          </div>

          <Link
            className="grid place-items-center absolute inset-0 bg-rose-600/75 opacity-0 transition-opacity text-white hover:opacity-100 focus:opacity-100"
            to="/"
          >
            <FaSearchPlus size="3em" />
          </Link>
        </>
      ) : null}
    </li>
  );
}

export default Pokemon;
