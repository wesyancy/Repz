import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212121', // dark grey background
      paper: '#404040'     // lighter grey for cards and dialogs
    },
    text: {
      primary: '#ffffff'
    },
    primary: {
      main: '#2196f3' // modern blue
    },
    secondary: {
      main: '#03dac6' // accent teal (optional)
    }
  },
  typography: {
    fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1e1e1e'
        }
      }
    }
  }
});

export default theme;