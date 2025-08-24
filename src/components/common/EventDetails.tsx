import { Box, Typography, Grid, Card, CardContent, Chip, useTheme } from '@mui/material';
import { useEvent } from '../../contexts/EventContext';
import { EVENTS } from '../../config/events';
import { CalendarToday, LocationOn, AccessTime, Style } from '@mui/icons-material';

const EventDetails = () => {
  const { currentEvent } = useEvent();
  const event = EVENTS[currentEvent];
  const theme = useTheme();

  if (!event) return null;

  return (
    <Box sx={{ mb: 6 }}>
      {/* Event Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mb: 2,
            fontWeight: 700,
            color: theme.palette.primary.main,
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          {event.nameHebrew}
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            mb: 3,
            color: theme.palette.text.secondary,
            fontWeight: 400
          }}
        >
          {event.name}
        </Typography>
      </Box>

      {/* Event Information Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <CalendarToday sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Date
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.date}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {event.dateHebrew}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <LocationOn sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.location}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {event.locationHebrew}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <AccessTime sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Time
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.startTime}
              </Typography>
              {event.endTime && (
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  to {event.endTime}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <Style sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Dress Code
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.dressCode}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {event.dressCodeHebrew}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Event Description */}
      <Card sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            About the Event
          </Typography>
          <Typography variant="body1" paragraph>
            {event.description}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            {event.descriptionHebrew}
          </Typography>
        </CardContent>
      </Card>

      {/* Additional Information */}
      {event.additionalInfo && event.additionalInfo.length > 0 && (
        <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Additional Information
            </Typography>
            <Grid container spacing={2}>
              {event.additionalInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Chip 
                      label="✓" 
                      size="small" 
                      sx={{ 
                        mr: 1, 
                        backgroundColor: theme.palette.success.main,
                        color: 'white',
                        fontWeight: 'bold'
                      }} 
                    />
                    <Typography variant="body2">
                      {info}
                    </Typography>
                  </Box>
                  {event.additionalInfoHebrew && event.additionalInfoHebrew[index] && (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        ml: 4, 
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic'
                      }}
                    >
                      {event.additionalInfoHebrew[index]}
                    </Typography>
                  )}
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default EventDetails;
