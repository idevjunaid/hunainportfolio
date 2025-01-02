import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { East as ArrowIcon } from '@mui/icons-material';

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#121214', py: 8, borderRadius: '16px' }}>
      <Container sx={{maxWidth:'1140px !importanat'}}>
        <Box sx={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'text.primary',fontSize:'2.5rem', lineHeight:'3.125rem'}}>
            Are You Ready to kickstart your project with a touch of magic?
          </Typography>
          <Typography 
            sx={{ 
              color: '#9f9f9f',
              fontSize: '1rem',
              lineHeight:'1.75rem',
              margin: '0 auto',
              mb: 4
            }}
          >
            Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities 
            to push the boundaries of design and deliver exceptional work.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {navigate('/contact');    setTimeout(() => {
              document.body.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);}}
            disableRipple
            endIcon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="remixicon "><path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path></svg>}
            sx={{
              color: '#fff',
              bgcolor: '#eb5d3a',
              border:'1px solid #eb5d3a',
              borderRadius: '20px',
              p:'12px 24px',
              fontSize: '1rem',
              textTransform:'none',
              fontWeight: 500,
              '&:hover': {
                bgcolor: 'transparent',
                borderColor: '#77777d33',
                '& .MuiSvgIcon-root': {
                  transform: 'translateX(4px)',
                }
              },
              '& .MuiSvgIcon-root': {
                transition: 'transform 0.3s ease-in-out',
              },
              transition: 'all 0.2s ease-in-out',
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
