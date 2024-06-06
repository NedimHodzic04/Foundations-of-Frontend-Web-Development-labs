// themeDark.js
import { createTheme } from '@mui/material/styles';

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0166B1', // Adjust primary color
    },
    secondary: {
      main: '#ddd', // Adjust secondary color
    },
  },
});

export default themeDark;
