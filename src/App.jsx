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
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './components/Loading';

function App() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProviderWrapper>

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
        <Box component="div" sx={{ flex: 1 }}>
          {loading ? <Loading isVisible={loading} /> : (
            <>
              <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<WorkPage />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>

                <Container  sx={{ mt: 5, maxWidth:'1140px !important' }}>
                  <ContactCTA />
                </Container>
                <Footer />
              </Router>
            </>
          )}
        </Box>
      </Box>
    </ThemeProviderWrapper>
  );
}

export default App;
