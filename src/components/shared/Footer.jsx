import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#000000',
        py: 4,
        mt: 5
      }}
    >
      <Container sx={{maxWidth:'1140px !important'}}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography 
            variant="body2" 
            fontWeight={500}
            fontSize={'0.875rem'}
            lineHeight={'1.25rem'}
            sx={{ 
              color: '#9f9f9f',
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            Copyright 2024, Hunain All Rights Reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 0.5,
            color: '#9f9f9f',
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight:'1.25rem'
          }}>
            Crafted with <FavoriteIcon sx={{ color: '#eb5d3a', fontSize: '1rem' }} /> by{' '}
            <Link 
              href="https://portfolio-junaid-85331.web.app" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#eb5d3a',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              devjunaid
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
