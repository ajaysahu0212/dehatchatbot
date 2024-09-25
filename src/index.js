import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // To reset default CSS styles
import theme from './utils/theme/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <CssBaseline /> {/* Normalize styles across browsers */}
  <App />
</ThemeProvider>
);
reportWebVitals();
