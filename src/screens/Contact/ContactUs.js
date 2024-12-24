import React from 'react';
import { Box, Typography, Grid2, Card, CardContent, Divider, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram'; // Importing Instagram Icon

const ContactUs = () => {
  const people = [
    {
      name: 'योगेश सोलंकी',
      mobile: '+91 93529 45791',
    },
    {
      name: 'जितेन्द्र पंवार',
      mobile: '+91 94600 88701',
    },
    {
      name: 'सुरेश परिहार',
      mobile: '+91 94141 22178',
    },
    {
      name: 'दीपक देवड़ा',
      mobile: '+91 98290 21138',
    },
  ];

  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full screen height
        backgroundColor: '#f4f6f8', // Background color for the full page
      }}
    >
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: '40px' }}>
        {/* Contact Us Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 4,
            color: '#1976d2',
          }}
        >
          Contact Us
        </Typography>

        {/* People Section */}
        <Grid2 container spacing={4} justifyContent="center">
          {people.map((person, index) => (
            <Grid2 item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345, borderRadius: '8px', boxShadow: 3 }}>
                <CardContent sx={{ padding: '20px' }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: 2 }}
                  >
                    {person.name}
                  </Typography>
                  <Divider sx={{ marginBottom: 2 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    <strong>Mobile:</strong> {person.mobile}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Instagram Handle Section */}
        <Box sx={{ marginTop: 4, textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: 2 }}>
            Follow Us on Instagram
          </Typography>
          <IconButton
            component="a"
            href="https://www.instagram.com/ghanchisamajpali"
            target="_blank"
            sx={{
              backgroundColor: '#e1306c',
              padding: '15px',
              borderRadius: '50%', // Make the button circular
              '&:hover': {
                backgroundColor: '#c13584',
                transform: 'scale(1.1)', // Slight hover effect for scale
              },
              transition: 'background-color 0.3s, transform 0.3s',
            }}
          >
            <InstagramIcon sx={{ color: 'white', fontSize: '40px' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Footer Section - Positioned at the bottom */}
      <Box
        sx={{
          backgroundColor: '#1976d2',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          marginTop: 'auto', // This ensures the footer sticks to the bottom
        }}
      >
        <Typography variant="body2">
          &copy; {currentYear} श्री क्षत्रीय घाँची युवा महासभा समिति, पाली, राजस्थान, भारत. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
