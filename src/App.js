import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './views/Dashboard/Dashboard';
import TicketCreationForm from './views/AddTickets/Tickets';
import AppBars from './components/AppBar/AppBar';
import Sidebar from './components/SideBar/Sidebar';
import { useState } from 'react';
import QueueDisplay from './views/TicketView/TicketView';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<AppWithAppBar component={<Dashboard />} />} />
        <Route path="/signup" element={<SignInWithNavbar component={<SignUp />} />} />
        <Route path="/tickets" element={<AppWithAppBar component={<TicketCreationForm />} />} />
        <Route path="/ticketview" element={<AppWithAppBar component={<QueueDisplay />} />} />
        <Route path="/" element={<SignInWithNavbar component={<SignIn />} />} />
      </Routes>
    </Router>
  );
}

// Componente que muestra el Navbar junto con el contenido
const SignInWithNavbar = ({ component }) => (
  <>
    <Navbar />
    {component}
  </>
);


// Componente que muestra el AppBars junto con el contenido
const AppWithAppBar = ({ component }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  return (
    <>
      <AppBars handleDrawerToggle={handleDrawerToggle} />

      <Sidebar open={mobileOpen} toggleDrawer={handleDrawerToggle} />

      {component}
    </>
  )
};

export default App;
