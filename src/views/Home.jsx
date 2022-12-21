import React from 'react';
import Button from '@components/Button';
import PageDecorator from '@components/PageDecorator';

function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-8">
        Welcome to
        <br />
        <span className="px-2 bg-rose-600/75">
          my pokedex application
        </span>
      </h1>
      <p className="text-xl">
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

      <PageDecorator className="order-first mt-20" />
    </div>
  );
}

export default Home;
