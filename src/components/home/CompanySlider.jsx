import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../data/data.json';

const CompanySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <Card
      elevation={0}
      sx={{
        p: 4,
        bgcolor: '#121214',
        borderRadius: 4,
        width: '100%',
        overflow: 'hidden',
        '& .slick-slider': {
          width: '100%',
          mx: 'auto'
        },
        '& .slick-list': {
          overflow: 'hidden'
        },
        '& .slick-track': {
          display: 'flex',
          alignItems: 'center'
        }
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'left',
          mb: 4,
          color: 'text.primary'
        }}
      >
        Companies I Worked With
      </Typography>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Slider {...settings}>
          {data.companies.map((company, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={company.name}
                sx={{
                  height: 60,
                  objectFit: 'contain',
                  filter: theme => theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease-in-out',
                  '&:hover': {
                    opacity: 1
                  }
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Card>
  );
};

export default CompanySlider;
