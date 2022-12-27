import React, { useState, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { toPropercase } from '@utils/stringFormatter';
import { pokemonTypesColour } from '@utils/colors';

function PokemonSolo({ pokemon }) {
  const [isSaved, setIsSaved] = useState(false);
  const pokemonTypeColour = pokemonTypesColour[pokemon.types[0].type.name];

  useEffect(() => {
    const savedPokemons = JSON.parse(localStorage.getItem('savedPokemons')) || [];
    const alreadySaved = savedPokemons.find(
      (savedPokemonId) => savedPokemonId === pokemon.id,
    );

    // Resets the state value when pokemon changes
    setIsSaved(false);

    if (alreadySaved) setIsSaved(true);
  }, [pokemon]);

  const toggleSavePokemon = () => {
    const savedPokemons = JSON.parse(localStorage.getItem('savedPokemons')) || [];
    const alreadySaved = savedPokemons.find(
      (savedPokemonId) => savedPokemonId === pokemon.id,
    );
    let newSavedPokemons;

    if (alreadySaved) {
      newSavedPokemons = savedPokemons.filter(
        (savedPokemonId) => savedPokemonId !== pokemon.id,
      );
    } else {
      newSavedPokemons = [...savedPokemons, pokemon.id];
    }

    localStorage.setItem('savedPokemons', JSON.stringify(newSavedPokemons));

    setIsSaved((prev) => !prev);
  };

  return (
    <div>
      <nav className="absolute">
        <button
          type="button"
          className="text-yellow-400"
          onClick={toggleSavePokemon}
        >
          {isSaved ? <AiFillStar size="2rem" /> : <AiOutlineStar size="2rem" />}
        </button>
      </nav>

      <div className="grid sm:grid-cols-6 md:grid-cols-8 gap-8">
        <div className="col-start-1 sm:col-start-3 md:col-start-3 lg:col-start-4 col-end-[-1] relative">
          <header>
            <h1 className="mb-8 text-4xl">{toPropercase(pokemon.name)}</h1>
            <span
              className="grid items-center px-2 absolute top-0 right-0 aspect-square rounded-full text-white"
              style={{ backgroundColor: pokemonTypeColour }}
            >
              {pokemon.id}
            </span>
          </header>

          <h2 className="text-2xl">Specifications:</h2>
          <ul className="mb-4">
            <li className="flex">
              <h4 className="mr-1 font-bold">Type:</h4>
              {' '}
              {toPropercase(pokemon.types[0].type.name)}
            </li>

            <li className="flex">
              <h4 className="mr-1 font-bold">Height:</h4>
              {pokemon.height >= 10
                ? `${pokemon.height / 10} m`
                : `${pokemon.height * 10} cm`}
            </li>

            <li className="flex">
              <h4 className="mr-1 font-bold">Weight:</h4>
              {pokemon.weight >= 10
                ? `${pokemon.weight / 10} Kg`
                : `${pokemon.weight * 100} g`}
            </li>
          </ul>

          <h2 className="text-2xl">Stats:</h2>
          <ul className="max-w-xs lg:max-w-xl">
            {pokemon.stats.map((pokemonStat) => (
              <li key={pokemonStat.stat.name} className="mb-2">
                <h4 className="font-bold">
                  {pokemonStat.stat.name.length > 2
                    ? toPropercase(pokemonStat.stat.name)
                    : pokemonStat.stat.name.toUpperCase()}
                  :
                </h4>

                <div className="relative">
                  <div className="h-4 rounded overflow-hidden bg-gray-500">
                    <div
                      className="h-full"
                      style={{
                        width: `${pokemonStat.base_stat}%`,
                        backgroundColor: pokemonTypeColour,
                      }}
                    />
                  </div>
                  <span className="absolute top-1/2 right-0 pl-2 translate-x-full -translate-y-1/2">
                    {pokemonStat.base_stat}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-start-1 sm:col-span-2 row-start-1 max-w-[225px] mx-auto sm:mx-0 sm:max-w-none">
          <div className="flex h-80">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`${toPropercase(pokemon.name)} - Front View`}
              className="max-h-full mt-auto mx-auto"
            />
          </div>
          <hr className="my-4" />

          <div className="flex justify-center items-end">
            <img
              src={pokemon.sprites.back_default}
              alt={`${toPropercase(pokemon.name)} - Back View`}
            />
            <img
              src={pokemon.sprites.front_default}
              alt={`${toPropercase(pokemon.name)} - Front View`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSolo;
