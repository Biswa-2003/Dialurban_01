import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Header/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var  About = React.lazy(()=> import ("./Components/About")) ;
import Blog from './Components/Blog';
import Career from './Components/Career';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Home1 from './MatriMony/Home1';
import AboutUs from './Components/Matrimony/AboutUs';
import ContactUs from './Components/Matrimony/ContactUs';
import Login from './Components/Matrimony/Login';
import PackageSelection from './Components/Matrimony/PackageSelection';

function App() {
  const location = useLocation();

  // Define a set of routes where Navbar is NOT displayed
  const routesWithoutNavbar = [
    '/matrimony/aboutus',
    '/matrimony/contactus',
    '/matrimony/login',
    '/matrimony/packageselection',
    '/home1',
  ];

  // Determine if the current path is included in the routesWithoutNavbar
  const isNavbarVisible = !routesWithoutNavbar.some((route) => location.pathname === route);

  // Debugging Logs
  console.log('Current Path:', location.pathname);
  console.log('Navbar Visible:', isNavbarVisible);

  return (
    <>
      {/* Conditionally render Navbar */}
      {isNavbarVisible && <Navbar />}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>}/>
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/home1" element={<Home1 />} />

        {/* Matrimony Routes */}
        <Route path="/matrimony/aboutus" element={<AboutUs />} />
        <Route path="/matrimony/contactus" element={<ContactUs />} />
        <Route path="/matrimony/packageselection" element={<PackageSelection />} />
        <Route path="/matrimony/login" element={<Login />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
