import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PersistLogin from './components/sessions/PersistLogin';
import PrivateRoute from './components/routes/PrivateRoute';
import DashBoard from './components/sessions/Dashboard';

const App = () => (
  <div className="text-sky-500 d-flex">
    <Routes>
      <Route element={<PersistLogin />}>
        <Route
          path="/"
          element={(
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          )}
        />
      </Route>
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
);

export default App;
