import { Container, Box, Typography } from '@mui/material';
import Navigation from './Navigation';
import OfflineIndicator from '../ui/feedback/OfflineIndicator/OfflineIndicator';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative'
    }}>
      <Navigation />
      
      {/* Hero Title and Subtitle */}
      <Box
        sx={{
          textAlign: 'center',
          color: 'white',
          py: 2,
          mt: 10,
          position: 'relative',
          zIndex: 2
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
            fontSize: '3rem'
          }}
        >
          בר מצווה לדניאל
        </Typography>
      </Box>

      <Container component="main" sx={{ 
        flex: 1, 
        py: 4,
        position: 'relative'
      }}>
        {children}
      </Container>
      
      
      <OfflineIndicator />
    </Box>
  );
};

export default Layout;
