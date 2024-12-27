import React, { useEffect } from 'react';
import { Box, Typography, Container, Button, Card, Stack, IconButton } from '@mui/material';
import { LinkedIn as LinkedInIcon, Instagram as InstagramIcon, Camera as BehanceIcon, FileDownload as DownloadIcon, FiberManualRecord as DotIcon } from '@mui/icons-material';
import CompanySlider from './CompanySlider';
import data from '../../data/data.json';
import AOS from 'aos';


const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const { personalInfo, socialLinks } = data;

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'LinkedIn':
        return <LinkedInIcon />;
      case 'Instagram':
        return <InstagramIcon />;
      case 'Camera':
        return <BehanceIcon />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
          mb: 5,
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-ease="ease-in-out"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: '100%',
            maxWidth: '100%'
          }}>
          {/* Profile Image Card */}
          <Card
            elevation={0}
            sx={{
              flex: 1,
              p: 4,
              bgcolor: '#121214',
              borderRadius: 4,
              textAlign: 'center'
            }}
          >
            <Box
              component="img"
              src={personalInfo.profileImage}
              alt="Profile"
              sx={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                mb: 2,
                objectFit: 'cover'
              }}
            />
            <Typography variant="h4" fontWeight={600} gutterBottom >
              {personalInfo.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {personalInfo.shortBio}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: '#eb5d3a',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  {getSocialIcon(social.icon)}
                </IconButton>
              ))}
            </Stack>
          </Card>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          <Box
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-ease="ease-in-out"
          >

            <Card
              elevation={0}
              sx={{
                flex: 1,
                p: 4,
                bgcolor: '#121214',
                borderRadius: 4
              }}
            >
              <Typography
                variant="h6"
                color="#9f9f9f"
                sx={{ mb: 2 }}
              >
                Hello There!
              </Typography>
              <Typography variant="h4" gutterBottom fontWeight={600}>
                I'm {personalInfo.name},&nbsp;
                {personalInfo.title} {personalInfo.shortBio}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mt: 3,
                  mb: 4,
                  color: '#9f9f9f',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  width: 'fit-content',
                  fontSize: "18px"
                }}
              >
                <DotIcon sx={{ color: '#0f0', fontSize: 18 }} />
                {personalInfo.status}
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                endIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
                onClick={() => window.open('/cv.pdf', '_blank')}
                sx={{
                  borderRadius: '20px',
                  p: '8px 16px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: '#eb5d3a',
                    color: '#fff',
                    bgcolor: '#eb5d3a',
                  }
                }}
              >
                Download CV
              </Button>
            </Card>
          </Box>
          <CompanySlider />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
