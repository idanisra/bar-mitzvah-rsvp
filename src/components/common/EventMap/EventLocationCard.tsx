import { Box, Card, CardContent, Typography, Button, useTheme } from '@mui/material';
import { LocationOn, Directions } from '@mui/icons-material';
import { Event } from '../../../types/events';

interface EventLocationCardProps {
  event: Event;
  index: number;
  onNavigate: (event: Event) => void;
  onViewAddress: (event: Event) => void;
}

const EventLocationCard = ({ event, index, onNavigate, onViewAddress }: EventLocationCardProps) => {
  const theme = useTheme();
  const isFirstEvent = index === 0;
  const cardColor = isFirstEvent ? theme.palette.primary.main : theme.palette.secondary.main;

  return (
    <Card 
      sx={{ 
        width: '100%', 
        maxWidth: 600,
        border: `2px solid ${cardColor}`,
        backgroundColor: isFirstEvent ? 'rgba(25, 118, 210, 0.05)' : 'rgba(156, 39, 176, 0.05)'
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOn sx={{ 
            color: cardColor,
            mr: 1,
            fontSize: 28
          }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {event.nameHebrew} - {event.name}
          </Typography>
        </Box>
        
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          {event.locationHebrew}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {event.location}
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 2, fontFamily: 'monospace' }}>
          {event.addressHebrew}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: 'monospace' }}>
          {event.address}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Button
            variant="outlined"
            startIcon={<Directions />}
            onClick={() => onNavigate(event)}
            sx={{ 
              borderColor: cardColor,
              color: cardColor,
              '&:hover': {
                borderColor: isFirstEvent ? theme.palette.primary.dark : theme.palette.secondary.dark,
                backgroundColor: isFirstEvent ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
              }
            }}
          >
            Navigate
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<LocationOn />}
            onClick={() => onViewAddress(event)}
            sx={{ 
              borderColor: cardColor,
              color: cardColor,
              '&:hover': {
                borderColor: isFirstEvent ? theme.palette.primary.dark : theme.palette.secondary.dark,
                backgroundColor: isFirstEvent ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
              }
            }}
          >
            View Address
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventLocationCard;
