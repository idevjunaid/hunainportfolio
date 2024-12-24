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
        fontFamily: 'Inter, sans-serif',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        {letters.map((letter, index) => (
          <Box
            key={index}
            sx={{
              fontSize: '32px',
              fontWeight: '100',
              color: '#9f9f9f', 
              opacity: 0,
              animation: `fadeInOut 1.4s ease-in-out ${index * 0.2}s infinite`, // Staggered timing
            }}
          >
            {letter}
          </Box>
        ))}
      </Box>
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 0;
            }
            50% {
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
