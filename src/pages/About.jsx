import React from 'react';
import { Box, Typography, Container, Button, Card } from '@mui/material';
import { Send as SendIcon, FileCopy as FileCopyIcon, School as SchoolIcon } from '@mui/icons-material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../data/data.json';

const About = () => {
  const { personalInfo, socialLinks, experience, education, testimonials } = data;
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const ResumeItem = ({ icon: Icon, period, title, organization }) => (
    <Box 
      sx={{ 
        display: 'flex',
        alignItems: 'flex-start',
        pb: 3,
        mb: 3,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        '&:last-child': { 
          mb: 0,
          pb: 0,
          borderBottom: 'none'
        }
      }}
    >
      <Box 
        sx={{ 
          mr: 2,
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 1,
          '& svg': {
            width: 24,
            height: 24,
            color: '#eb5d3a',
          }
        }}
      >
        <Icon />
      </Box>
      <Box>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#9f9b80',
            mb: 0.5,
            fontWeight: 500
          }}
        >
          {period}
        </Typography>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#9f9b80'
          }}
        >
          {organization}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 12, md: 16 },
        pb: 8,
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Cards Section */}
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            mb: 8,
          }}
        >
          <Box sx={{
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
                p: 4,
                bgcolor: '#121214',
                borderRadius: 4,
                textAlign: 'center',
                height: 'auto'
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

            </Card>
          </Box>

          {/* Info Card */}
          <Box
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
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
              <Typography variant="h3" gutterBottom fontWeight={600}>
                I'm {personalInfo.name}, a {personalInfo.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: 'text.secondary',
                  lineHeight: 1.8
                }}
              >
                {personalInfo.fullBio}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8
                }}
              >
                {personalInfo.detailedBio}
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                endIcon={<SendIcon sx={{ fontSize: 18 }} />}
                sx={{
                  borderRadius: '20px',
                  p: 2,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  bgcolor: '#eb5d3a',
                  color: '#fff',
                  borderColor: '#eb5d3a',
                  borderWidth: '0.5px',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: '#fff',
                    borderColor: '#fff',
                  }
                }}
              >
                Get In Touch
              </Button>
            </Card>
          </Box>
        </Box>

        {/* Experience and Education Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          {/* Experience Card */}
          <Card
            elevation={0}
            sx={{
              p: 4,
              bgcolor: '#121214',
              borderRadius: 4,
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Experience
            </Typography>
            <Box sx={{ mt: 3 }}>
              {experience.map((item, index) => (
                <ResumeItem
                  key={index}
                  icon={FileCopyIcon}
                  period={item.period}
                  title={item.title}
                  organization={item.company}
                />
              ))}
            </Box>
          </Card>

          {/* Education Card */}
          <Card
            elevation={0}
            sx={{
              p: 4,
              bgcolor: '#121214',
              borderRadius: 4,
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Education
            </Typography>
            <Box sx={{ mt: 3 }}>
              {education.map((item, index) => (
                <ResumeItem
                  key={index}
                  icon={SchoolIcon}
                  period={item.period}
                  title={item.degree}
                  organization={item.institution}
                />
              ))}
            </Box>
          </Card>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mt: 8 , backgroundColor: '#121214', borderRadius: 4, padding:4}}>
          <Typography variant="h6" align="center" gutterBottom fontWeight={500} color="#9f9f9f">
          Testinomials
          </Typography>
          <Typography variant="h3" align="center" gutterBottom fontWeight={600}>
            What clients say!
          </Typography>
          <Box sx={{ mt: 6, position: 'relative' }}>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <Box key={index} sx={{ px: 2 }}>
                  <Card
                    elevation={0}
                    sx={{
                      border: '1px solid #9f9b80',
                      p: 4,
                      bgcolor: '#121214',
                      borderRadius: 4,
                      height: '100%',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        borderColor: '#eb5d3a'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        component="img"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          objectFit: 'cover',
                          mb: 1
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#9f9b80',
                          lineHeight: 1.8
                        }}
                      >
                        {testimonial.text}
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9f9b80' }}>
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Slider>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 4
              }}
            >
              <Button
                onClick={goToPrev}
                sx={{
                  minWidth: 'auto',
                  p: 1,
                  bgcolor: '#eb5d3a',
                  color: '#fff',
                  borderRadius: '50%',
                  '&:hover': {
                    bgcolor: '#eb5d3a'
                  }
                }}
              >
                <ArrowBack />
              </Button>
              <Button
                onClick={goToNext}
                sx={{
                  minWidth: 'auto',
                  p: 1,
                  bgcolor: '#eb5d3a',
                  color: '#fff',
                  borderRadius: '50%',
                  '&:hover': {
                    bgcolor: '#eb5d3a'
                  }
                }}
              >
                <ArrowForward />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
