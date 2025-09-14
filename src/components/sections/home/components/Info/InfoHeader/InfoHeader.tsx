import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoHeader: React.FC = () => {

  return (
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
        מה מחכה לכם?
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
        כל מה שצריך כדי שהאירוע יהיה מושלם
      </Typography>
    </Box>
  );
};

export default InfoHeader;
