import React, { useEffect } from 'react';
import { Box, Typography, Card } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import data from '../../data/data.json';
import AOS from 'aos';

const CompanySlider = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Duplicate slides for seamless infinite loop
  const extendedCompanies = [...data.companies, ...data.companies];

  return (
    <Box sx={{ display: 'block', width: '100%', border: '1px solid #ffff', opacity: '1 !important' }} data-aos="fade-up">
      <Card
        elevation={0}
        sx={{
          p: 4,
          bgcolor: '#121214',
          borderRadius: 4,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'left',
            mb: 4,
            color: 'text.primary',
          }}
        >
          Companies I Worked With
        </Typography>
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            speed={5000}
            allowTouchMove={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 2,
              },
            }}
          >
            {extendedCompanies.map((company, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={company.logo}
                    alt={company.name}
                    sx={{
                      height: 60,
                      objectFit: 'contain',
                      filter: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'brightness(0) invert(1)'
                          : 'none',
                      opacity: 0.7,
                      transition: 'opacity 0.3s ease-in-out',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Card>

    </Box>
  );
};

export default CompanySlider;
