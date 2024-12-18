import React from 'react';
import { Box, Container } from '@mui/material';
import Work from '../components/shared/Work';

const WorkPage = () => {
  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        <Work showAll={true} />
      </Container>
    </Box>
  );
};

export default WorkPage;
