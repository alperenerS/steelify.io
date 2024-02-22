import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Login() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            margin="normal"
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 3 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
