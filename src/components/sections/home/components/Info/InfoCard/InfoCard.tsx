import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  index: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, details, index }) => {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        '@keyframes fadeInUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
        }
      }}
    >
      <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        <Box sx={{ mb: 2 }}>
          {icon}
        </Box>

        
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#1e3a8a',
            mb: 2
          }}
        >
          {title}
        </Typography>

        
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            mb: 3,
            lineHeight: 1.6,
            flexGrow: 1
          }}
        >
          {description}
        </Typography>

        
        <Box sx={{ mt: 'auto' }}>
          {details.map((detail, detailIndex) => (
            <Typography
              key={detailIndex}
              variant="caption"
              sx={{
                display: 'block',
                color: '#888',
                mb: 0.5,
                '&:before': {
                  content: '"✓ "',
                  color: '#388e3c',
                  fontWeight: 'bold'
                }
              }}
            >
              {detail}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
