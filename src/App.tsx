import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Context
import { EventProvider } from './contexts/EventContext';

// Layout Components
import Layout from './components/layout/Layout';

// Page Components
import HomePage from './components/sections/HomePage/HomePage';
import RSVPPage from './components/sections/RSVPPage/RSVPPage';

// Create the full theme with RTL support
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#008080',
      light: '#20B2AA',
      dark: '#006666'
    },
    secondary: {
      main: '#FFD700',
      light: '#FFE44D',
      dark: '#FFB300'
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666'
    }
  },
  typography: {
    fontFamily: 'Heebo, sans-serif',
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
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '50px',
          fontWeight: 600
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: 'rtl',
          textAlign: 'right',
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EventProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rsvp" element={<RSVPPage />} />
            </Routes>
          </Layout>
        </Router>
      </EventProvider>
    </ThemeProvider>
  );
}

export default App;
