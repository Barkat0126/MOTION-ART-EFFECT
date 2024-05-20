import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <Container>
        <Typography variant="h4" className="text-center font-bold mb-10">Contact Us</Typography>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <TextField fullWidth label="Name" variant="outlined" />
          </div>
          <div className="mb-4">
            <TextField fullWidth label="Email" type="email" variant="outlined" />
          </div>
          <div className="mb-4">
            <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
          </div>
          <Button type="submit" variant="contained" color="primary" className="w-full">Send</Button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
