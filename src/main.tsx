import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import Core from './Core';
import './styles/tailwind.css';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Core />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);