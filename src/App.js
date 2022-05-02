import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ReserveForm from './pages/ReserveForm';

const App = () => (
  <Routes>
    <Route path="/" element={(<Home />)} />
    <Route path="/reserve" element={(<ReserveForm />)} />
  </Routes>
);

export default App;
