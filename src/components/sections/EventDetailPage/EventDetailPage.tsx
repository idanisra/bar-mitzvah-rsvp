import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';
import { getEventById } from '../../../config/events';

const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const event = eventId ? getEventById(eventId) : null;

  if (!event) {
    return (
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>

        <Container maxWidth="sm" sx={{ pt: 10, py: 4, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
            אירוע לא נמצא
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => navigate('/')}
            sx={{ 
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              color: 'black',
              fontWeight: 600
            }}
          >
            חזרה לעמוד הבית
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>

      {/* Event Header - Full Width */}
      <Card
        sx={{
          background: event.id === 'shabbat-chatan' 
            ? `url('/Hotels/Vert.jpg') center/cover, linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`
            : event.id === 'hanachat-tefillin'
            ? `url('/Hotels/Yehuda.jpg') center/cover, linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`
            : `linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`,
          color: 'white',
          mb: 4,
          borderRadius: 0,
          overflow: 'hidden',
          position: 'relative',
          minHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          mt: 6
        }}
      >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1
            }}
          />
          
        </Card>

        <Container maxWidth="sm" sx={{ pt: 0, pb: 4 }}>
          {/* Event-Specific Content */}
          {event.id === 'shabbat-chatan' ? (
            <Grid container spacing={3}>
              {/* שבת חתן - Event Title */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                  color: 'white',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)'
                }}>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                      שבת חתן
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 1 }}>
                      {event.dateHebrew} • {event.dateGregorian}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      {event.startTime} - {event.endTime}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Location */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', mb: 2 }}>
                      <LocationOn sx={{ color: '#1976d2', mr: 1, mt: 0.5, fontSize: 24 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2', textAlign: 'right' }}>
                          מלון ורט ירושלים
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', textAlign: 'right' }}>
                          רחוב העלייה 1, ירושלים 9544001
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#555', textAlign: 'right', fontStyle: 'italic' }}>
                      מלון מפואר במרכז ירושלים, מושלם לאירוע משפחתי מיוחד
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Event Details */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 2, textAlign: 'right' }}>
                      פרטי האירוע
                    </Typography>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • תפילות שבת מלאות עם הקהילה
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • סעודות שבת חגיגיות
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • לימוד משותף וזמירות
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • אירוח מלא במלון
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Contact */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row-reverse' }}>
                      <Phone sx={{ color: '#1976d2', ml: 1, fontSize: 20 }} />
                      <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 600 }}>
                        {event.phoneNumber}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#666', textAlign: 'center', mt: 1 }}>
                      לפרטים נוספים והרשמה
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ) : event.id === 'hanachat-tefillin' ? (
            <Grid container spacing={3}>
              {/* הנחת תפילין - Event Title */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#000',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3)'
                }}>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                      הנחת תפילין
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.8, mb: 1 }}>
                      {event.dateHebrew} • {event.dateGregorian}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {event.startTime} - {event.endTime}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Location */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', mb: 2 }}>
                      <LocationOn sx={{ color: '#FFD700', mr: 1, mt: 0.5, fontSize: 24 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFD700', textAlign: 'right' }}>
                          מלון יהודה ירושלים
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', textAlign: 'right' }}>
                          רחוב חיים קוליץ, ירושלים 9109000
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#555', textAlign: 'right', fontStyle: 'italic' }}>
                      מלון יוקרתי עם נוף פנורמי של ירושלים
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Event Details */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 2, textAlign: 'right' }}>
                      פרטי האירוע
                    </Typography>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • טקס הנחת תפילין חגיגי
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • תפילת שחרית עם הקהילה
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • סעודת בוקר חגיגית
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
                        • ברכות וזמירות
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Contact */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row-reverse' }}>
                      <Phone sx={{ color: '#FFD700', ml: 1, fontSize: 20 }} />
                      <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 600 }}>
                        {event.phoneNumber}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#666', textAlign: 'center', mt: 1 }}>
                      לפרטים נוספים והרשמה
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={3}>
              {/* Default Event Content */}
              <Grid item xs={12}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#333', mb: 2 }}>
                      {event.nameHebrew}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {event.descriptionHebrew}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/rsvp')}
            sx={{
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              color: 'black',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(255, 215, 0, 0.4)',
              }
            }}
          >
            אישור השתתפות
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/')}
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 3,
              '&:hover': {
                borderColor: 'white',
                background: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            חזרה לעמוד הבית
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EventDetailPage;
