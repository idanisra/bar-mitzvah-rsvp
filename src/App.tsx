import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

// Import our clean theme
import { theme } from './styles/theme';

// Context
import { EventProvider } from './contexts/EventContext';

// Layout Components
import Layout from './components/layout/Layout';

// Page Components
import HomePage from './components/sections/HomePage/HomePage';
import RSVPPage from './components/sections/RSVPPage/RSVPPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/Background.jpeg)',
            backgroundSize: '100% auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
            '@media (max-width: 768px)': {
              backgroundSize: '100% 100%',
            },
            backgroundColor: 'rgba(139, 69, 19, 0.1)',
          }
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
