import { Box } from '@mui/material';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%' }}>
      <Navigation />
      <Box component="main">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
