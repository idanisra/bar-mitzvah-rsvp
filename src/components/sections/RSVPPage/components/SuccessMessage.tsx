import { Box, Typography, Button, Paper } from '@mui/material';

const SuccessMessage = ({ onReset }) => {

  return (
    <Box >
      {/* Background Pattern Overlay */}
      <Box  />
      
      <Paper >
        <Typography variant="h2" >
          🎉 תודה רבה! 🎉
        </Typography>
        
        <Typography variant="h5" >
          אישור ההשתתפות שלך נשלח בהצלחה!
        </Typography>
        
        <Typography variant="body1" >
          נשמח לראותך באירוע המיוחד שלנו
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={onReset}
          
        >
          שלח אישור נוסף
        </Button>
      </Paper>
    </Box>
  );
};

export default SuccessMessage;
