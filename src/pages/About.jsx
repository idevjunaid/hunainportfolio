import React from 'react';
import { Box, Typography, Container, Button, Card } from '@mui/material';
import { Send as SendIcon, FileCopy as FileCopyIcon, School as SchoolIcon } from '@mui/icons-material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../data/data.json';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { personalInfo, socialLinks, experience, education, testimonials } = data;
  const sliderRef = React.useRef(null);
  const navigate = useNavigate();


  // Use `useInView` for scroll animations
  const { ref: profileImageRef, inView: profileImageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: infoCardRef, inView: infoCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const experienceRefs = experience.map(() => useInView({ triggerOnce: true, threshold: 0.2 }));
  const educationRefs = education.map(() => useInView({ triggerOnce: true, threshold: 0.2 }));
  const { ref: testimonialsTitleRef, inView: testimonialsTitleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: testimonialsSlidesRef, inView: testimonialsSlidesInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: testimonialsNavRef, inView: testimonialsNavInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleGetInTouch = () => {
    navigate('/contact'); // Route to contact when clicking on "Hire Me"
    setTimeout(() => {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

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
      }}
    >
      <Box
        sx={{
          mr: 2,
          p:1.5,
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          borderRadius: '15px',
          '& svg': {
            width: '100%',
            height: 'auto',
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
            color: '#9f9f9f',
            mb: 0.5,
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1
          }}
        >
          {period}
        </Typography>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 500, fontSize:'1.25rem', lineHeight:'1.1', m:'12px 0' }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#77777d',
            fontSize:'1rem',
            lineHeight:'1.875rem'
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
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container sx={{ maxWidth: '1140px !important' }}>
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
          <Box
            ref={profileImageRef}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              maxWidth: '100%',
              opacity: profileImageInView ? 1 : 0,
              transform: profileImageInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
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
                  maxWidth: '100%',
                  height:'auto',
                  objectFit: 'cover'
                }}
              />

            </Card>
          </Box>

          {/* Info Card */}
          <Box
            ref={infoCardRef}
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              opacity: infoCardInView ? 1 : 0,
              transform: infoCardInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
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
              <Typography variant="h3" gutterBottom sx={{fontSize:'2.5rem', lineHeight:'3.125rem'}}>
                I'm {personalInfo.name}, a {personalInfo.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                  lineHeight: '1.75rem',
                  fontSize:'1rem'
                }}
              >
                {personalInfo.fullBio}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  lineHeight: '1.75rem',
                  fontSize:'1rem'
                }}
              >
                {personalInfo.detailedBio}
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                endIcon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="remixicon "><path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path></svg>}
                onClick={handleGetInTouch}
                disableRipple
                sx={{
                  borderRadius: '20px',
                  p: '12px 24px',
                  fontSize: '0.875rem',
                  bgcolor: '#eb5d3a',
                  color: '#fff',
                  border: '1px solid #eb5d3a',
                  borderWidth: '0.1px',
                  transition: 'all 0.2s ease-in-out',
                  textTransform:'none',
                  '&:hover': {
                    bgcolor: 'transparent',
                    borderColor: '#77777d33',
                  },
                  '& svg':{
                    width: '14px',
                    height:'14px',
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
            <Typography variant="h5" gutterBottom fontWeight={500} fontSize={'1.375rem'} lineHeight={1.2}>
              Experience
            </Typography>
            <Box sx={{ mt: 3 }}>
              {experience.map((item, index) => {
                const { ref, inView } = experienceRefs[index];
                return (
                  <Box ref={ref} key={index} sx={{
                    opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease', pb: 3,
                    mb: 3,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:last-child': {
                      mb: 0,
                      pb: 0,
                      borderBottom: 'none'
                    },
                  }}>
                    <ResumeItem
                      key={index}
                      icon={FileCopyIcon}
                      period={item.period}
                      title={item.title}
                      organization={item.company}
                    />
                  </Box>
                )
              })}
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
            <Typography variant="h5" gutterBottom fontWeight={500} fontSize={'1.375rem'} lineHeight={1.2}>
              Education
            </Typography>
            <Box sx={{ mt: 3 }}>
              {education.map((item, index) => {
                const { ref, inView } = educationRefs[index];
                return (
                  <Box ref={ref} key={index} sx={{
                    opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease', pb: 3,
                    mb: 3,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:last-child': {
                      mb: 0,
                      pb: 0,
                      borderBottom: 'none'
                    },
                  }}>
                    <ResumeItem
                      key={index}
                      icon={SchoolIcon}
                      period={item.period}
                      title={item.degree}
                      organization={item.institution}
                    />
                  </Box>
                )
              })}
            </Box>
          </Card>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mt: 5, backgroundColor: '#121214', borderRadius: 4, padding: 4 }}>
          <Box
          ref={testimonialsTitleRef}
          sx={{
            opacity: testimonialsTitleInView ? 1 : 0,
            transform: testimonialsTitleInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
          >
          <Typography variant="h6" align="center" gutterBottom color="#9f9f9f" sx={{fontSize:'1rem', lineHeight:'1.25rem', mb:3}}>
            Testinomials
          </Typography>
          <Typography variant="h3" align="center" gutterBottom fontWeight={500} fontSize={'3.125rem'} lineHeight={1.2}>
            What clients say!
          </Typography>
          </Box>
          <Box
            ref={testimonialsSlidesRef}
          sx={{ mt: 6, position: 'relative'
            ,opacity: testimonialsSlidesInView ? 1 : 0,
            transform: testimonialsSlidesInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
           }}>
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
                          color: '#9f9f9f',
                          lineHeight: '1.875rem',
                          fontSize:'1rem',
                          mb: 2 
                        }}
                      >
                        {testimonial.text}
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        <Typography variant="h6" sx={{ mb: 1  , fontWeight: 500, fontSize:'1.25rem', lineHeight:1.4,color: '#fffff' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#77777d',fontSize:'0.875rem',lineHeight:'1.25rem' }}>
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
            <Box
            ref={testimonialsNavRef}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 4,
                opacity: testimonialsNavInView ? 1 : 0,
                transform: testimonialsNavInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease', 
              }}
            >
              <Button
                onClick={goToPrev}
                disableRipple
                sx={{
                  minWidth: 'auto',
                  p: 1,
                  bgcolor: '#eb5d3a',
                  color: '#fff',
                  borderRadius: '50%',
                  borderWidth: '0.1px',
                  borderStyle: 'solid',
                  borderColor: '#eb5d3a',
                  '&:hover': {
                    bgcolor: 'transparent',
                    borderColor: '#ffffff'
                  }
                }}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="remixicon "><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
              </Button>
              <Button
                onClick={goToNext}
                disableRipple
                sx={{
                  minWidth: 'auto',
                  p: 1,
                  bgcolor: '#eb5d3a',
                  color: '#fff',
                  borderRadius: '50%',
                  borderWidth: '0.1px',
                  borderStyle: 'solid',
                  borderColor: '#eb5d3a',
                  '&:hover': {
                    bgcolor: 'transparent',
                    borderColor: '#ffffff'
                  }
                }}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="remixicon "><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
              </Button>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
