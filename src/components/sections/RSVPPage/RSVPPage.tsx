import { Box, Container, Typography } from '@mui/material';
import RSVPForm from './components/RSVPForm/RSVPForm';

const RSVPPage = () => {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 4,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(30, 58, 138, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)
          `,
        }
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
        
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#1e3a8a',
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            אישור השתתפות
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            נשמח לראותכם באירועים המיוחדים שלנו. אנא מלאו את הפרטים הבאים
          </Typography>
        </Box>

        
        <RSVPForm />
      </Container>
    </Box>
  );
};

export default RSVPPage;
