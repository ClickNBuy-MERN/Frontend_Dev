import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        py: 3,
        px: 2,
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="h6" gutterBottom>
        ClickNBuy
      </Typography>
      <Typography variant="body2" gutterBottom>
        Creating impactful solutions for the digital age.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mb: 2,
        }}
      >
        <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
          <Facebook />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
          <Twitter />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
          <Instagram />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'white' }}>
          <LinkedIn />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Link href="/about" underline="hover" color="inherit">
          About Us
        </Link>
        <Link href="/contact" underline="hover" color="inherit">
          Contact
        </Link>
        <Link href="/privacy-policy" underline="hover" color="inherit">
          Privacy Policy
        </Link>
        <Link href="/terms" underline="hover" color="inherit">
          Terms of Service
        </Link>
      </Box>
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} ClickNBuy. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
