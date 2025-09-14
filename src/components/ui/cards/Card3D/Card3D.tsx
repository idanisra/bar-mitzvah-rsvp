import React, { memo } from 'react';
import { Card, CardContent, Typography, Box, Chip, IconButton } from '@mui/material';
import { LocationOn, AccessTime, Phone, Language } from '@mui/icons-material';
import { Event } from '../../../../types/events';

interface Card3DProps {
  event: Event;
  onClick?: () => void;
  isSelected?: boolean;
  elevation?: number;
}

const Card3D: React.FC<Card3DProps> = memo(({ 
  event, 
  onClick, 
  isSelected = false, 
  elevation = 8 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleWebsiteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (event.website) {
      window.open(event.website, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <Card
      onClick={handleClick}
      sx={{
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: `
          0 ${elevation * 2}px ${elevation * 4}px rgba(0,0,0,0.1),
          0 ${elevation}px ${elevation * 2}px rgba(0,0,0,0.06),
          0 0 0 1px rgba(255,255,255,0.05)
        `,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: `
            0 ${elevation * 3}px ${elevation * 6}px rgba(0,0,0,0.15),
            0 ${elevation * 2}px ${elevation * 4}px rgba(0,0,0,0.1),
            0 0 0 1px rgba(255,255,255,0.1)
          `,
        },
        '&:active': {
          transform: 'translateY(-4px) scale(0.98)',
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 200,
          background: event.id === 'shabbat-chatan' 
            ? `url('/Hotels/Vert.jpg') center/cover, linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`
            : event.id === 'hanachat-tefillin'
            ? `url('/Hotels/Yehuda.jpg') center/cover, linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`
            : `linear-gradient(135deg, 
                ${event.isLargeEvent ? '#1976d2' : '#388e3c'} 0%, 
                ${event.isLargeEvent ? '#42a5f5' : '#66bb6a'} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
            `,
          }}
        />
        

        <Chip
          label={event.id === 'shabbat-chatan' ? 'שבת חתן' : event.id === 'hanachat-tefillin' ? 'הנחת תפילין' : 'אירוע גדול'}
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: event.id === 'shabbat-chatan' 
              ? '#1976d2' 
              : event.id === 'hanachat-tefillin' 
              ? '#FFD700' 
              : 'rgba(255,255,255,0.2)',
            color: event.id === 'hanachat-tefillin' ? '#000' : 'white',
            backdropFilter: 'blur(10px)',
            fontWeight: 600,
          }}
        />
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                {event.dateGregorian}
              </Typography>
              <AccessTime sx={{ color: '#1976d2', ml: 1, fontSize: 20 }} />
            </Box>
            <Typography variant="body1" sx={{ color: '#666', ml: 3 }}>
              {event.dateHebrew}
            </Typography>
          <Typography variant="body2" sx={{ color: '#888', mt: 0.5 }}>
            {event.startTime} - {event.endTime}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, justifyContent: 'flex-end', flexDirection: 'row-reverse', pr: 4 }}>
              <Box sx={{ mr: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333' }}>
                  {event.locationHebrew}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {event.addressHebrew}
                </Typography>
              </Box>
              <LocationOn sx={{ color: '#388e3c', mr: 1, mt: 0.5, fontSize: 20 }} />
            </Box>
        </Box>

        <Typography 
          variant="body2" 
          sx={{ 
            color: '#555', 
            mb: 2, 
            lineHeight: 1.6,
            fontStyle: 'italic'
          }}
        >
          {event.descriptionHebrew}
        </Typography>

        <Box sx={{ mb: 2 }}>
          {event.additionalInfoHebrew?.slice(0, 2).map((info, index) => (
            <Typography 
              key={index}
              variant="caption" 
              sx={{ 
                display: 'block', 
                color: '#777', 
                mb: 0.5,
                '&:before': {
                  content: '"• "',
                  color: '#1976d2',
                  fontWeight: 'bold'
                }
              }}
            >
              {info}
            </Typography>
          ))}
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          pt: 2,
          borderTop: '1px solid rgba(0,0,0,0.1)'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
            <Typography variant="caption" sx={{ color: '#666' }}>
              {event.phoneNumber}
            </Typography>
            <Phone sx={{ color: '#666', ml: 1, fontSize: 16 }} />

          </Box>
          
          {event.website && (
            <IconButton 
              size="small" 
              sx={{ color: '#1976d2' }}
              onClick={handleWebsiteClick}
            >
              <Language fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
});

Card3D.displayName = 'Card3D';

export default Card3D;
