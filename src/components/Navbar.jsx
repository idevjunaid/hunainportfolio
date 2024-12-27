import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ThemeSwitcher from './theme/ThemeSwitcher';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Service', path: '/service' },
  { name: 'Works', path: '/work' },
  { name: 'Contact', path: '/contact' }
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/'); // Route to home when clicking on the logo
  };

  const handleHireMeClick = () => {
    navigate('/contact'); // Route to contact when clicking on "Hire Me"
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            cursor: 'pointer',
          }}
          onClick={handleLogoClick}
        >
          HUNAIN
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: 'inherit',
            '&:hover': { color: 'primary.main' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: 4,
        }}
      >
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(page.path)}
              disableRipple
              sx={{
                textAlign: 'center',
                py: 2,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: '#eb5d3a',
                  bgcolor: 'transparent',
                },
                color: location.pathname === page.path ? '#eb5d3a' : 'inherit',
              }}
            >
              <ListItemText
                primary={page.name}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      fontWeight: 700,
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleHireMeClick} // Added onClick for Hire Me
            disableRipple
            sx={{
              mt: 4,
              borderRadius: '20px',
              px: 6,
              py: 2.5,
              fontSize: '1.2rem',
              fontWeight: 600,
              transition: 'all 0.5s ease-in-out',
              '&:hover': {
                borderColor: '#eb5d3a',
                color: '#fff',
                bgcolor: '#eb5d3a',
              },
              '& .MuiButton-endIcon': {
                marginLeft: 2,
              },
            }}
            endIcon={<HandshakeOutlinedIcon />}
          >
            Hire Me
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          transition: 'padding 0.1s ease-in-out, box-shadow 0.3s ease-in-out',
          position: 'sticky',
          top: 0,
          left: 0,
          boxShadow: isScrolled ? 8 : 0,
          '& .MuiToolbar-root': {
            paddingY: isScrolled ? '15px' : '35px',
            transition: 'padding 0.3s ease-in-out',
          },
          color: theme.palette.mode === 'light' ? 'text.primary' : 'inherit',
        }}
        elevation={0}
      >
        <Container sx={{ maxWidth: '1140px !important' }}>
          <Toolbar disableGutters sx={{ px: { xs: 2, md: 0 } }}>
            {/* Logo/Brand for larger screens */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={handleLogoClick} // Added onClick for Logo
            >
              HUNAIN
            </Typography>

            {/* Mobile menu icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo/Brand for mobile */}
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={handleLogoClick} // Added onClick for Logo
            >
              HUNAIN
            </Typography>

            {/* Desktop menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => handleNavigation(page.path)}
                  disableRipple
                  sx={{
                    color: location.pathname === page.path ? '#eb5d3a' : 'inherit',
                    fontWeight: location.pathname === page.path ? 700 : 600,
                    transition: 'color 0.3s ease-in-out',
                    textTransform: 'none',
                    background: 'none',
                    '&:hover': {
                      color: '#eb5d3a',
                      background: 'none',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Right side buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ThemeSwitcher />
              <Button
                variant="outlined"
                color="inherit"
                disableRipple
                onClick={handleHireMeClick} // Added onClick for Hire Me
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  borderRadius: '20px',
                  p: 2,
                  fontWeight: 600,
                  transition: 'all 0.5s ease-in-out',
                  '&:hover': {
                    borderColor: '#eb5d3a',
                    color: '#fff',
                    bgcolor: '#eb5d3a',
                  },
                  '&:focus': {
                    outline: 'none',
                  },
                  '& .MuiButton-endIcon': {
                    marginLeft: 1,
                  },
                }}
                endIcon={<HandshakeOutlinedIcon />}
              >
                Hire Me
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            height: '100%',
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
