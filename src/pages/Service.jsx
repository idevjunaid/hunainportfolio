import React from 'react';
import data from '../data/data.json';
import { Box, Typography, Grid, Card, CardContent, Container, Button, ListItem, List } from '@mui/material';
import { Web as WebIcon, MobileFriendly as MobileIcon, Search as SeoIcon } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';

const Service = () => {
    const { services, pricing } = data;

    // Track visibility for titles/subtitles
    const { ref: serviceTitleRef, inView: serviceTitleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: pricingTitleRef, inView: pricingTitleInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Track visibility for each card individually
    const { ref: serviceCardRef, inView: serviceCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: pricingCardRef, inView: pricingCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Container sx={{ maxWidth: '1140px !important' }}>
            {/* Service Section */}
            <Box sx={{ backgroundColor: '#121214', borderRadius: 4, padding: 4 }}>
                <Box
                    ref={serviceTitleRef}
                    sx={{
                        opacity: serviceTitleInView ? 1 : 0,
                        transform: serviceTitleInView ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease'
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{
                            color:"#9f9f9f",
                            fontSize:"1rem",
                            lineHeight:'1.75rem',
                            textTransform:"none",
                            mb: 2,
                        }}
                    >
                        Services
                    </Typography>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        fontWeight={500}
                        sx={{
                            fontSize:'3.125rem',
                            lineHeight:1.4

                        }}
                    >
                        Quality Services
                    </Typography>
                </Box>
                <Box sx={{ mt: 6, position: 'relative' }}>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={service.id}>
                                {/* Individual Service Cards Animation */}
                                <Box
                                    ref={serviceCardRef}
                                    sx={{
                                        opacity: serviceCardInView ? 1 : 0,
                                        transform: serviceCardInView ? 'translateY(0)' : 'translateY(30px)',
                                        transition: `opacity 0.8s ease, transform ${index * 0.8}s ease`
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: '15px',
                                            height: '100%',
                                            border: '1px solid #77777d33',
                                            transition: 'all 0.2s ease-in-out',
                                            '&:hover': { borderColor: '#eb5d3a' },
                                            position: 'relative',
                                            zIndex: 1,
                                        }}
                                    >
                                        <CardContent sx={{ height: '100%', padding: '60px 40px !important', backgroundColor: '#121214' }}>
                                            {service.id === 1 && (
                                                <WebIcon fontSize="large" sx={{ color: '#9f9f9f', fontSize: 80 }} />
                                            )}
                                            {service.id === 2 && (
                                                <MobileIcon fontSize="large" sx={{ color: '#9f9f9f', fontSize: 80 }} />
                                            )}
                                            {service.id === 3 && (
                                                <SeoIcon fontSize="large" sx={{ color: '#9f9f9f', fontSize: 80 }} />
                                            )}
                                            <Typography variant="h5" sx={{ fontSize:'1.25rem',lineHeight:1.1,fontWeight:500, my: 2, color: '#ccc' }}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#77777d', fontSize:'1rem', lineHeight:'1.75rem' }}>
                                                {service.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            {/* Pricing Section */}
            <Box sx={{ mt: 5, backgroundColor: '#121214', borderRadius: 4, padding: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}
                        ref={pricingTitleRef}
                        sx={{
                            opacity: pricingCardInView ? 1 : 0,
                            transform: pricingCardInView ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease, transform 0.8s ease',
                        }}
                    >
                        <Typography
                            variant="h6"
                            align="center"
                            gutterBottom
                            sx={{
                                color:"#9f9f9f",
                                fontSize:"1rem",
                                lineHeight:'1.75rem',
                                textTransform:"none",
                                mb: 2,
                            }}

                        >
                            Pricing
                        </Typography>
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            fontWeight={500}
                            sx={{
                                fontSize:'3.125rem',
                                lineHeight:1.4
    
                            }}
                        >
                            Flexible Pricing Plan
                        </Typography>
                    </Grid>

                    {pricing.map((pricingItem, index) => (
                        <Grid item xs={12} sm={6} md={4} key={pricingItem.id}>
                            {/* Individual Pricing Cards Animation */}
                            <Box
                                ref={pricingCardRef}
                                sx={{
                                    opacity: pricingCardInView ? 1 : 0,
                                    transform: pricingCardInView ? 'translateY(0)' : 'translateY(30px)',
                                    transition: `opacity 0.8s ease, transform ${index * 0.8}s ease`
                                }}
                            >
                                <Card
                                    sx={{
                                        border: '1px solid #77777d33',
                                        borderRadius: '15px',
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            height: '100%',
                                            padding: '10px',
                                            backgroundColor: '#121214',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Box sx={{ border: '1px solid #77777d33', borderRadius: '15px', padding: '20px' }}>
                                            <Typography variant="h5" sx={{ fontWeight: 500, mb: 4, color: '#ccc', fontSize:'1.375rem',lineHeight:'1.8rem' }}>
                                                {pricingItem.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#77777d', mb: 3, fontSize:'1.25rem', lineHeight:'1.75rem' }}>
                                                {pricingItem.description}
                                            </Typography>
                                            <Typography variant="h3" sx={{ color: '#eb5d3a',fontSize:'2.375rem', lineHeight:'1.875rem', fontWeight:500 }}>
                                                {pricingItem.rate}
                                                <Typography variant="h5" component="span" sx={{ color: '#9f9f9f', fontSize:'1rem',fontWeight:400, lineHeight:'1.875rem' }}>
                                                    {' '}
                                                    / hour
                                                </Typography>
                                            </Typography>
                                        </Box>
                                        <Box sx={{ padding: '20px' }}>
                                            <List sx={{ listStyleType: 'none', padding: 0,mb:3 }}>
                                                {pricingItem.features.map((feature, index) => (
                                                    <ListItem
                                                        key={index}
                                                        sx={{
                                                            color: '#77777d',
                                                            marginBottom: '10px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            p:'2px 0',
                                                            fontSize:'1rem',
                                                            lineHeight:'1.75rem',
                                                            '& svg':{
                                                                width: 'auto',
                                                            }
                                                        }}
                                                    >
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="14"
                                                            fill="currentColor"
                                                            class="remixicon"
                                                            style={{ marginRight: '8px' }}
                                                        >
                                                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                                        </svg>
                                                        {feature}
                                                    </ListItem>
                                                ))}
                                            </List>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                endIcon={
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="remixicon"
                                                    >
                                                        <path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM18.8309 11H5.17788L5.84488 19H18.1639L18.8309 11ZM13.0049 13V17H11.0049V13H13.0049ZM9.00488 13V17H7.00488V13H9.00488ZM17.0049 13V17H15.0049V13H17.0049ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"></path>
                                                    </svg>
                                                }
                                                sx={{
                                                    backgroundColor: '#eb5d3a',
                                                    color: 'white',
                                                    border: '1px solid #eb5d3a',
                                                    borderRadius: '20px',
                                                    transition: 'all 0.2s ease-in-out',
                                                    p: '12px 24px !important',
                                                    textTransform: 'none',
                                                    marginTop: 'auto',
                                                    fontSize:'0.875rem',
                                                    fontWeight:500,
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        color: 'white',
                                                        borderColor: '#77777d33',
                                                    },
                                                    '& svg':{
                                                        width: '14px',
                                                    }
                                                }}
                                            >
                                                {pricingItem.buttonText}
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Service;
