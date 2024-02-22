import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, IconButton, InputAdornment, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Xometry.com benzeri bir tema oluşturun
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px 0', // Tüm TextField bileşenlerinin altındaki boşluğu ayarlar
          '& .MuiInputBase-input': {
            borderRadius: 4, // Input alanlarının köşe yuvarlatmasını ayarlar
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Butonun köşe yuvarlatmasını ayarlar
          textTransform: 'none', // Buton metninin büyük harfe çevrilmesini engeller
          margin: '16px 0', // Butonun üst ve altındaki boşluğu ayarlar
        },
      },
    },
  },
});

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box my={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              fullWidth
              id="company-website"
              label="Company Website"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              id="surname"
              label="Surname"
              margin="normal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
