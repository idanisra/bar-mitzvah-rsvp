import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';

const AboutDaniel: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      {/* Content Section */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Personal Story */}
          <Grid item xs={12}>
            <Card sx={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#1976d2', mb: 3, textAlign: 'right' }}>
                  הסיפור האישי
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, textAlign: 'right', mb: 3 }}>
                  דניאל הוא נער מיוחד וחכם, מלא באנרגיה וחיוך תמידי. מגיל צעיר הוא הראה עניין רב בלימודים ובקהילה, 
                  תמיד מוכן לעזור לאחרים ולשתף את הידע שלו עם חבריו.
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, textAlign: 'right' }}>
                  הוא אוהב לקרוא ספרים, לשחק כדורסל עם החברים, ולעזור בבית. דניאל ידוע בחבריו כמישהו שאפשר לסמוך עליו, 
                  תמיד מוכן להקשיב ולתת עצה טובה.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Interests & Hobbies */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              height: '100%'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2', mb: 3, textAlign: 'right' }}>
                  תחביבים
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • קריאת ספרים וסיפורים
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • נגינה בגיטרה
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • לימוד תורה ומצוות
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • עזרה בבית 
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • בישול עם המשפחה
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Family & Friends */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              height: '100%'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2', mb: 3, textAlign: 'right' }}>
                  משפחה וחברים
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • אוהב את המשפחה מאוד
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • חבר טוב ונאמן
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • תמיד מוכן לעזור
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • אוהב לבלות עם חברים
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                    • מכבד את המבוגרים
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Bar Mitzvah Message */}
          <Grid item xs={12}>
            <Card sx={{ 
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              color: '#000',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3)'
            }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  בר מצווה שמח!
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8, maxWidth: 600, mx: 'auto' }}>
                  זהו רגע מיוחד ומרגש בחייו, שבו הוא הופך לחלק מהקהילה היהודית 
                  ומקבל על עצמו את האחריות של מצוות התורה.
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8, maxWidth: 600, mx: 'auto', mt: 2 }}>
                  אנחנו גאים בו מאוד ומאחלים לו הצלחה רבה בדרכו החדשה!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutDaniel;
