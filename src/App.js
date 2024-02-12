
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './views/Dashboard/Dashboard';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
