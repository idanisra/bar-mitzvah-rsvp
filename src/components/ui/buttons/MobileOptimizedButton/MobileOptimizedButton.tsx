import React from 'react';
import { Button, ButtonProps, CircularProgress, Box } from '@mui/material';
import { useTouchOptimization } from '../../../../hooks/ui/useTouchOptimization';

interface MobileOptimizedButtonProps extends Omit<ButtonProps, 'onClick'> {
  onClick?: () => void;
  loading?: boolean;
  hapticFeedback?: boolean;
  touchOptimized?: boolean;
}

const MobileOptimizedButton: React.FC<MobileOptimizedButtonProps> = ({
  onClick,
  loading = false,
  hapticFeedback = true,
  touchOptimized = true,
  children,
  disabled,
  sx,
  ...props
}) => {
  const handleClick = () => {
    if (hapticFeedback && 'vibrate' in navigator) {
      navigator.vibrate(30);
    }
    if (onClick && !loading && !disabled) {
      onClick();
    }
  };

  const touchHandlers = useTouchOptimization({
    onTap: handleClick,
    preventDefault: false
  });

  const buttonProps = touchOptimized ? touchHandlers : { onClick: handleClick };

  return (
    <Button
      {...props}
      {...buttonProps}
      disabled={disabled || loading}
      sx={{
        minHeight: 48,
        minWidth: 120,
        borderRadius: 3,
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '1rem',
        px: 4,
        py: 1.5,
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:active': {
          transform: 'scale(0.98)',
        },
        '&:hover': {
          transform: 'translateY(-2px)',
        },
        ...sx
      }}
    >
      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={20} color="inherit" />
          <span>טוען...</span>
        </Box>
      ) : (
        children
      )}
    </Button>
  );
};

export default MobileOptimizedButton;
