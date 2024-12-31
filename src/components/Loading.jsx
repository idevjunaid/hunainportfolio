import React from 'react';
import { Box } from '@mui/material';

const Loading = ({ isVisible }) => {
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
          <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#121212',
        fontFamily: 'Poppins,sans-serif',
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          transform: isVisible ? 'translateY(0)' : 'translateY(-1500px)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {letters.map((letter, index) => (
          <Box
          component='span'
            key={index}
            sx={{
              fontSize: '20px',
              fontWeight: '200',
              color: '#9f9f9f', 
              opacity: 0,
              animation: `loading 1s ease-in-out ${index * 0.1}s infinite alternate`, 
              transition: 'all 0.5s ease'
            }}
          >
            {letter}
          </Box>
        ))}
      </Box>
      <style>
        {`
          @keyframes loading {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
    </Box>
  );
};

export default Loading;
