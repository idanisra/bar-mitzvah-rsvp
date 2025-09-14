import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoBottomCTA: React.FC = () => {

  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: { xs: 6, md: 8 },
        p: { xs: 4, md: 6 },
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
        borderRadius: 4,
        border: '1px solid rgba(30, 58, 138, 0.1)'
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#1e3a8a',
          mb: 2
        }}
      >
        מוכנים לחגוג?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          mb: 4,
          maxWidth: 500,
          mx: 'auto'
        }}
      >
        כל מה שצריך זה לאשר השתתפות ולהתכונן לחגיגה מיוחדת
      </Typography>
    </Box>
  );
};

export default InfoBottomCTA;
