import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';

import { theme } from './styles/theme';
import { EventProvider } from './contexts/EventContext';
import Layout from './components/layout/Layout';

const HomePage = lazy(() => import('./components/sections/HomePage/HomePage'));
const AboutDaniel = lazy(() => import('./components/sections/AboutDaniel/AboutDaniel'));
const Contact = lazy(() => import('./components/sections/Contact/Contact'));
const RSVPPage = lazy(() => import('./components/sections/RSVPPage/RSVPPage'));
const EventDetailPage = lazy(() => import('./components/sections/EventDetailPage/EventDetailPage'));
const PageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
    }}
  >
    <CircularProgress size={60} sx={{ color: '#1e3a8a' }} />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/Background.jpeg)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
          }
        }}
      >
        <EventProvider>
          <Router>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about-daniel" element={<AboutDaniel />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/rsvp" element={<RSVPPage />} />
                  <Route path="/event/:eventId" element={<EventDetailPage />} />
                </Routes>
              </Suspense>
            </Layout>
          </Router>
        </EventProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
