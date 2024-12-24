import React from 'react';
import { Box, Container } from '@mui/material';
import Work from '../components/shared/Work';

const WorkPage = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Work showAll={true} />
      </Container>
    </Box>
  );
};

export default WorkPage;
