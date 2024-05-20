import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar className="container mx-auto flex justify-between items-center">
        <Typography variant="h6" className="font-bold">
          Motion Art Effect
        </Typography>
        <div>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
