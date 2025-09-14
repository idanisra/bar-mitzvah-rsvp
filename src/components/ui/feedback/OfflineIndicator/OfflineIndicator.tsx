import React from 'react';
import { Snackbar, Alert, Box, Typography, Button } from '@mui/material';
import { WifiOff, Refresh } from '@mui/icons-material';
import { useOfflineSupport } from '../../../../hooks/api/useOfflineSupport';

const OfflineIndicator: React.FC = () => {
  const { isOnline, isRetrying, retryConnection } = useOfflineSupport({
    onOnline: () => {
      console.log('Connection restored');
    },
    onOffline: () => {
      console.log('Connection lost');
    }
  });

  const handleRetry = () => {
    retryConnection();
  };

  return (
    <Snackbar
      open={!isOnline}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ mt: 8 }}
    >
      <Alert
        severity="warning"
        icon={<WifiOff />}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={handleRetry}
            disabled={isRetrying}
            startIcon={<Refresh />}
            sx={{ 
              minWidth: 'auto',
              px: 1,
              fontSize: '0.875rem'
            }}
          >
            {isRetrying ? 'מנסה...' : 'נסה שוב'}
          </Button>
        }
        sx={{
          backgroundColor: '#fff3cd',
          color: '#856404',
          border: '1px solid #ffeaa7',
          borderRadius: 2,
          '& .MuiAlert-icon': {
            color: '#f39c12'
          }
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            אין חיבור לאינטרנט
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            אנא בדקו את החיבור לאינטרנט ונסו שוב
          </Typography>
        </Box>
      </Alert>
    </Snackbar>
  );
};

export default OfflineIndicator;
