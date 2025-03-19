import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import Home from './routes/Home';
import Add from './routes/Add';
import List from './routes/List';
import NotFound from './routes/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
