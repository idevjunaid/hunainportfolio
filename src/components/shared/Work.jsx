import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Tabs, Tab, IconButton, Container } from '@mui/material';
import { NorthEast as LinkIcon } from '@mui/icons-material';
import data from '../../data/data.json';

const Work = ({ showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { projects } = data;

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredProjects = projects.items.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <Box sx={{ bgcolor: '#121214', py: 8, borderRadius: '16px', }}>
      <Container sx={{maxWidth:'1140px !important'}}>
        <Box sx={{  textAlign: 'center' }}>
          {/* Title and Description */}
          <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
            {projects.title}
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              m: 'auto', 
              mb: 6,
              color: '#9f9f9f',
              maxWidth: '800px'
            }}
          >
            {projects.description}
          </Typography>

          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            disableRipple
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              '& .MuiTab-root': {
                color: '#9f9f9f',
                fontWeight: 600,
                position: 'relative',
                minWidth: 'auto',
                padding: '12px 16px 12px 0',
                marginRight: '24px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#eb5d3a',
                  transition: 'width 0.3s ease-in-out'
                },
                '&.Mui-selected': {
                  color: '#eb5d3a',
                  '&::after': {
                    width: '60%',
                  }
                },
                '&:hover': {
                  color: '#eb5d3a',
                },
              },
            }}
          >
            {projects.categories.map((category) => (
              <Tab
                key={category}
                label={category}
                value={category}
                disableRipple
              />
            ))}
          </Tabs>

          {/* Project Cards Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {displayedProjects.map((project) => (
              <Card
                key={project.id}
                sx={{
                  bgcolor: '#121214',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.name}
                    sx={{
                      objectFit: 'cover'
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      '&:hover': {
                        opacity: 1,
                      }
                    }}
                  >
                    <IconButton
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      disableRipple
                      sx={{
                        color: '#fff',
                        bgcolor: '#eb5d3a',
                        width: 40,
                        height: 40,
                        '&:hover': {
                          bgcolor: '#eb5d3a',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <LinkIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#9f9f9f',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#fff',
                      fontWeight: 500,
                      mt: 0.5,
                    }}
                  >
                    {project.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Work;
