import { Routes, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import './App.css';
import Home from './pages/Home';
import ReserveForm from './pages/ReserveForm';
import PersistLogin from './components/sessions/PersistLogin';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoutes';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login';
import Logout from './components/sessions/Logout';
import DetailsPage from './pages/DetailsPage';
import Reservations from './pages/Reservations';

const App = () => (
  <div className="text-sky-500">
    <Routes>
      <Route element={<PersistLogin />}>
        <Route
          path="/"
          element={(
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )}
        />
        <Route
          path="/reservations"
          element={(
            <PrivateRoute>
              <Reservations />
            </PrivateRoute>
          )}
        />
        <Route
          path="/details/:name"
          element={(
            <PrivateRoute>
              <DetailsPage />
            </PrivateRoute>
          )}
        />
        <Route
          path="/logout"
          element={(
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          )}
        />
        <Route
          path="/signup"
          element={(
            <PublicRoute>
              <Signup />
            </PublicRoute>
          )}
        />
        <Route
          path="/login"
          element={(
            <PublicRoute>
              <Login />
            </PublicRoute>
          )}
        />
      </Route>
      <Route path="/reserve" element={(<ReserveForm />)} />
    </Routes>
  </div>
);

export default App;
