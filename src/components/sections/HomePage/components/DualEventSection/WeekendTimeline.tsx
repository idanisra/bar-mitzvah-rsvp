import { Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { EVENTS } from '../../../../../config/events';

const WeekendTimeline = () => {
  const theme = useTheme();
  const shabbatEvent = EVENTS['shabbat-chatan'];
  const hanachatEvent = EVENTS['hanachat-tefillin'];

  return (
    <Card sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          🗓️ Complete Weekend Timeline
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 2, 
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: 2,
              backgroundColor: 'rgba(25, 118, 210, 0.05)'
            }}>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2 }}>
                {shabbatEvent.nameHebrew} - {shabbatEvent.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Friday:</strong> {shabbatEvent.startTime}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Saturday:</strong> {shabbatEvent.endTime}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {shabbatEvent.description}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 2, 
              border: `2px solid ${theme.palette.secondary.main}`,
              borderRadius: 2,
              backgroundColor: 'rgba(156, 39, 176, 0.05)'
            }}>
              <Typography variant="h6" sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                {hanachatEvent.nameHebrew} - {hanachatEvent.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Monday:</strong> {hanachatEvent.startTime} - {hanachatEvent.endTime}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hanachatEvent.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeekendTimeline;
