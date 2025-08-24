import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Alert } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * Error Boundary component to catch React errors and display a fallback UI
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console or error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            p: 4,
            textAlign: 'center'
          }}
        >
          <Alert severity="error" sx={{ mb: 3, maxWidth: 600 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              משהו השתבש
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Something went wrong. Please try refreshing the page.
            </Typography>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box sx={{ mt: 2, textAlign: 'left' }}>
                <Typography variant="caption" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error.toString()}
                </Typography>
              </Box>
            )}
          </Alert>
          
          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={this.handleRetry}
            sx={{ mt: 2 }}
          >
            נסה שוב
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
