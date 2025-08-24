export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        direction: 'rtl',
        textAlign: 'right',
      },
      // Override specific components for RTL
      '.MuiTypography-root': {
        textAlign: 'inherit',
      },
      '.MuiCard-root': {
        textAlign: 'inherit',
      },
      '.MuiButton-root': {
        textAlign: 'inherit',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '8px 24px',
      },
    },
  },
};
