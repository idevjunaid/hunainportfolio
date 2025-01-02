import React, { useState } from 'react';
import { Box, Container, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import data from '../data/data.json'; // Adjust the path as necessary
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { contactInfo } = data;
    const { ref: contactTitleRef, inView: contactTitleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: contactFormRef, inView: contactFormInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: contactCardRef, inView: contactCardInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    // const { ref: contactTitleRef, inView: contactTitleInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://formspree.io/f/manyryzo', { // Replace with your Formspree form ID
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    alert('Error sending message.');
                }
            })
            .catch(error => {
                alert('Error sending message. Please try again later.');
                console.error('Error:', error);
            });
    };

    return (
        <Container sx={{ maxWidth: '1140px !important' }} >
            <Box sx={{ backgroundColor: '#121214', borderRadius: 4, padding: 4 }}>
                <Box ref={contactTitleRef} sx={{ mb: 4, opacity: contactTitleInView ? 1 : 0, transform: contactTitleInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
                    <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{
                            color: "#9f9f9f",
                            fontSize: "1rem",
                            lineHeight: '1.75rem',
                            textTransform: "none",
                            mb: 2,
                        }}
                    >
                        contact
                    </Typography>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        fontWeight={500}
                        sx={{
                            fontSize: '3.125rem',
                            lineHeight: 1.4
                        }}
                    >
                        Get in Touch with Me!
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>

                    {/* Contact Information Card */}
                    <Box sx={{ flex: 0.35, marginBottom: { xs: '20px', sm: '0' } }}>
                        <Card
                            ref={contactCardRef}
                            sx={{ border: '1px solid #77777d33', borderRadius: '15px', }}>
                            <CardContent sx={{ backgroundColor: '#121214', p: '45px 40px' }}>
                                <Box>
                                    <Box
                                        ref={contactCardRef}
                                        sx={{
                                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px',
                                            opacity: contactCardInView ? 1 : 0,
                                            transform: contactCardInView ? 'translateY(0)' : 'translateY(30px)',
                                            transition: 'opacity 0.8s ease, transform 0.2s ease'
                                        }}>
                                        <LocationOnIcon sx={{ color: '#eb5d3a' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 500, color: '#ccc', fontSize: '1rem', my: 1 }}>{contactInfo.office.title}:</Typography>
                                        <Typography variant="body2" sx={{ color: '#9f9f9f', fontSize: '1rem', lineHeight: '1.75rem' }}>{contactInfo.office.details}</Typography>
                                    </Box>
                                    <Box
                                        ref={contactCardRef}
                                        sx={{
                                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px',
                                            opacity: contactCardInView ? 1 : 0,
                                            transform: contactCardInView ? 'translateY(0)' : 'translateY(30px)',
                                            transition: 'opacity 0.8s ease, transform 0.4s ease'
                                        }}>
                                        <EmailIcon sx={{ color: '#eb5d3a' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 500, color: '#ccc', fontSize: '1rem', my: 1 }}>{contactInfo.email.title}:</Typography>
                                        <Typography variant="body2" sx={{ color: '#9f9f9f', fontSize: '1rem', lineHeight: '1.75rem' }}>{contactInfo.email.details}</Typography>
                                    </Box>
                                    <Box
                                        ref={contactCardRef}
                                        sx={{
                                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px',
                                            opacity: contactCardInView ? 1 : 0,
                                            transform: contactCardInView ? 'translateY(0)' : 'translateY(30px)',
                                            transition: 'opacity 0.8s ease, transform 0.6s ease'
                                        }}>
                                        <PhoneIcon sx={{ color: '#eb5d3a' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 500, color: '#ccc', fontSize: '1rem', my: 1 }}>{contactInfo.contactNo.title}:</Typography>
                                        <Typography variant="body2" sx={{ color: '#9f9f9f', fontSize: '1rem', lineHeight: '1.75rem' }}>{contactInfo.contactNo.details}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    {/* Contact Form Card */}
                    <Box
                        ref={contactFormRef}

                        sx={{
                            flex: 0.7,
                            opacity: contactFormInView ? 1 : 0,
                            transform: contactFormInView ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease, transform 0.8s ease'
                        }}>
                        <Card sx={{ border: '1px solid #77777d33', borderRadius: '12px' }}>
                            <CardContent sx={{ backgroundColor: '#121214' }}>
                                <form onSubmit={handleSubmit} sx={{ marginTop: '20px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2 }}>
                                        <Box sx={{ flex: 1, marginBottom: '10px' }}>
                                            <Typography variant="body1" sx={{ fontWeight: 500, color: '#9f9f9f', fontSize: '1rem', marginBottom: '5px' }}>Name</Typography>
                                            <TextField
                                                name="name"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    backgroundColor: '#fff',
                                                    borderRadius: '8px',
                                                    color: 'black',
                                                    '& .MuiInputBase-input': {
                                                        color: 'black',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: '#9f9b80',
                                                    },
                                                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    // Styles for the autofill background color
                                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent',
                                                    },
                                                    '& .MuiInputBase-input:-webkit-autofill': {
                                                        WebkitBoxShadow: '0 0 0 1000px #fff inset',
                                                        WebkitTextFillColor: 'black', // Set the text color
                                                        WebkitBorderRadius: '15px',
                                                    },
                                                    '&:hover': {
                                                        border: 'none',
                                                    },
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ flex: 1, marginBottom: '10px' }}>
                                            <Typography variant="body1" sx={{ fontWeight: 500, color: '#9f9f9f', fontSize: '1rem', marginBottom: '5px' }}>Email</Typography>
                                            <TextField
                                                name="email"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    backgroundColor: '#fff', borderRadius: '8px', color: 'black', '& .MuiInputBase-input': { color: 'black' }, '& .MuiInputLabel-root': { color: '#9f9b80' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                                                    '& .MuiInputBase-input:-webkit-autofill': {
                                                        WebkitBoxShadow: '0 0 0 1000px #fff inset',
                                                        WebkitTextFillColor: 'black', // Set the text color
                                                        WebkitBorderRadius: '15px',
                                                    },
                                                    '&:hover': {
                                                        border: 'none',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#9f9f9f', fontSize: '1rem', marginBottom: '5px' }} >Message</Typography>
                                    <TextField
                                        name="message"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        sx={{
                                            backgroundColor: '#fff', borderRadius: '8px', color: 'black', '& .MuiInputBase-input': { color: 'black' }, '& .MuiInputLabel-root': { color: '#9f9b80' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                                            '& .MuiInputBase-input:-webkit-autofill': {
                                                WebkitBoxShadow: '0 0 0 1000px #fff inset',
                                                WebkitTextFillColor: 'black', // Set the text color
                                                WebkitBorderRadius: '15px',
                                            },
                                            '&:hover': {
                                                border: 'none',
                                            },
                                        }}
                                    />
                                    <Button type="submit" variant="outlined" endIcon={<EmailIcon />} sx={{
                                        marginTop: '10px', color: 'white', backgroundColor: '#eb5d3a', border: '1px solid #eb5d3a', borderRadius: '15px', p: '12px 24px',textTransform: 'none',mt:3,
                                         '&:hover': { backgroundColor: 'transparent', color: 'white', borderColor: '#77777d33', fontSize: '14px' },
                                        '& svg': {
                                            width: '14px',
                                        }
                                    }}>
                                        Send
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Contact;
