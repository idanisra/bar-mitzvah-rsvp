import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Phone, Email, Person } from '@mui/icons-material';

const Contact: React.FC = () => {
  const contacts = [
    {
      name: 'עידן ישראל',
      phone: '054-2117551',
      email: 'idan.israel@gmail.com'
    },
    {
      name: 'חן ישראל',
      phone: '054-5500880',
      email: 'chenmagzi@gmail.com'
    },
    {
      name: 'דניאל ישראל',
      phone: '055-5566517',
      email: 'daniel.aladin.israel@gmail.com'
    }
  ];

  return (
    <Box sx={{ 
      height: '100vh', 
      overflow: 'hidden', 
      pt: 8,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Content Section */}
      <Container maxWidth="lg" sx={{ 
        py: 2, 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden'
      }}>

        {/* Contact Cards - Horizontal Layout */}
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          overflow: 'hidden'
        }}>
          {contacts.map((contact, index) => (
            <Box key={index} sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Card sx={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
                }
              }}>
                <CardContent sx={{ 
                  p: 2, 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  textAlign: 'right'
                }}>
                  {/* Name Header */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 0, 
                    justifyContent: 'flex-end',
                    flexDirection: 'row-reverse'
                  }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1976d2',
                        textAlign: 'right',
                        fontSize: '1.1rem'
                      }}
                    >
                      {contact.name}
                    </Typography>
                    <Person sx={{ color: '#1976d2', ml: 1, mr: 2, fontSize: 20 }} />
                  </Box>
                  
                  {/* Contact Details */}
                  <Box sx={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    gap: 2
                  }}>
                    {/* Phone */}
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'flex-end', 
                        flexDirection: 'row-reverse',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderRadius: 2,
                        p: 1.5,
                        height: '48px',
                        backgroundColor: 'rgba(25, 118, 210, 0.05)',
                        border: '1px solid rgba(25, 118, 210, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.15)',
                          border: '1px solid rgba(25, 118, 210, 0.3)',
                          transform: 'scale(1.02)',
                        }
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(`tel:${contact.phone}`, '_self');
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#1976d2', 
                          fontWeight: 600,
                          fontSize: '1rem'
                        }}
                      >
                        {contact.phone}
                      </Typography>
                      <Phone sx={{ color: '#1976d2', ml: 1, mr: 2, fontSize: 18 }} />
                    </Box>

                    {/* Email */}
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'flex-end', 
                        flexDirection: 'row-reverse',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderRadius: 2,
                        p: 1.5,
                        mb: 0,
                        height: '48px',
                        backgroundColor: 'rgba(25, 118, 210, 0.05)',
                        border: '1px solid rgba(25, 118, 210, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.15)',
                          border: '1px solid rgba(25, 118, 210, 0.3)',
                          transform: 'scale(1.02)',
                        }
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(`mailto:${contact.email}`, '_self');
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#1976d2',
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          wordBreak: 'break-all'
                        }}
                      >
                        {contact.email}
                      </Typography>
                      <Email sx={{ color: '#1976d2', ml: 1, mr: 2, fontSize: 16 }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
