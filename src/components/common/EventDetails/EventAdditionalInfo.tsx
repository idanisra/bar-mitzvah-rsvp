import { Box, Card, CardContent, Typography, Grid, Chip, useTheme } from '@mui/material';
import { Event } from '../../../types/events';

interface EventAdditionalInfoProps {
  event: Event;
}

const EventAdditionalInfo = ({ event }: EventAdditionalInfoProps) => {
  const theme = useTheme();

  if (!event.additionalInfo || event.additionalInfo.length === 0) {
    return null;
  }

  return (
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
  );
};

export default EventAdditionalInfo;
