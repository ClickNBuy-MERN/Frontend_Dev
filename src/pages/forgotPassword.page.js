import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Grid } from '@mui/material';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password Reset Email:', { email });
    // Add forgot password logic here (API call to send reset link, etc.)
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(https://oarex.com/wp-content/uploads/2021/01/ecommerce-funding.png)', // Replace with forgot password image
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: 400,
            padding: 3,
            borderRadius: 2,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
            Reset Password
          </Typography>
          <Typography variant="body2" align="center" sx={{ mb: 3 }}>
            Enter your email address, and we’ll send you a link to reset your password.
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: 1 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: 'linear-gradient(to right, #2575fc, #6a11cb)',
                color: 'white',
              }}
            >
              Send Reset Link
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordPage;
