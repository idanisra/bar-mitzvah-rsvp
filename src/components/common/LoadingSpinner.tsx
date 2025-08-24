import { Box, CircularProgress, Typography, SxProps, Theme } from '@mui/material';

interface LoadingSpinnerProps {
  /** Loading message to display */
  message?: string;
  /** Size of the spinner (default: 'medium') */
  size?: 'small' | 'medium' | 'large';
  /** Custom styles */
  sx?: SxProps<Theme>;
  /** Whether to show the message */
  showMessage?: boolean;
  /** Full height loading (centers vertically) */
  fullHeight?: boolean;
}

/**
 * Reusable loading spinner component with customizable size and message
 */
const LoadingSpinner = ({ 
  message = 'טוען...', 
  size = 'medium',
  sx,
  showMessage = true,
  fullHeight = false
}: LoadingSpinnerProps) => {
  const getSpinnerSize = () => {
    switch (size) {
      case 'small': return 24;
      case 'large': return 48;
      default: return 32;
    }
  };

  const getMessageVariant = () => {
    switch (size) {
      case 'small': return 'caption';
      case 'large': return 'body1';
      default: return 'body2';
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        minHeight: fullHeight ? '100vh' : 'auto',
        p: fullHeight ? 0 : 2,
        ...sx
      }}
      role="status"
      aria-label="Loading"
    >
      <CircularProgress 
        size={getSpinnerSize()} 
        color="primary"
        aria-hidden="true"
      />
      
      {showMessage && (
        <Typography 
          variant={getMessageVariant()} 
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingSpinner;
