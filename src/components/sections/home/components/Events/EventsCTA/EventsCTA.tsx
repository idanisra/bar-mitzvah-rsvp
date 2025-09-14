import React from 'react';
import { Box, Typography } from '@mui/material';
import MobileOptimizedButton from '../../../../../../components/ui/buttons/MobileOptimizedButton/MobileOptimizedButton';

const EventsCTA: React.FC = () => {

  return (
    <Box
      sx={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
        borderRadius: 4,
        p: { xs: 4, md: 6 },
        border: '1px solid rgba(30, 58, 138, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.02) 0%, transparent 70%)
          `,
        }
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#1e3a8a',
          mb: 2,
          position: 'relative',
          zIndex: 2
        }}
      >
        מוזמנים לחגוג איתנו!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          mb: 4,
          position: 'relative',
          zIndex: 2,
          maxWidth: 500,
          mx: 'auto'
        }}
      >
        נשמח לראותכם באירועים המיוחדים שלנו. אנא אשרו השתתפותכם
      </Typography>
      
      <MobileOptimizedButton
        variant="contained"
        size="large"
        sx={{
          background: 'linear-gradient(45deg, #1e3a8a 30%, #3b82f6 90%)',
          color: 'white',
          fontWeight: 700,
          px: 6,
          py: 2,
          borderRadius: 3,
          boxShadow: '0 8px 16px rgba(30, 58, 138, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1e40af 30%, #2563eb 90%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 20px rgba(30, 58, 138, 0.4)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontSize: { xs: '1.1rem', md: '1.2rem' },
          position: 'relative',
          zIndex: 2
        }}
      >
        אישור השתתפות עכשיו
      </MobileOptimizedButton>
    </Box>
  );
};

export default EventsCTA;
