import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  Grid,
} from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', { email, password });
    // Add login logic here (API call, validation, etc.)
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {/* Left side image */}
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(https://th.bing.com/th/id/R.3aae4e19673b6eeea6fdf15df9190134?rik=TtGm95iOJ5rKfw&pid=ImgRaw&r=0)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Right side - Login Form */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          background: 'linear-gradient(to right, #3C7EB7FF, #21AEB3FF)', // Gradient background
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
            border: '2px solid white',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Subtle shadow
          }}
        >
          <Box
            sx={{
              padding: 2,
              borderRadius: 1,
              backgroundColor: '#f5f5f5', // Inner light grey box
              textAlign: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: '#6a11cb' }}>
              Welcome Back
            </Typography>
            <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>
              Please login to continue shopping
            </Typography>
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
              }}
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
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(to left, #2575fc, #6a11cb)',
                },
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: '#6a11cb' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" sx={{ color: '#6a11cb' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;