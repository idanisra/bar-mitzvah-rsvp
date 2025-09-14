import React from 'react';
import { Grid } from '@mui/material';
import { 
  Hotel, 
  Restaurant, 
  DirectionsCar, 
  Wifi, 
  LocalParking, 
  Accessible 
} from '@mui/icons-material';
import InfoCard from '../InfoCard/InfoCard';

const InfoCardsGrid: React.FC = () => {
  const infoCards = [
    {
      icon: <Hotel sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'מלונות יוקרה',
      description: 'שני מלונות יוקרה בירושלים עם שירותים מלאים ונוחות מקסימלית',
      details: ['לינה נוחה', 'שירותים מלאים', 'ארוחות כשרות']
    },
    {
      icon: <Restaurant sx={{ fontSize: 40, color: '#388e3c' }} />,
      title: 'ארוחות חגיגיות',
      description: 'ארוחות כשרות ומגוונות המותאמות לכל הטעמים וההעדפות',
      details: ['כשרות מלאה', 'מגוון מנות', 'התאמה אישית']
    },
    {
      icon: <DirectionsCar sx={{ fontSize: 40, color: '#f57c00' }} />,
      title: 'הסעות נוחות',
      description: 'הסעות מאורגנות ממקומות מרכזיים בירושלים וסביבתה',
      details: ['הסעות מאורגנות', 'נקודות איסוף', 'נוחות מקסימלית']
    },
    {
      icon: <Wifi sx={{ fontSize: 40, color: '#7b1fa2' }} />,
      title: 'שירותים דיגיטליים',
      description: 'אינטרנט אלחוטי חינם ושירותים דיגיטליים בכל המלונות',
      details: ['WiFi חינם', 'שירותים דיגיטליים', 'קישוריות מלאה']
    },
    {
      icon: <LocalParking sx={{ fontSize: 40, color: '#d32f2f' }} />,
      title: 'חניה זמינה',
      description: 'חניה נוחה וזמינה בכל המלונות ללא תוספת תשלום',
      details: ['חניה חינם', 'מקומות זמינים', 'שירותי חניה']
    },
    {
      icon: <Accessible sx={{ fontSize: 40, color: '#5d4037' }} />,
      title: 'נגישות מלאה',
      description: 'כל המלונות והאירועים מותאמים לנגישות מלאה',
      details: ['נגישות מלאה', 'התאמה אישית', 'שירותים מיוחדים']
    }
  ];

  return (
    <Grid container spacing={3}>
      {infoCards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <InfoCard
            icon={card.icon}
            title={card.title}
            description={card.description}
            details={card.details}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCardsGrid;
