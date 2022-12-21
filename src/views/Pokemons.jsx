import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from '@components/Pokemon';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('/pokemon?limit=10&offset=0')
      .then((res) => setPokemons(res.data.results))
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <h1 className="mb-5">Pokemons</h1>

      <ul className="grid min-[420px]:grid-cols-2 min-[520px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 min-[520px]:gap-4">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemonBase={pokemon} />
        ))}
      </ul>
    </div>
  );
}

export default Pokemons;
