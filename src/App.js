import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PersistLogin from './components/sessions/PersistLogin';
import PrivateRoute from './components/routes/PrivateRoute';
import DashBoard from './components/sessions/Dashboard';
import PublicRoute from './components/routes/PublicRoutes';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login';
import Logout from './components/sessions/Logout';

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
    </Routes>
  </div>
);

export default App;
