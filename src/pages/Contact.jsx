import React, { useState } from 'react';
import { Box, Container, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import data from '../data/data.json'; // Adjust the path as necessary

const Contact = () => {
    const { contactInfo } = data;
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
        <Container maxWidth="lg" >
            <Box sx={{ backgroundColor: '#121214', borderRadius: 4, padding: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                    {/* Contact Information Card */}
                    <Box sx={{ flex: 0.3, marginBottom: { xs: '20px', sm: '0' } }}>
                        <Card sx={{ border: '1px solid #9f9b80', borderRadius: '12px' }}>
                            <CardContent sx={{ backgroundColor: '#121214' }}>
                                <div style={{ marginTop: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
                                        <LocationOnIcon sx={{ color: '#eb5d3a' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9f9b80' }}>{contactInfo.office.title}</Typography>
                                        <Typography variant="body2" sx={{ color: '#9f9b80' }}>{contactInfo.office.details}</Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
                                        <EmailIcon sx={{ color: '#eb5d3a' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9f9b80' }}>{contactInfo.email.title}</Typography>
                                        <Typography variant="body2" sx={{ color: '#9f9b80' }}>{contactInfo.email.details}</Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
                                        <PhoneIcon sx={{ color: '#eb5d3a' }} />
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9f9b80' }}>{contactInfo.contactNo.title}</Typography>
                                        <Typography variant="body2" sx={{ color: '#9f9b80' }}>{contactInfo.contactNo.details}</Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                    {/* Contact Form Card */}
                    <Box sx={{ flex: 0.7 }}>
                        <Card sx={{ border: '1px solid #9f9b80', borderRadius: '12px' }}>
                            <CardContent sx={{ backgroundColor: '#121214' }}>
                                <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2 }}>
                                        <Box sx={{ flex: 1, marginBottom: '10px' }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9f9b80', marginBottom: '5px' }}>Name</Typography>
                                            <TextField
                                                name="name"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                sx={{ backgroundColor: '#fff', borderRadius: '8px', color: 'black', '& .MuiInputBase-input': { color: 'black' }, '& .MuiInputLabel-root': { color: '#9f9b80' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' } }}
                                            />
                                        </Box>
                                        <Box sx={{ flex: 1, marginBottom: '10px' }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9f9b80', marginBottom: '5px' }}>Email</Typography>
                                            <TextField
                                                name="email"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                sx={{ backgroundColor: '#fff', borderRadius: '8px', color: 'black', '& .MuiInputBase-input': { color: 'black' }, '& .MuiInputLabel-root': { color: '#9f9b80' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' } }}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#9f9b80', marginBottom: '5px' }}>Message</Typography>
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
                                        sx={{ backgroundColor: '#fff', borderRadius: '8px', color: 'black', '& .MuiInputBase-input': { color: 'black' }, '& .MuiInputLabel-root': { color: '#9f9b80' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' } }}
                                    />
                                    <Button type="submit" variant="outlined" endIcon={<EmailIcon />} sx={{
                                        marginTop: '10px', color: 'white', backgroundColor: '#eb5d3a', borderColor: '#eb5d3a', borderRadius: '20px', p: 2, px: 4, '&:hover': { backgroundColor: 'transparent', color: 'white', borderColor: 'white' }, '&:hover': {
                                            backgroundColor: 'transparent', borderColor: '#ffffff',
                                        },
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
