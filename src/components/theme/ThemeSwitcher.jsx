import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../context/ThemeContext';

const ThemeSwitcher = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton 
      onClick={colorMode.toggleColorMode} 
      color="inherit"
      sx={{ 
        '&:focus': {
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: '#eb5d3a',
        },
        '& .MuiSvgIcon-root': {
          fontSize: '1.5rem',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'rotate(30deg)',
          }
        }
      }}
    >
      {theme.palette.mode === 'dark' ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
