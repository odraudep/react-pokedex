import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from '@views/Error404';
import Home from '@views/Home';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default MainRoutes;
