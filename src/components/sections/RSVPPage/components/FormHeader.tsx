import { Box, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

const FormHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box >
      <Typography
        variant={isMobile ? "h3" : "h1"}
        
      >
        🎊 בר מצווה לדניאל 🎊
      </Typography>
      
      <Typography
        variant={isMobile ? "h5" : "h4"}
        
      >
        אישור השתתפות
      </Typography>
      
      <Typography
        variant="body1"
        
      >
        אנא מלא את הפרטים שלך כדי לאשר את השתתפותך
      </Typography>
    </Box>
  );
};

export default FormHeader;
