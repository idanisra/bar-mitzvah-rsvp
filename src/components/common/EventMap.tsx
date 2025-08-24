import { Box, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { LocationOn, Directions } from '@mui/icons-material';
import { Event } from '../../types/events';

interface EventMapProps {
  events: Event[];
  title?: string;
  titleHebrew?: string;
}

const EventMap = ({ events, title = "Event Locations", titleHebrew = "מיקומי האירועים" }: EventMapProps) => {
  const theme = useTheme();

  const openInMaps = (event: Event) => {
    const { lat, lng } = event.coordinates;
    const address = encodeURIComponent(event.address);
    
    // Check if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile, try to open in navigation apps
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${address}`;
      const appleMapsUrl = `http://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`;
      
      // Try to open Apple Maps first (iOS), then Google Maps
      window.location.href = appleMapsUrl;
      
      // Fallback to Google Maps after a short delay
      setTimeout(() => {
        window.location.href = googleMapsUrl;
      }, 1000);
    } else {
      // For desktop, open in Google Maps
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    }
  };

  const openAddressInMaps = (event: Event) => {
    const address = encodeURIComponent(event.address);
    
    // Check if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile, try to open in navigation apps
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
      const appleMapsUrl = `http://maps.apple.com/?q=${address}`;
      
      // Try to open Apple Maps first (iOS), then Google Maps
      window.location.href = appleMapsUrl;
      
      // Fallback to Google Maps after a short delay
      setTimeout(() => {
        window.location.href = googleMapsUrl;
      }, 1000);
    } else {
      // For desktop, open in Google Maps
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
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
                    Navigate
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
                    View Address
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
