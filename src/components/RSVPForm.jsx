import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Alert, 
  CircularProgress,
  FormControl,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attending: '',
    numberOfGuests: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'rsvp'), {
        ...formData,
        timestamp: new Date(),
        numberOfGuests: parseInt(formData.numberOfGuests) || 1
      });
      
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        attending: '',
        numberOfGuests: '',
        message: ''
      });
    } catch (err) {
      setError('שגיאה בשליחת הטופס. אנא נסה שוב.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          px: { xs: 2, sm: 3, md: 4 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}
        />

        <Paper
          elevation={12}
          sx={{
            p: { xs: 4, sm: 6, md: 8 },
            borderRadius: 6,
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '3px solid rgba(255, 215, 0, 0.5)',
            maxWidth: { xs: '95%', sm: 600, md: 700 },
            width: '100%',
            position: 'relative',
            zIndex: 1,
            transform: 'scale(1)',
            animation: 'successPulse 2s ease-in-out infinite'
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 800,
              background: 'linear-gradient(45deg, #4CAF50, #8BC34A, #CDDC39)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            🎉 מזל טוב! 🎉
          </Typography>
          
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 600,
              color: '#1976d2',
              mb: 3,
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
            }}
          >
            אישור ההשתתפות נשלח בהצלחה!
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Heebo, sans-serif',
              color: '#666',
              mb: 5,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6
            }}
          >
            תודה על אישור ההשתתפות. נראה אותך בחגיגה! 🎊
          </Typography>
          
          <Button
            variant="contained"
            onClick={() => setSuccess(false)}
            sx={{
              fontFamily: 'Heebo, sans-serif',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              fontWeight: 600,
              borderRadius: '50px',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #FF5252, #26A69A)',
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              px: { xs: 4, sm: 6, md: 8 },
              py: { xs: 2, sm: 2.5, md: 3 },
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
            }}
          >
            שלח אישור נוסף
          </Button>
        </Paper>

        <style>
          {`
            @keyframes successPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.02); }
            }
          `}
        </style>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 2, sm: 3, md: 4, lg: 6 },
        px: { xs: 1, sm: 2, md: 3, lg: 4 }
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Paper
          elevation={12}
          sx={{
            p: { xs: 3, sm: 4, md: 6, lg: 8 },
            borderRadius: 6,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '3px solid rgba(255, 215, 0, 0.5)',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6, lg: 8 } }}>
            <Typography
              variant={isMobile ? "h3" : isTablet ? "h2" : "h1"}
              sx={{
                fontFamily: 'Heebo, sans-serif',
                fontWeight: 800,
                background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 2, sm: 3, md: 4 },
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              🎊 בר מצווה לדניאל 🎊
            </Typography>
            
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                fontFamily: 'Heebo, sans-serif',
                fontWeight: 600,
                color: '#1976d2',
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
              }}
            >
              אישור השתתפות
            </Typography>
            
            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{
                fontFamily: 'Heebo, sans-serif',
                color: '#666',
                fontStyle: 'italic',
                fontSize: { xs: '1rem', sm: '1.1rem' }
              }}
            >
              אנא מלא את הפרטים שלך כדי לאשר את השתתפותך
            </Typography>
          </Box>

          {/* Error Alert */}
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 4, 
                borderRadius: 3, 
                direction: 'rtl',
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ direction: 'rtl' }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {/* First Name */}
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  required
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  label="שם פרטי"
                  inputProps={{ dir: 'rtl' }}
                  sx={{
                    fontFamily: 'Heebo, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      '&:hover fieldset': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'right',
                      direction: 'rtl',
                      padding: { xs: '12px 16px', sm: '14px 18px' }
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontFamily: 'Heebo, sans-serif'
                    }
                  }}
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  required
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  label="שם משפחה"
                  inputProps={{ dir: 'rtl' }}
                  sx={{
                    fontFamily: 'Heebo, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      '&:hover fieldset': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'right',
                      direction: 'rtl',
                      padding: { xs: '12px 16px', sm: '14px 18px' }
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontFamily: 'Heebo, sans-serif'
                    }
                  }}
                />
              </Grid>

              {/* Phone */}
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  label="טלפון"
                  inputProps={{ dir: 'rtl' }}
                  sx={{
                    fontFamily: 'Heebo, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      '&:hover fieldset': {
                        borderColor: '#4ECDC4',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4ECDC4',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'right',
                      direction: 'rtl',
                      padding: { xs: '12px 16px', sm: '14px 18px' }
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontFamily: 'Heebo, sans-serif'
                    }
                  }}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="דואר אלקטרוני"
                  inputProps={{ dir: 'rtl' }}
                  sx={{
                    fontFamily: 'Heebo, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      '&:hover fieldset': {
                        borderColor: '#4ECDC4',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4ECDC4',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'right',
                      direction: 'rtl',
                      padding: { xs: '12px 16px', sm: '14px 18px' }
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontFamily: 'Heebo, sans-serif'
                    }
                  }}
                />
              </Grid>

              {/* Attending and Number of Guests Row */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <Select
                    required
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ dir: 'rtl' }}
                    sx={{
                      fontFamily: 'Heebo, sans-serif',
                      borderRadius: 3,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                      '& .MuiSelect-select': {
                        textAlign: 'right',
                        direction: 'rtl',
                        padding: { xs: '12px 16px', sm: '14px 18px' }
                      }
                    }}
                  >
                    <MenuItem value="" disabled>האם תשתתף?</MenuItem>
                    <MenuItem value="yes">כן, אשתתף</MenuItem>
                    <MenuItem value="no">לא, לא אוכל להשתתף</MenuItem>
                    <MenuItem value="maybe">אולי</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  fullWidth
                  name="numberOfGuests"
                  type="text"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  label="מספר משתתפים"
                  disabled={formData.attending !== 'yes' && formData.attending !== 'maybe'}
                  inputProps={{ dir: 'rtl' }}
                  sx={{
                    fontFamily: 'Heebo, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      '&:hover fieldset': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF6B6B',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'right',
                      direction: 'rtl',
                      padding: { xs: '12px 16px', sm: '14px 18px' }
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontFamily: 'Heebo, sans-serif'
                    }
                  }}
                />
              </Grid>

              {/* Message - Full Width */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={isMobile ? 4 : 6}
                  label="הודעה אישית"
                  inputProps={{ dir: 'rtl' }}
                  sx={{
                    fontFamily: 'Heebo, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      '&:hover fieldset': {
                        borderColor: '#4ECDC4',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4ECDC4',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      textAlign: 'right',
                      direction: 'rtl',
                      padding: { xs: '16px 20px', sm: '20px 24px' },
                      lineHeight: '1.6'
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontFamily: 'Heebo, sans-serif'
                    }
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, sm: 4, md: 5 } }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      py: { xs: 2, sm: 2.5, md: 3 },
                      px: { xs: 5, sm: 7, md: 9 },
                      fontFamily: 'Heebo, sans-serif',
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                      fontWeight: 700,
                      borderRadius: '50px',
                      background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
                      backgroundSize: '200% 200%',
                      animation: 'gradientShift 3s ease infinite',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FF5252, #26A69A, #1976D2)',
                        transform: 'translateY(-3px) scale(1.05)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                      },
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      minWidth: { xs: '200px', sm: '250px', md: '300px' },
                      '@keyframes gradientShift': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' }
                      }
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={28} color="inherit" />
                    ) : (
                      '🎉 שלח אישור השתתפות 🎉'
                    )}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default RSVPForm;
