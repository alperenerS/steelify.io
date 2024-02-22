import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Merhaba, BookHub'a Hoş Geldiniz!
        </Typography>
        <Typography variant="body1">
          En sevdiğiniz kitapları keşfedin, inceleyin ve tartışın.
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary">
            Daha Fazla Keşfet
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
