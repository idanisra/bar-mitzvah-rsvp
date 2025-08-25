import { createTheme } from '@mui/material/styles';

// Clean, unified theme with minimal overrides
export const theme = createTheme({
  direction: 'rtl',
  
  // Minimal palette - only what we actually need
  palette: {
    mode: 'light',
    primary: {
      main: '#1e3a8a', // Dark blue
      light: '#1e40af',
      dark: '#1e3a8a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#DAA520', // Goldenrod
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
    // Custom colors for specific use cases
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

  // Typography - clean and consistent
  typography: {
    fontFamily: 'Stam, Heebo, sans-serif',
    h1: { 
      fontWeight: 900,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: { 
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.2
    },
    h3: { 
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2
    },
    h4: { 
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3
    },
    h5: { 
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.3
    },
    h6: { 
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5
    }
  },

  // Shape - consistent border radius
  shape: {
    borderRadius: 12
  },

  // Components - minimal overrides, only what's absolutely necessary
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: 'rtl',
          textAlign: 'right',
        }
      }
    },
    // Remove all other component overrides to prevent conflicts
  }
});

// Type declaration for custom palette colors
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
