import React from 'react';
import { Box, Container } from '@mui/material';
import Hero from '../components/home/Hero';
import AboutTeaser from '../components/sections/AboutTeaser';
import ServiceTeaser from '../components/sections/ServiceTeaser';
import Work from '../components/shared/Work';


const Home = () => {
  return (
    <Box component='section'>
      <Container sx={{maxWidth:'1140px !important'}}>
        <Hero />
        <Work showAll={false} />
      </Container>
    </Box>
  );
};

export default Home;
