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
      if (document.body.scrollTop > 50) {
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
    setTimeout(() => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/'); 
    setTimeout(() => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleHireMeClick = () => {
    navigate('/contact'); 
    setTimeout(() => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
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
              borderRadius: '15px',
              px: 6,
              py: 2.5,
              fontSize: '1.2rem',
              fontWeight: 600,
              transition: 'all 0.5s ease-in-out',
              border: '1px solid #77777d33',
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
                // gap: 0  ,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => handleNavigation(page.path)}
                  disableRipple
                  sx={{
                    color: location.pathname === page.path ? '#eb5d3a' : 'inherit',
                    fontWeight: 500,
                    transition: 'color 0.3s ease-in-out',
                    textTransform: 'none',
                    background: 'none',
                    fontFamily: 'Poppins, sans-serif',  
                    fontSize: '16px',
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
                  borderRadius: '15px',
                  padding: '12px 24px',
                  fontWeight: 500,
                  fontSize:'14px',
                  transition: 'all 0.2s ease-in-out',
                  textTransform: 'none',
                  lineHeight:'20px',
                  border: '1px solid #77777d33',
                  '&:hover': {
                    borderColor: '#eb5d3a',
                    color: '#fff',
                    bgcolor: '#eb5d3a',
                  },
                  '& .MuiButton-endIcon': {
                    marginLeft: 0.5,
                  }
                }}
                endIcon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="remixicon "><path d="M11.8611 2.39057C12.8495 1.73163 14.1336 1.71797 15.1358 2.35573L19.291 4.99994H20.9998C21.5521 4.99994 21.9998 5.44766 21.9998 5.99994V14.9999C21.9998 15.5522 21.5521 15.9999 20.9998 15.9999H19.4801C19.5396 16.9472 19.0933 17.9102 18.1955 18.4489L13.1021 21.505C12.4591 21.8907 11.6609 21.8817 11.0314 21.4974C10.3311 22.1167 9.2531 22.1849 8.47104 21.5704L3.33028 17.5312C2.56387 16.9291 2.37006 15.9003 2.76579 15.0847C2.28248 14.7057 2 14.1254 2 13.5109V6C2 5.44772 2.44772 5 3 5H7.94693L11.8611 2.39057ZM4.17264 13.6452L4.86467 13.0397C6.09488 11.9632 7.96042 12.0698 9.06001 13.2794L11.7622 16.2518C12.6317 17.2083 12.7903 18.6135 12.1579 19.739L17.1665 16.7339C17.4479 16.5651 17.5497 16.2276 17.4448 15.9433L13.0177 9.74551C12.769 9.39736 12.3264 9.24598 11.9166 9.36892L9.43135 10.1145C8.37425 10.4316 7.22838 10.1427 6.44799 9.36235L6.15522 9.06958C5.58721 8.50157 5.44032 7.69318 5.67935 7H4V13.5109L4.17264 13.6452ZM14.0621 4.04306C13.728 3.83047 13.3 3.83502 12.9705 4.05467L7.56943 7.65537L7.8622 7.94814C8.12233 8.20827 8.50429 8.30456 8.85666 8.19885L11.3419 7.45327C12.5713 7.08445 13.8992 7.53859 14.6452 8.58303L18.5144 13.9999H19.9998V6.99994H19.291C18.9106 6.99994 18.5381 6.89148 18.2172 6.68727L14.0621 4.04306ZM6.18168 14.5448L4.56593 15.9586L9.70669 19.9978L10.4106 18.7659C10.6256 18.3897 10.5738 17.9178 10.2823 17.5971L7.58013 14.6247C7.2136 14.2215 6.59175 14.186 6.18168 14.5448Z"></path></svg>}
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
