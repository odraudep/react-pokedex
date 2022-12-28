import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PokemonItem from '@components/PokemonItem';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPokemons, setNextPokemons] = useState();
  const timeToFetchMorePokemons = useRef(null);

  useEffect(() => {
    axios
      .get('/pokemon?limit=20&offset=0')
      .then((res) => {
        setPokemons(res.data.results);

        setNextPokemons(res.data.next);
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
        return setNextPokemons(res.data.next);
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
    </div>
  );
}

export default Pokemons;
