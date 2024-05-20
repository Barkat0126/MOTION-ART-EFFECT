import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <Typography variant="h4" className="text-center font-bold mb-10">About Us</Typography>
        <Typography className="text-lg text-center">Information about the company or product.</Typography>
      </Container>
    </section>
  );
};

export default About;
