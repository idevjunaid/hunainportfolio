import React from 'react';
import { Box, Container } from '@mui/material';
import Work from '../components/shared/Work';

const WorkPage = () => {
  return (
    <Box>
      <Container sx={{maxWidth:'1140px !important'}}>
        <Work showAll={true} />
      </Container>
    </Box>
  );
};

export default WorkPage;
