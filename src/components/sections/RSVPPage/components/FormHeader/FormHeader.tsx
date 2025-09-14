import { Typography, Box } from '@mui/material';
import { Celebration as CelebrationIcon } from '@mui/icons-material';

const FormHeader = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 3 }}>
      <CelebrationIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        אישור השתתפות
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
        RSVP Confirmation
      </Typography>
      <Typography variant="body1" color="text.secondary">
        אנא מלאו את הפרטים למטה כדי לאשר את השתתפותכם באירוע
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please fill in the details below to confirm your attendance at the event
      </Typography>
    </Box>
  );
};

export default FormHeader;
