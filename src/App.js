import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
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
      {/* <Route path="/home" element={<Home />} /> */}
      {/* <Route path="/reservations" element={<Reservations />} /> */}
      <Route path="/details/:name" element={<DetailsPage />} />
    </Routes>
  </div>
);

export default App;
