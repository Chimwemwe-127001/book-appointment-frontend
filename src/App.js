import { Routes, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
import Home from './pages/Home';
import ReserveForm from './pages/ReserveForm';
import PersistLogin from './components/sessions/PersistLogin';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoutes';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login';
import Logout from './components/sessions/Logout';
import DetailsPage from './pages/DetailsPage';

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
      <Route path="/home" element={<Home />} />
      <Route path="/reserve" element={(<ReserveForm />)} />
      <Route path="/details/:name" element={<DetailsPage />} />
    </Routes>
  </div>
);

export default App;
