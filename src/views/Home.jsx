import React from 'react';
import Button from '@components/Button';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">Welcome to my pokedex application</h1>
      <p className="mt-4 text-xl">
        It was made using ReactJS and
        {' '}
        <a href="https://pokeapi.co/" className="underline">
          https://pokeapi.co
        </a>
        .
      </p>
      <hr className="my-4 opacity-10" />
      <p>Click on the button below to check for pokemons.</p>
      <Button className="mt-4" to="/pokemons">
        Click here
      </Button>

      <div className="flex justify-center items-end mt-20">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif"
          alt="Pokemon 1"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/62.gif"
          alt="Pokemon 1"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif"
          alt="Pokemon 1"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif"
          alt="Pokemon 1"
        />
      </div>
    </div>
  );
}

export default Home;
