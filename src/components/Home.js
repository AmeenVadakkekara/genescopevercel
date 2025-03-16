import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredPost = {
    title: "Galaxy: A Game-Changer in Bioinformatics Workflows",
    date: "March 16, 2025",
    image: "https://galaxyproject.org/images/galaxy-logos/galaxy_project_logo.jpg",
    summary: "Discover how Galaxy is revolutionizing bioinformatics analysis with its user-friendly interface and powerful workflow capabilities. Learn about its integration with various tools and how it's making bioinformatics accessible to researchers worldwide.",
    author: "Ameen Vadakkekara",
    readTime: "5 min read"
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ 
        textAlign: 'center', 
        mb: 8,
        animation: 'fadeIn 1s ease-in'
      }}>
        <Typography 
          variant="h2" 
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          Welcome to GeneScope
        </Typography>
        <Typography 
          variant="h5" 
          color="textSecondary" 
          sx={{ 
            maxWidth: '800px', 
            mx: 'auto',
            mb: 4,
            opacity: 0.8
          }}
        >
          Your advanced platform for DNA and protein sequence analysis
        </Typography>
      </Box>
      
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1588600878108-578307a3cc9d"
              alt="DNA structure"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="h2" color="primary">
                DNA Analysis
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Analyze DNA sequences, calculate GC content, and find complementary strands.
              </Typography>
              <Button 
                component={Link} 
                to="/dna-tools" 
                variant="contained" 
                color="primary"
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(33,150,243,0.4)',
                  }
                }}
              >
                Try DNA Tools
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
              alt="Protein structure"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="h2" color="primary">
                Protein Tools
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Convert DNA to protein sequences and analyze amino acid properties.
              </Typography>
              <Button 
                component={Link} 
                to="/protein-tools" 
                variant="contained" 
                color="primary"
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(33,150,243,0.4)',
                  }
                }}
              >
                Try Protein Tools
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
              alt="Blog"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="h2" color="primary">
                Latest Insights
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Stay updated with the latest trends in bioinformatics tools and workflows.
              </Typography>
              <Button 
                component={Link} 
                to="/blog" 
                variant="contained" 
                color="primary"
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(33,150,243,0.4)',
                  }
                }}
              >
                Read Blog
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 4
          }}
        >
          Featured Article
        </Typography>
        <Paper 
          elevation={3}
          sx={{
            overflow: 'hidden',
            borderRadius: 2,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
            }
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="400"
                image={featuredPost.image}
                alt={featuredPost.title}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4 }}>
                <Typography variant="overline" color="primary">
                  Featured Post
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {featuredPost.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="subtitle2" color="primary">
                    {featuredPost.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {featuredPost.date} • {featuredPost.readTime}
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {featuredPost.summary}
                </Typography>
                <Button 
                  component={Link} 
                  to="/blog" 
                  variant="contained" 
                  color="primary"
                  sx={{
                    mt: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(33,150,243,0.4)',
                    }
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box 
        component="footer" 
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                {new Date().getFullYear()} GeneScope. All rights reserved.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Created by Ameen Vadakkekara
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { sm: 'right' } }}>
              <Typography variant="body2" color="text.secondary">
                Contact: av2851@nyu.edu
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default Home;
