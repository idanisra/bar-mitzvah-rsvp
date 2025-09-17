import { Container, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import OfflineIndicator from '../ui/feedback/OfflineIndicator/OfflineIndicator';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isEventPage = location.pathname.startsWith('/event/');
  const isAboutDanielPage = location.pathname === '/about-daniel';
  const isContactPage = location.pathname === '/contact';
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative'
    }}>
      <Navigation />
      
      {/* Hero Title and Subtitle - Only show on homepage */}
      {!isEventPage && !isAboutDanielPage && !isContactPage && (
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            py: 1,
            mt: 10,
            position: 'relative',
            zIndex: 2
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 0,
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
              fontSize: '3rem'
            }}
          >
          דניאל הגיע למצוות
          </Typography>
        </Box>
      )}

      <Container component="main" sx={{ 
        flex: 1, 
        py: 0,
        pt: 2,
        position: 'relative'
      }}>
        {children}
      </Container>
      
      
      <OfflineIndicator />
    </Box>
  );
};

export default Layout;
