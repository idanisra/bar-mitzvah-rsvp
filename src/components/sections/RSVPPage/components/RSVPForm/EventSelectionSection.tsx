import { Box, Typography, useTheme } from '@mui/material';
import { EventType } from '../../../../../types/events';

interface EventSelectionSectionProps {
  selectedEvents: EventType[];
  rsvpForBoth: boolean;
  onEventSelection: (eventType: EventType, checked: boolean) => void;
  onBothEventsChange: (checked: boolean) => void;
}

// Clean toggle using theme colors
const CleanToggle = ({ checked, onChange, disabled, label }: { 
  checked: boolean; 
  onChange: (checked: boolean) => void; 
  disabled?: boolean;
  label: string;
}) => {
  const theme = useTheme();
  
  return (
    <div
      onClick={() => !disabled && onChange(!checked)}
      style={{
        width: '100%',
        padding: '12px 16px',
        border: `2px solid ${checked ? theme.palette.custom.toggle.checked : theme.palette.custom.toggle.border}`,
        borderRadius: '8px',
        backgroundColor: checked ? theme.palette.custom.toggle.checked : theme.palette.custom.toggle.unchecked,
        color: checked ? theme.palette.custom.toggle.textChecked : theme.palette.custom.toggle.text,
        fontSize: '14px',
        fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        userSelect: 'none',
        ...(disabled && {
          borderColor: '#ddd',
          backgroundColor: '#f5f5f5',
          color: '#999'
        })
      }}
      onMouseEnter={(e) => {
        if (!disabled && !checked) {
          e.currentTarget.style.borderColor = '#999';
          e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
          e.currentTarget.style.color = '#333';
        } else if (!disabled && checked) {
          e.currentTarget.style.backgroundColor = theme.palette.primary.light;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !checked) {
          e.currentTarget.style.borderColor = theme.palette.custom.toggle.border;
          e.currentTarget.style.backgroundColor = theme.palette.custom.toggle.unchecked;
          e.currentTarget.style.color = theme.palette.custom.toggle.text;
        } else if (!disabled && checked) {
          e.currentTarget.style.backgroundColor = theme.palette.custom.toggle.checked;
        }
      }}
    >
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
        {checked ? '✓' : '○'}
      </span>
      {label}
    </div>
  );
};

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
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <CleanToggle
          checked={rsvpForBoth}
          onChange={onBothEventsChange}
          label="שבת חתן + הנחת תפילין (שני האירועים)"
        />
        
        <CleanToggle
          checked={selectedEvents.includes('shabbat-chatan')}
          onChange={(checked) => onEventSelection('shabbat-chatan', checked)}
          disabled={rsvpForBoth}
          label="שבת חתן בלבד"
        />
        
        <CleanToggle
          checked={selectedEvents.includes('hanachat-tefillin')}
          onChange={(checked) => onEventSelection('hanachat-tefillin', checked)}
          disabled={rsvpForBoth}
          label="הנחת תפילין בלבד"
        />
      </div>
    </Box>
  );
};

export default EventSelectionSection;
