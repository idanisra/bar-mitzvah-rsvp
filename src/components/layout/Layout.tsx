import { Container, Box } from '@mui/material';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative' // Ensure proper positioning context
    }}>
      <Navigation />
      <Container component="main" sx={{ 
        flex: 1, 
        py: 4,
        pt: 8, // Add top padding to account for fixed navigation
        position: 'relative' // Ensure proper positioning context
      }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
