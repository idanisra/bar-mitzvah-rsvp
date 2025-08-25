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
    <Box sx={{ mb: 3 }}>
      {/* Event Header */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mb: 1,
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
            mb: 2,
            color: theme.palette.text.secondary,
            fontWeight: 400
          }}
        >
          {event.nameHebrew}
        </Typography>
      </Box>

      {/* Event Information Cards */}
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <CalendarToday sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                תאריך
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.dateHebrew}
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
                מיקום
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.locationHebrew}
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
                שעה
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.startTime}
              </Typography>
              {event.endTime && (
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  עד {event.endTime}
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
                קוד לבוש
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {event.dressCodeHebrew}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {event.dressCodeHebrew}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Event Description */}
      <Card sx={{ mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            על האירוע
          </Typography>
          <Typography variant="body1" paragraph>
            {event.descriptionHebrew}
          </Typography>
        </CardContent>
      </Card>

      {/* Additional Information */}
      {event.additionalInfoHebrew && event.additionalInfoHebrew.length > 0 && (
        <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              מידע נוסף
            </Typography>
            <Grid container spacing={2}>
              {event.additionalInfoHebrew.map((info, index) => (
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
