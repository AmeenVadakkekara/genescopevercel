import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, Grid } from '@mui/material';

const DnaTools = () => {
  const [sequence, setSequence] = useState('');
  const [results, setResults] = useState(null);

  const analyzeDNA = () => {
    // Basic DNA sequence validation
    const validDNA = /^[ATCG]+$/i.test(sequence);
    if (!validDNA) {
      alert('Please enter a valid DNA sequence (only A, T, C, G allowed)');
      return;
    }

    const gcContent = calculateGCContent(sequence);
    const complement = getComplementaryStrand(sequence);
    const length = sequence.length;
    const nucleotideCounts = countNucleotides(sequence);

    setResults({ gcContent, complement, length, nucleotideCounts });
  };

  const calculateGCContent = (seq) => {
    const gcCount = (seq.match(/[GC]/gi) || []).length;
    return ((gcCount / seq.length) * 100).toFixed(2);
  };

  const getComplementaryStrand = (seq) => {
    const complementMap = { A: 'T', T: 'A', C: 'G', G: 'C' };
    return seq.toUpperCase().split('').map(base => complementMap[base]).join('');
  };

  const countNucleotides = (seq) => {
    const counts = { A: 0, T: 0, C: 0, G: 0 };
    seq.toUpperCase().split('').forEach(base => counts[base]++);
    return counts;
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        DNA Sequence Analysis Tools
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Enter DNA Sequence"
          value={sequence}
          onChange={(e) => setSequence(e.target.value.toUpperCase())}
          placeholder="Example: ATCGGTCGATCG"
          sx={{ mb: 2 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={analyzeDNA}
          disabled={!sequence}
        >
          Analyze Sequence
        </Button>
      </Paper>

      {results && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>Results:</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">Sequence Length:</Typography>
                <Typography>{results.length} base pairs</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">GC Content:</Typography>
                <Typography>{results.gcContent}%</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">Nucleotide Counts:</Typography>
                {Object.entries(results.nucleotideCounts).map(([base, count]) => (
                  <Typography key={base}>
                    {base}: {count}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant="subtitle1">Complementary Strand:</Typography>
                <Typography 
                  sx={{ 
                    wordBreak: 'break-all',
                    bgcolor: 'grey.100',
                    p: 1,
                    borderRadius: 1
                  }}
                >
                  {results.complement}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default DnaTools;
