import { Box, Typography, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { EventType } from '../../../../../types/events';

interface EventSelectionSectionProps {
  selectedEvents: EventType[];
  rsvpForBoth: boolean;
  onEventSelection: (eventType: EventType, checked: boolean) => void;
  onBothEventsChange: (checked: boolean) => void;
}

const EventSelectionSection = ({ 
  selectedEvents, 
  rsvpForBoth, 
  onEventSelection, 
  onBothEventsChange 
}: EventSelectionSectionProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        לאיזה אירועים אתם מגיעים?
      </Typography>
      
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={rsvpForBoth}
              onChange={(e) => onBothEventsChange(e.target.checked)}
            />
          }
          label="שבת חתן + הנחת תפילין (שני האירועים)"
        />
        
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedEvents.includes('shabbat-chatan')}
              onChange={(e) => onEventSelection('shabbat-chatan', e.target.checked)}
              disabled={rsvpForBoth}
            />
          }
          label="שבת חתן בלבד"
        />
        
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedEvents.includes('hanachat-tefillin')}
              onChange={(e) => onEventSelection('hanachat-tefillin', e.target.checked)}
              disabled={rsvpForBoth}
            />
          }
          label="הנחת תפילין בלבד"
        />
      </FormGroup>
    </Box>
  );
};

export default EventSelectionSection;
