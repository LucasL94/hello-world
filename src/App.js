import './App.css';

import { Route, Routes } from 'react-router-dom'

import Books from './components/books/Books'
import CardsPage from './CardsPage'
import Header from './Header'
import React from 'react'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<CardsPage />} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
