import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { List } from './components/List';
import { Card } from './components/Card';
import { ALL_COUNTRIES } from './config';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path='/details' element={<Details />} />
      <Route element={<NotFound />} />
    </Routes>
  )
}
  
export default App;