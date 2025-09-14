import React from 'react';
import { Card, CardContent, Skeleton, Box } from '@mui/material';

interface SkeletonCardProps {
  height?: number;
  showImage?: boolean;
  showActions?: boolean;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ 
  height = 400, 
  showImage = true, 
  showActions = true 
}) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        height,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      {showImage && (
        <Skeleton
          variant="rectangular"
          height={200}
          animation="wave"
          sx={{
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' },
            }
          }}
        />
      )}
      
      <CardContent sx={{ p: 3 }}>
        
        <Skeleton 
          variant="text" 
          height={40} 
          width="80%" 
          animation="wave"
          sx={{ mb: 2 }}
        />
        
        
        <Skeleton 
          variant="text" 
          height={24} 
          width="60%" 
          animation="wave"
          sx={{ mb: 2 }}
        />
        
        
        <Box sx={{ mb: 2 }}>
          <Skeleton variant="text" height={20} width="100%" animation="wave" />
          <Skeleton variant="text" height={20} width="90%" animation="wave" />
          <Skeleton variant="text" height={20} width="70%" animation="wave" />
        </Box>
        
        
        <Box sx={{ mb: 2 }}>
          <Skeleton variant="text" height={16} width="50%" animation="wave" />
          <Skeleton variant="text" height={16} width="40%" animation="wave" />
        </Box>
        
        
        {showActions && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Skeleton variant="text" height={20} width="30%" animation="wave" />
            <Skeleton variant="circular" width={32} height={32} animation="wave" />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
