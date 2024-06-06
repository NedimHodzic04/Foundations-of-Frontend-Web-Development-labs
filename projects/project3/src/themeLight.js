// themeLight.js
import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ddd', // Adjust primary color
    },
    secondary: {
      main: '#f50057', // Adjust secondary color
    },
  },
  body: {
    backgroundColor: '#f5f5f5', // Light background color
  },
});

export default themeLight;
