import React from 'react';
import { Box, Grid } from '@mui/material';
import { Event } from '../../../../../../types/events';
import Card3D from '../../../../../../components/ui/cards/Card3D/Card3D';
import SkeletonCard from '../../../../../../components/ui/feedback/SkeletonCard/SkeletonCard';
import { useTouchOptimization } from '../../../../../../hooks/ui/useTouchOptimization';

interface EventsGridProps {
  events: Event[];
  selectedEvent: string | null;
  isLoading: boolean;
  onEventClick: (eventId: string) => void;
}

const EventsGrid: React.FC<EventsGridProps> = ({
  events,
  selectedEvent,
  isLoading,
  onEventClick
}) => {
  const touchHandlers = useTouchOptimization({
    onTap: () => {
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
    }
  });

  return (
    <Grid container spacing={4} sx={{ mb: 6 }}>
      {isLoading ? (
        Array.from({ length: 2 }).map((_, index) => (
          <Grid item xs={12} key={`skeleton-${index}`}>
            <SkeletonCard height={500} />
          </Grid>
        ))
      ) : (
        events.map((event, index) => (
          <Grid item xs={12} key={event.id}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(30px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                }
              }}
              {...touchHandlers}
            >
              <Card3D
                event={event}
                isSelected={selectedEvent === event.id}
                onClick={() => onEventClick(event.id)}
              />
            </Box>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default EventsGrid;
