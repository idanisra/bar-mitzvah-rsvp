import { Box, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { LocationOn, Directions } from '@mui/icons-material';
import { Event } from '../../types/events';
import { isMobileDevice, isIOSDevice, getMapUrls } from '../../utils/deviceDetection';
import { MAP_ACTIONS } from '../../constants/maps';

interface EventMapProps {
  events: Event[];
  title?: string;
  titleHebrew?: string;
}

const EventMap = ({ events, title = "Event Locations", titleHebrew = "מיקומי האירועים" }: EventMapProps) => {
  const theme = useTheme();

  const openInMaps = (event: Event): void => {
    const { coordinates, address } = event;
    const urls = getMapUrls(MAP_ACTIONS.NAVIGATION, coordinates, address);
    
    if (isMobileDevice()) {
      if (isIOSDevice()) {
        window.location.href = urls.appleMaps;
        setTimeout(() => {
          window.location.href = urls.googleMaps;
        }, 1000);
      } else {
        window.location.href = urls.googleMaps;
      }
    } else {
      window.open(urls.googleMaps, '_blank');
    }
  };

  const openAddressInMaps = (event: Event): void => {
    const { address } = event;
    const urls = getMapUrls(MAP_ACTIONS.SEARCH, undefined, address);
    
    if (isMobileDevice()) {
      if (isIOSDevice()) {
        window.location.href = urls.appleMaps;
        setTimeout(() => {
          window.location.href = urls.googleMaps;
        }, 1000);
      } else {
        window.location.href = urls.googleMaps;
      }
    } else {
      window.open(urls.googleMaps, '_blank');
    }
  };

  return (
    <Card sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <CardContent>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
            {titleHebrew}
          </Typography>
          <Typography variant="h6" component="h4" color="text.secondary">
            {title}
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          alignItems: 'center'
        }}>
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              sx={{ 
                width: '100%', 
                maxWidth: 600,
                border: `2px solid ${index === 0 ? theme.palette.primary.main : theme.palette.secondary.main}`,
                backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.05)' : 'rgba(156, 39, 176, 0.05)'
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ 
                    color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
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
                    onClick={() => openInMaps(event)}
                    sx={{ 
                      borderColor: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      '&:hover': {
                        borderColor: index === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark,
                        backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
                      }
                    }}
                  >
                    ניווט
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<LocationOn />}
                    onClick={() => openAddressInMaps(event)}
                    sx={{ 
                      borderColor: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      '&:hover': {
                        borderColor: index === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark,
                        backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
                      }
                    }}
                  >
                    צפה בכתובת
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventMap;
