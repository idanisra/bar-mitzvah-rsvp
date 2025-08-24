import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

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
      main: '#8B4513', // Saddle Brown - warm, earthy tone
      light: '#A0522D', // Sienna - lighter brown
      dark: '#654321' // Dark Brown - deeper brown
    },
    secondary: {
      main: '#DAA520', // Goldenrod - warm gold
      light: '#F0E68C', // Khaki - light khaki
      dark: '#B8860B' // Dark Goldenrod - deeper gold
    },
    background: {
      default: 'rgba(255, 255, 255, 0.1)',
      paper: 'rgba(255, 255, 255, 0.95)'
    },
    text: {
      primary: '#2F2F2F', // Dark charcoal
      secondary: '#5D5D5D' // Medium gray
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
          boxShadow: '0 4px 20px rgba(139, 69, 19, 0.15)',
          border: '1px solid rgba(139, 69, 19, 0.1)'
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
      <Box
        sx={{
          backgroundImage: 'url(/assets/images/Background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
