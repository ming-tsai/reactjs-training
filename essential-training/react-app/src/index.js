import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Contact, About, History } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Star from './Star';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/star' element={<Star />} />
      <Route path='/about' element={<About />}>
        <Route path='/about/history' element={<History />} />
      </Route>
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
