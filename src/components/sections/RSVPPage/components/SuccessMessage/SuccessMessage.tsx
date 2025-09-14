import { Typography, Button, Paper } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
      <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
      <Typography variant="h4" component="h2" gutterBottom color="success.main">
        תודה לכם!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        אישור ההשתתפות שלכם נשלח בהצלחה. אנחנו מצפים לחגוג איתכם!
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Your RSVP has been submitted successfully. We look forward to celebrating with you!
      </Typography>
      <Button variant="outlined" onClick={onReset}>
        שלח אישור נוסף
      </Button>
    </Paper>
  );
};

export default SuccessMessage;
