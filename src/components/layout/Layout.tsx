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
        position: 'relative'
      }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
