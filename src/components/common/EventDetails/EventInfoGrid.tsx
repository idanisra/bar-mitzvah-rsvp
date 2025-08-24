import { Grid, useTheme } from '@mui/material';
import { CalendarToday, LocationOn, AccessTime, Style } from '@mui/icons-material';
import { Event } from '../../../types/events';
import EventInfoCard from './EventInfoCard';

interface EventInfoGridProps {
  event: Event;
}

const EventInfoGrid = ({ event }: EventInfoGridProps) => {
  const theme = useTheme();

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <EventInfoCard
        icon={<CalendarToday sx={{ fontSize: 40, color: theme.palette.primary.main }} />}
        title="תאריך"
        primaryText={event.dateHebrew}
        secondaryText={event.dateHebrew}
      />
      
      <EventInfoCard
        icon={<LocationOn sx={{ fontSize: 40, color: theme.palette.primary.main }} />}
        title="מיקום"
        primaryText={event.locationHebrew}
        secondaryText={event.locationHebrew}
      />
      
      <EventInfoCard
        icon={<AccessTime sx={{ fontSize: 40, color: theme.palette.primary.main }} />}
        title="שעה"
        primaryText={event.startTime || ''}
        secondaryText={event.endTime ? `עד ${event.endTime}` : ''}
      />
      
      <EventInfoCard
        icon={<Style sx={{ fontSize: 40, color: theme.palette.primary.main }} />}
        title="קוד לבוש"
        primaryText={event.dressCodeHebrew || ''}
        secondaryText={event.dressCodeHebrew || ''}
      />
    </Grid>
  );
};

export default EventInfoGrid;
