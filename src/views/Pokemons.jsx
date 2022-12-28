import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import PokemonItem from '@components/PokemonItem';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPokemons, setNextPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const timeToFetchMorePokemons = useRef(null);

  useEffect(() => {
    axios
      .get('/pokemon?limit=20&offset=0')
      .then((res) => {
        setPokemons(res.data.results);
        setNextPokemons(res.data.next);
        setIsLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const fetchMorePokemons = () => {
    axios
      .get(nextPokemons)
      .then((res) => {
        setPokemons((prev) => [...prev, ...res.data.results]);
        setNextPokemons(res.data.next);
        return setIsLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (timeToFetchMorePokemons.current) {
        clearTimeout(timeToFetchMorePokemons.current);
      }

      const isScrollEnd = window.scrollY + window.innerHeight >= document.body.scrollHeight;

      if (isScrollEnd) {
        setIsLoading(true);
        timeToFetchMorePokemons.current = setTimeout(fetchMorePokemons, 1000);
      }
    };

    if (nextPokemons) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeToFetchMorePokemons.current);
    };
  }, [nextPokemons]);

  return (
    <div>
      <h1 className="mb-5">Pokemons</h1>

      <ul className="grid min-[420px]:grid-cols-2 min-[520px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 min-[520px]:gap-4">
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.name} pokemonBase={pokemon} />
        ))}
      </ul>

      {isLoading ? (
        <div className="mt-14">
          <AiOutlineLoading3Quarters size="4rem" className="animate-spin mx-auto" />
        </div>
      ) : null}
    </div>
  );
}

export default Pokemons;
