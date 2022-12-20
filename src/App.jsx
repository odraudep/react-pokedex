import React from 'react';
import MainRoutes from './routes';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="container mx-auto">
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
