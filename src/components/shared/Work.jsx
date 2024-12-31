import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Tabs, Tab, IconButton, Container } from '@mui/material';
import { NorthEast as LinkIcon } from '@mui/icons-material';
import data from '../../data/data.json';
import { useInView } from 'react-intersection-observer';

const Work = ({ showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [transitioning, setTransitioning] = useState(false);
  const { projects } = data;

  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: tabsRef, inView: tabsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const handleCategoryChange = (event, newValue) => {
    if (selectedCategory !== newValue) {
      setTransitioning(true); // Start transitioning
      setTimeout(() => {
        setSelectedCategory(newValue); // Change the tab
        setTransitioning(false); // End transitioning
      }, 300); // Delay to hide cards
    }
  };

  const filteredProjects = projects.items.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <Box sx={{ bgcolor: '#121214', py: 8, borderRadius: '16px' }}>
      <Container sx={{ maxWidth: '1140px !important' }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* Title Section */}
          <Box
            ref={titleRef}
            sx={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', fontSize: '3.125rem', lineHeight: '1.2', fontWeight: 500 }}>
              {projects.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                m: 'auto',
                mb: 2,
                color: '#9f9f9f',
                maxWidth: '450px',
                fontSize: '1rem',
                lineHeight: '1.75rem',
              }}
            >
              {projects.description}
            </Typography>
          </Box>

          {/* Category Tabs */}
          <Box
            ref={tabsRef}
            sx={{
              opacity: tabsInView ? 1 : 0,
              transform: tabsInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              disableRipple
              sx={{
                mb: 4,
                '& .MuiTabs-indicator': { display: 'none' },
                '& .MuiTab-root': {
                  color: '#9f9f9f',
                  fontWeight: 500,
                  position: 'relative',
                  minWidth: 'auto',
                  padding: '12px 16px 12px 0',
                  marginRight: '24px',
                  fontSize: '14px',
                  lineHeight: '1',
                  textTransform: 'none',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: '3px',
                    backgroundColor: '#eb5d3a',
                    transition: 'width 0.3s ease-in-out',
                  },
                  '&.Mui-selected': {
                    color: '#eb5d3a',
                    '&::after': { width: '60%' },
                  },
                  '&:hover': { color: '#eb5d3a' },
                },
              }}
            >
              {projects.categories.map((category) => (
                <Tab key={category} label={category} value={category} disableRipple />
              ))}
            </Tabs>
          </Box>

          {/* Project Cards Grid */}
          <Box
            ref={cardsRef}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
              opacity: transitioning ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            {displayedProjects.map((project, index) => (
              <Card
                key={project.id}
                sx={{
                  bgcolor: '#121214',
                  borderRadius: '0 0 15px 15px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid #77777d33',
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`,
                }}
              >
                <Box sx={{
                  position: 'relative',
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.name}
                    sx={{ objectFit: 'cover' }}
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
                      '&:hover': { opacity: 1 },
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
                        width: 60,
                        height: 60,
                        transition: 'all 0.1s ease-in-out',
                        '&:hover': {
                          color: '#fff',
                        },
                      }}
                    >
                      <LinkIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent sx={{ p: 2, textAlign: 'left' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#77777d',
                      fontSize: '1rem',
                      lineHeight: '1.75rem',
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#fff',
                      fontWeight: 500,
                      fontSize: '1.25rem',
                      lineHeight: '1'
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