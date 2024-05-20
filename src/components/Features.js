import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <Container>
        <Typography variant="h4" className="text-center font-bold mb-10">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper className="p-4">
              <Typography variant="h6" className="font-bold mb-2">Light Weight</Typography>
              <Typography>Motion Art for Elementor is designed to be lightweight.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="p-4">
              <Typography variant="h6" className="font-bold mb-2">100% Responsive</Typography>
              <Typography>Create a consistent visual experience across all devices.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="p-4">
              <Typography variant="h6" className="font-bold mb-2">FUser Friendly Interface</Typography>
              <Typography>Ensure a smooth experience for both applicants and administrators.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
