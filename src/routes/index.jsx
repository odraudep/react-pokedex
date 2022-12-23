import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@views/Home';
import Pokemons from '@views/Pokemons';
import Pokemon from '@views/Pokemon';
import Error404 from '@views/Error404';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/pokemon/:name" element={<Pokemon />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default MainRoutes;
