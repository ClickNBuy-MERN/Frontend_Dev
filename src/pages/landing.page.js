import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import Footer from '../components/footer'; // Assuming Footer component is in the same directory

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures the page takes full viewport height
      }}
    >
      {/* Landing Page Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1, // This allows the content to take available space
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to ClickNBuy
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your one-stop shop for all your needs
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" component={Link} to="/login" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button variant="outlined" component={Link} to="/signup">
            Sign Up
          </Button>
        </Box>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
