import React from 'react';
import { Box, Typography, Container, Button, Card, Stack, IconButton } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import {
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Camera as BehanceIcon,
  FileDownload as DownloadIcon,
  FiberManualRecord as DotIcon,
} from '@mui/icons-material';
import CompanySlider from './CompanySlider';
import data from '../../data/data.json';

const Hero = () => {
  const { personalInfo, socialLinks } = data;

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
          alignItems: 'start',
        }}
      >
        {/* Profile Image Card */}
        <Box
          ref={sectionRef}
          sx={{
            flex: 1,
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: '100%',
            maxWidth: '100%',
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <Card
            elevation={0}
            sx={{
              flex: 1,
              p: 4,
              bgcolor: '#121214',
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <Box
              component="img"
              src={personalInfo.profileImage}
              alt="Profile"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                mb: 2,
                objectFit: 'cover',
              }}
            />
            <Typography variant="h4" fontWeight={500} gutterBottom sx={{ fontSize: '2.5rem' }}>
              {personalInfo.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontSize: '1rem', lineHeight: '1.75rem', fontWeight: '400' }}>
              {personalInfo.shortBio}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid #77777d33',
                    borderRadius: '15px',
                    p: 1.5,
                    '&:hover': {
                      color: '#eb5d3a',
                      backgroundColor: 'transparent',
                      // transform: 'translateY(-3px)',
                    },
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
            flex: 2,
            gap: 4,
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <Card
            ref={sectionRef}
            elevation={0}
            sx={{
              flex: 1,
              p: 4,
              bgcolor: '#121214',
              borderRadius: 4,
              opacity: sectionInView ? 1 : 0,
              transform: sectionInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <Typography variant="h6" color="#9f9f9f" sx={{ mb: 2, fontSize: '1rem', fontWeight: 400, lineHeight: '1.75rem' }}>
              Hello There!
            </Typography>
            <Typography variant="h4" gutterBottom fontWeight={400} sx={{ fontSize: '2.5rem', lineHeight: '3rem' }}>
              I'm {personalInfo.name}, {personalInfo.title} {personalInfo.shortBio}
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
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.875rem'
              }}
            >
              <DotIcon sx={{ color: '#0f0', fontSize: 18 }} />
              {personalInfo.status}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              endIcon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="remixicon "><path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path></svg>}
              onClick={() => window.open('/cv.pdf', '_blank')}
              sx={{
                borderColor: '#eb5d3a',
                color: '#fff',
                bgcolor: '#eb5d3a',
                borderRadius: '15px',
                p: '12px 24px',
                fontWeight: 500,
                fontSize: '0.875rem',
                lineHeight:'1.25rem',
                transition: 'all 0.2s ease-in-out',
                border: '1px solid #77777d33',
                '&:hover': {
                  borderColor: '#77777d33',
                  bgcolor: 'transparent',
                },
              }}
            >
              Download CV
            </Button>
          </Card>
          <CompanySlider />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
