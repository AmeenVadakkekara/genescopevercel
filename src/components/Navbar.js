import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        background: 'linear-gradient(45deg, #21CBF3 30%, #2196f3 90%)',
      }
    }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }
          }}
        >
          GeneScope
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            component={Link} 
            to="/dna-tools"
            sx={{
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            DNA Tools
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/protein-tools"
            sx={{
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Protein Tools
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/blog"
            sx={{
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
