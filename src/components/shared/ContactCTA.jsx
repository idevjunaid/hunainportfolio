import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { East as ArrowIcon } from '@mui/icons-material';

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#121214', py: 8, borderRadius: '16px' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
            Are You Ready to kickstart your project with a touch of magic?
          </Typography>
          <Typography 
            sx={{ 
              color: '#9f9f9f',
              maxWidth: '800px',
              margin: '0 auto',
              mb: 4
            }}
          >
            Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities 
            to push the boundaries of design and deliver exceptional work.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate('/contact')}
            disableRipple
            endIcon={<ArrowIcon />}
            sx={{
              color: '#fff',
              bgcolor: '#eb5d3a',
              borderColor: '#eb5d3a',
              borderRadius: '20px',
              py: 1,
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                bgcolor: 'transparent',
                borderColor: '#fff',
                '& .MuiSvgIcon-root': {
                  transform: 'translateX(4px)',
                }
              },
              '& .MuiSvgIcon-root': {
                transition: 'transform 0.3s ease-in-out',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Let's Talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactCTA;
