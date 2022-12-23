import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainRoutes from './routes';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="container min-h-[75vh] mt-8 mx-auto py-4 px-5 rounded shadow-lg bg-slate-800">
        <MainRoutes />
      </div>

      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
