import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Paper } from '@mui/material';

const Blog = () => {
  const blogPosts = [
    {
      title: "Galaxy: A Game-Changer in Bioinformatics Workflows",
      date: "March 16, 2025",
      image: "https://raw.githubusercontent.com/galaxyproject/galaxy-hub/master/content/images/galaxy-logos/galaxy_project_logo_square.png",
      summary: "Discover how Galaxy is revolutionizing bioinformatics analysis with its user-friendly interface and powerful workflow capabilities. Learn about its integration with various tools and how it's making bioinformatics accessible to researchers worldwide.",
      author: "Ameen Vadakkekara",
      readTime: "5 min read"
    },
    {
      title: "Nextflow: Building Scalable Pipelines",
      date: "March 15, 2025",
      image: "https://raw.githubusercontent.com/nextflow-io/trademark/master/nextflow-icon-128x128.png",
      summary: "Explore how Nextflow is transforming bioinformatics pipeline development with its robust workflow management system. We'll dive into real-world examples and best practices for creating reproducible analyses.",
      author: "Ameen Vadakkekara",
      readTime: "6 min read"
    },
    {
      title: "Snakemake: Python-Powered Workflow Management",
      date: "March 14, 2025",
      image: "https://raw.githubusercontent.com/snakemake/snakemake/master/images/logo.png",
      summary: "Learn how Snakemake combines Python's simplicity with powerful workflow management capabilities. Discover how it's being used in genomics research and why it's becoming a favorite among bioinformaticians.",
      author: "Ameen Vadakkekara",
      readTime: "4 min read"
    },
    {
      title: "BioConda: Simplifying Bioinformatics Software Installation",
      date: "March 13, 2025",
      image: "https://raw.githubusercontent.com/bioconda/bioconda-recipes/master/logo/bioconda_monochrome.png",
      summary: "A comprehensive guide to using BioConda for managing bioinformatics software dependencies. Learn how this tool is making software distribution and installation easier for the community.",
      author: "Ameen Vadakkekara",
      readTime: "7 min read"
    }
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Typography 
          variant="h3" 
          color="primary" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Open-Source Bioinformatics Tools
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="textSecondary" 
          paragraph
          sx={{ 
            textAlign: 'center',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Exploring the latest developments in open-source bioinformatics tools and workflows
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index} sx={{
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)'
              }
            }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1976d2'
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle2" color="primary">
                      {post.author}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • {post.readTime}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {post.summary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
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
    </>
  );
};

export default Blog;
