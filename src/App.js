import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Books from './Books'
import CardsPage from './CardsPage'
import Header from './Header'
import { Button } from 'antd';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<CardsPage />} />
        <Route path='/books' element={<Books />} />
      </Routes>
      <Button type='primary'>Hola</Button>
    </div>
  );
}

export default App;
