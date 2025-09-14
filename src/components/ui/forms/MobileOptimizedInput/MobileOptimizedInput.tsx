import React, { useState } from 'react';
import { TextField, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Phone, Email, Person } from '@mui/icons-material';

interface MobileOptimizedInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  required?: boolean;
  error?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric' | 'decimal';
}

const MobileOptimizedInput: React.FC<MobileOptimizedInputProps> = ({
  name,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
  helperText,
  multiline = false,
  rows = 1,
  placeholder,
  disabled = false,
  autoComplete,
  inputMode
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const getInputMode = () => {
    if (inputMode) return inputMode;
    if (type === 'tel') return 'tel';
    if (type === 'email') return 'email';
    if (type === 'number') return 'numeric';
    return 'text';
  };

  const getIcon = () => {
    switch (type) {
      case 'email':
        return <Email sx={{ color: '#666' }} />;
      case 'tel':
        return <Phone sx={{ color: '#666' }} />;
      case 'password':
        return <Person sx={{ color: '#666' }} />;
      default:
        return null;
    }
  };

  const getAutoComplete = () => {
    if (autoComplete) return autoComplete;
    if (type === 'email') return 'email';
    if (type === 'tel') return 'tel';
    if (name === 'name') return 'name';
    return 'off';
  };

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <TextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        type={type === 'password' && showPassword ? 'text' : type}
        required={required}
        error={!!error}
        helperText={error || helperText}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={getAutoComplete()}
        inputMode={getInputMode()}
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            '&:hover': {
              borderColor: '#1e3a8a',
            },
            '&.Mui-focused': {
              borderColor: '#1e3a8a',
              boxShadow: '0 0 0 2px rgba(30, 58, 138, 0.1)',
            },
            '&.Mui-error': {
              borderColor: '#d32f2f',
            }
          },
          '& .MuiInputLabel-root': {
            color: '#666',
            fontSize: '16px',
            '&.Mui-focused': {
              color: '#1e3a8a',
            },
            '&.Mui-error': {
              color: '#d32f2f',
            }
          },
          '& .MuiOutlinedInput-input': {
            padding: '16px 14px',
            '&::placeholder': {
              opacity: 0.7,
              fontSize: '16px',
            }
          }
        }}
        InputProps={{
          startAdornment: getIcon() ? (
            <InputAdornment position="start">
              {getIcon()}
            </InputAdornment>
          ) : undefined,
          endAdornment: type === 'password' ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePassword}
                edge="end"
                sx={{ color: '#666' }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : undefined,
        }}
      />
    </Box>
  );
};

export default MobileOptimizedInput;
