import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AboutTeaser = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container>
        {/* About teaser content will go here */}
      </Container>
    </Box>
  );
};

export default AboutTeaser;
