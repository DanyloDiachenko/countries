import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/details" element={<Details />} />
      <Route path="*"  element={<NotFound />} />
    </Routes>
  )
}
  
export default App;