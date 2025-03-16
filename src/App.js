import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DnaTools from './components/DnaTools';
import ProteinTools from './components/ProteinTools';
import Blog from './components/Blog';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dna-tools" element={<DnaTools />} />
            <Route path="/protein-tools" element={<ProteinTools />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
