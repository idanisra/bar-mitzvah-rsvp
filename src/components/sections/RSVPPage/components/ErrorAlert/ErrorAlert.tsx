import { Alert, AlertTitle } from '@mui/material';

interface ErrorAlertProps {
  error: string;
}

const ErrorAlert = ({ error }: ErrorAlertProps) => {
  if (!error) return null;

  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
};

export default ErrorAlert;
