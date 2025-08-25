import { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, useTheme, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { LocationOn, Directions, Phone, CalendarToday, Language } from '@mui/icons-material';
import { Event } from '../../types/events';

interface EnhancedEventMapProps {
  events: Event[];
  titleHebrew?: string;
}

const EnhancedEventMap = ({ events, titleHebrew = "מיקומי האירועים" }: EnhancedEventMapProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [navigationDialogOpen, setNavigationDialogOpen] = useState(false);



  const openAddressInMaps = (event: Event) => {
    // Use Hebrew hotel name for better navigation
    const searchTerm = event.id === 'shabbat-chatan' ? 'מלון ורט ירושלים' : event.addressHebrew;
    
    if (isMobile) {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = `http://maps.apple.com/?q=${encodeURIComponent(searchTerm)}`;
      } else {
        window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`;
      }
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`, '_blank');
    }
  };

  const callHotel = (event: Event) => {
    if (event.phoneNumber) {
      // Add + prefix for tel: link
      const telNumber = event.phoneNumber.startsWith('+') ? event.phoneNumber : `+${event.phoneNumber}`;
      window.location.href = `tel:${telNumber}`;
    }
  };

  const openWebsite = (event: Event) => {
    if (event.website) {
      window.open(event.website, '_blank');
    }
  };

  const addToCalendar = (event: Event) => {
    // Create calendar event data
    const eventDate = new Date('2024-12-15'); // Adjust based on your event dates
    const startTime = '18:00';
    const endTime = '23:00';
    
    const calendarData = {
      title: event.nameHebrew,
      description: event.descriptionHebrew,
      location: event.addressHebrew,
      startDate: eventDate.toISOString().split('T')[0],
      startTime: startTime,
      endTime: endTime
    };

    // Create calendar URL
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarData.title)}&details=${encodeURIComponent(calendarData.description)}&location=${encodeURIComponent(calendarData.location)}&dates=${calendarData.startDate.replace(/-/g, '')}T${startTime.replace(':', '')}00Z/${calendarData.startDate.replace(/-/g, '')}T${endTime.replace(':', '')}00Z`;
    
    window.open(calendarUrl, '_blank');
  };

  const openNavigationOptions = (event: Event) => {
    setSelectedEvent(event);
    setNavigationDialogOpen(true);
  };

  const handleNavigationOption = (option: string) => {
    if (!selectedEvent) return;

    // Use Hebrew hotel name for better navigation
    const searchTerm = selectedEvent.id === 'shabbat-chatan' ? 'מלון ורט ירושלים' : selectedEvent.addressHebrew;

    switch (option) {
      case 'waze':
        // Use search term with navigate=yes for direct navigation
        window.location.href = `https://waze.com/ul?q=${encodeURIComponent(searchTerm)}&navigate=yes`;
        break;
      case 'apple-maps':
        // Use search term with dirflg=d for direct navigation
        window.location.href = `http://maps.apple.com/?q=${encodeURIComponent(searchTerm)}&dirflg=d`;
        break;
      case 'google-maps':
        window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`;
        break;
    }
    setNavigationDialogOpen(false);
  };

  return (
    <>
      <Card sx={{ mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              {titleHebrew}
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
                      ml: 1,
                      fontSize: 28
                    }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {event.nameHebrew}
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    {event.locationHebrew}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, fontFamily: 'monospace' }}>
                    {event.addressHebrew}
                  </Typography>

                  {event.phoneNumber && (
                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                      טלפון: +{event.phoneNumber}
                    </Typography>
                  )}

                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {isMobile ? (
                      // Mobile: Only navigation button
                      <Button
                        variant="outlined"
                        startIcon={<Directions />}
                        onClick={() => openNavigationOptions(event)}
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
                    ) : (
                      // Desktop: Only address view button
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
                    )}

                    {event.phoneNumber && (
                      <Button
                        variant="outlined"
                        startIcon={<Phone />}
                        onClick={() => callHotel(event)}
                        sx={{
                          borderColor: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                          color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                          '&:hover': {
                            borderColor: index === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark,
                            backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
                          }
                        }}
                      >
                        התקשר
                      </Button>
                    )}

                    {event.website && (
                      <Button
                        variant="outlined"
                        startIcon={<Language />}
                        onClick={() => openWebsite(event)}
                        sx={{
                          borderColor: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                          color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                          '&:hover': {
                            borderColor: index === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark,
                            backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
                          }
                        }}
                      >
                        אתר המלון
                      </Button>
                    )}

                    <Button
                      variant="outlined"
                      startIcon={<CalendarToday />}
                      onClick={() => addToCalendar(event)}
                      sx={{
                        borderColor: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                        color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                        '&:hover': {
                          borderColor: index === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark,
                          backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
                        }
                      }}
                    >
                      הוסף ללוח שנה
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Navigation Options Dialog for Mobile */}
      <Dialog open={navigationDialogOpen} onClose={() => setNavigationDialogOpen(false)}>
        <DialogTitle>בחר אפליקציית ניווט</DialogTitle>
        <DialogContent>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigationOption('waze')}>
                <ListItemIcon>
                  <Directions />
                </ListItemIcon>
                <ListItemText primary="Waze" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigationOption('apple-maps')}>
                <ListItemIcon>
                  <Directions />
                </ListItemIcon>
                <ListItemText primary="Apple Maps" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigationOption('google-maps')}>
                <ListItemIcon>
                  <Directions />
                </ListItemIcon>
                <ListItemText primary="Google Maps" />
              </ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNavigationDialogOpen(false)}>ביטול</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EnhancedEventMap;
