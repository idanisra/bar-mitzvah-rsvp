import { Alert } from '@mui/material';

const ErrorAlert = ({ error }) => {

  return (
    <Alert 
      severity="error" 
      
    >
      {error}
    </Alert>
  );
};

export default ErrorAlert;
