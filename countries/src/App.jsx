import { useState, useEffect } from 'react';
import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ALL_COUNTRIES } from './config';

const App = () => {

  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch(ALL_COUNTRIES)
    .then((res) => res.json())
    .then((data) => setCountries(data))
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
};

export default App;
