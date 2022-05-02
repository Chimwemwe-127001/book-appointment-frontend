import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const App = () => (
  <div className="text-sky-500 d-flex">
    <Router>
      <Routes>
        {/* <Route element={<Login />} >
          <Route path="/" element={
            <PrivateRoute >
              <DashBoard />
            </PrivateRoute>
          } />
        </Route> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    <Home />
  </div>
);

export default App;
