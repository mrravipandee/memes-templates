import React from 'react';
import { Routes, Route } from "react-router-dom";
import { FaLaughSquint } from 'react-icons/fa';
import Home from './Pages/Home';
import Edit from './Pages/Edit';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex items-center justify-center bg-purple-600 bg-opacity-80 p-4 h-20">
        <div className="flex items-center space-x-2 text-white">
          <FaLaughSquint className="text-2xl" />
          <h2 className="text-2xl font-bold">Meme's Templates</h2>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
