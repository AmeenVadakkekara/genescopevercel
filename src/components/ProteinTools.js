import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, Grid } from '@mui/material';

const ProteinTools = () => {
  const [dnaSequence, setDnaSequence] = useState('');
  const [results, setResults] = useState(null);

  const geneticCode = {
    'TTT': 'F', 'TTC': 'F', 'TTA': 'L', 'TTG': 'L',
    'CTT': 'L', 'CTC': 'L', 'CTA': 'L', 'CTG': 'L',
    'ATT': 'I', 'ATC': 'I', 'ATA': 'I', 'ATG': 'M',
    'GTT': 'V', 'GTC': 'V', 'GTA': 'V', 'GTG': 'V',
    'TCT': 'S', 'TCC': 'S', 'TCA': 'S', 'TCG': 'S',
    'CCT': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
    'ACT': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
    'GCT': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
    'TAT': 'Y', 'TAC': 'Y', 'TAA': '*', 'TAG': '*',
    'CAT': 'H', 'CAC': 'H', 'CAA': 'Q', 'CAG': 'Q',
    'AAT': 'N', 'AAC': 'N', 'AAA': 'K', 'AAG': 'K',
    'GAT': 'D', 'GAC': 'D', 'GAA': 'E', 'GAG': 'E',
    'TGT': 'C', 'TGC': 'C', 'TGA': '*', 'TGG': 'W',
    'CGT': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R',
    'AGT': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
    'GGT': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G'
  };

  const translateDNA = () => {
    // Basic DNA sequence validation
    const validDNA = /^[ATCG]+$/i.test(dnaSequence);
    if (!validDNA) {
      alert('Please enter a valid DNA sequence (only A, T, C, G allowed)');
      return;
    }

    const seq = dnaSequence.toUpperCase();
    let protein = '';
    let codons = [];

    // Find start codon
    const startIndex = seq.indexOf('ATG');
    if (startIndex === -1) {
      alert('No start codon (ATG) found in the sequence');
      return;
    }

    // Translate from start codon
    for (let i = startIndex; i < seq.length - 2; i += 3) {
      const codon = seq.slice(i, i + 3);
      if (codon.length === 3) {
        codons.push(codon);
        const aa = geneticCode[codon];
        if (aa === '*') break; // Stop if we hit a stop codon
        protein += aa;
      }
    }

    setResults({
      protein,
      codons,
      length: protein.length,
      molecularWeight: calculateMolecularWeight(protein)
    });
  };

  const calculateMolecularWeight = (protein) => {
    const weights = {
      'A': 89.1, 'R': 174.2, 'N': 132.1, 'D': 133.1,
      'C': 121.2, 'E': 147.1, 'Q': 146.2, 'G': 75.1,
      'H': 155.2, 'I': 131.2, 'L': 131.2, 'K': 146.2,
      'M': 149.2, 'F': 165.2, 'P': 115.1, 'S': 105.1,
      'T': 119.1, 'W': 204.2, 'Y': 181.2, 'V': 117.1
    };

    return protein.split('').reduce((sum, aa) => sum + (weights[aa] || 0), 0).toFixed(1);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        DNA to Protein Translation
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Enter DNA Sequence"
          value={dnaSequence}
          onChange={(e) => setDnaSequence(e.target.value.toUpperCase())}
          placeholder="Example: ATGGCCTATGCATAA"
          sx={{ mb: 2 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={translateDNA}
          disabled={!dnaSequence}
        >
          Translate to Protein
        </Button>
      </Paper>

      {results && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>Results:</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">Protein Sequence:</Typography>
                <Typography 
                  sx={{ 
                    wordBreak: 'break-all',
                    bgcolor: 'grey.100',
                    p: 1,
                    borderRadius: 1
                  }}
                >
                  {results.protein}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">Sequence Length:</Typography>
                <Typography>{results.length} amino acids</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">Molecular Weight:</Typography>
                <Typography>{results.molecularWeight} Da</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant="subtitle1">Codons:</Typography>
                <Typography 
                  sx={{ 
                    wordBreak: 'break-all',
                    bgcolor: 'grey.100',
                    p: 1,
                    borderRadius: 1
                  }}
                >
                  {results.codons.join('-')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default ProteinTools;
