import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Departments from './pages/Departments';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import StudentPortal from './pages/StudentPortal';
import Contact from './pages/Contact';

function App(){
  return (
    <Router>
      <NavBar />
      <Container sx={{ mt: 4, mb: 6 }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/departments" element={<Departments/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/admissions" element={<Admissions/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/portal" element={<StudentPortal/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
