import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  Grid,
} from '@mui/material';
import AuthContext from '../context/authContext';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/v1/login', { email, password });
      setUser(data.user);
      if (data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(https://oarex.com/wp-content/uploads/2021/01/ecommerce-funding.png)',
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
          background: 'linear-gradient(to right, #C5C7A48B, #372F03AF)',
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
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Box
            sx={{
              padding: 2,
              borderRadius: 1,
              backgroundColor: '#f5f5f5',
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                <Link href="/forgot-password" variant="body2" sx={{ color: '#6a11cb' }}>
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