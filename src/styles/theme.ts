import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#1e3a8a',
      light: '#1e40af',
      dark: '#1e3a8a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#DAA520',
      light: '#F0E68C',
      dark: '#B8860B',
      contrastText: '#ffffff',
    },
    background: {
      default: 'rgba(255, 255, 255, 0.1)',
      paper: 'rgba(255, 255, 255, 0.95)',
    },
    text: {
      primary: '#2F2F2F',
      secondary: '#5D5D5D',
    },
    custom: {
      toggle: {
        checked: '#1e3a8a',
        unchecked: 'transparent',
        border: '#ccc',
        text: '#666',
        textChecked: '#ffffff',
      },
      navigation: {
        active: 'rgba(25, 118, 210, 0.9)',
        inactive: 'rgba(13, 71, 161, 0.9)',
        text: '#ffffff',
      }
    }
  },
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif',
    h1: { 
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2
    },
    h2: { 
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2
    },
    h3: { 
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3
    },
    h4: { 
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3
    },
    h5: { 
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    h6: { 
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.4
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem'
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: 'rtl',
          textAlign: 'right',
        }
      }
    },
  }
});
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      toggle: {
        checked: string;
        unchecked: string;
        border: string;
        text: string;
        textChecked: string;
      };
      navigation: {
        active: string;
        inactive: string;
        text: string;
      };
    };
  }
  interface PaletteOptions {
    custom?: {
      toggle?: {
        checked?: string;
        unchecked?: string;
        border?: string;
        text?: string;
        textChecked?: string;
      };
      navigation?: {
        active?: string;
        inactive?: string;
        text?: string;
      };
    };
  }
}
