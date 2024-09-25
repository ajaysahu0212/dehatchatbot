// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00662C', // green
    },
    secondary: {
      main: '#dc004e', // red
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
    },
    // Customize other typography options here
  },
});

export default theme;
