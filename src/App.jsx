import * as React from 'react';
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProviderWrapper } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import WorkPage from './pages/Work';
import ContactCTA from './components/shared/ContactCTA';
import Footer from './components/shared/Footer';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <Box 
          component="main"
          sx={{ 
            minHeight: '100vh',
            width: '100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Navbar />
          <Box component="div" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Container maxWidth="lg" sx={{ mt: 5 }}>
              <ContactCTA />
            </Container>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
