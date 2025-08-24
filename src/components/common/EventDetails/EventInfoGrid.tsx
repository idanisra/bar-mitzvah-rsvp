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
        title="Date"
        primaryText={event.date}
        secondaryText={event.dateHebrew}
      />
      
      <EventInfoCard
        icon={<LocationOn sx={{ fontSize: 40, color: theme.palette.primary.main }} />}
        title="Location"
        primaryText={event.location}
        secondaryText={event.locationHebrew}
      />
      
      <EventInfoCard
        icon={<AccessTime sx={{ fontSize: 40, color: theme.palette.primary.main }} />}
        title="Time"
        primaryText={event.startTime || ''}
        secondaryText={event.endTime ? `to ${event.endTime}` : ''}
      />
      
      <EventInfoCard
        icon={<Style sx={{ fontSize: 40, color: theme.palette.primary.main }} />}
        title="Dress Code"
        primaryText={event.dressCode || ''}
        secondaryText={event.dressCodeHebrew || ''}
      />
    </Grid>
  );
};

export default EventInfoGrid;
