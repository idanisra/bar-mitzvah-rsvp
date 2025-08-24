import { useEffect, useRef } from 'react';
import { Box, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { LocationOn, Directions } from '@mui/icons-material';
import { Event } from '../../types/events';

interface InteractiveMapProps {
  events: Event[];
  titleHebrew?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const InteractiveMap = ({ events, titleHebrew = "מיקומי האירועים" }: InteractiveMapProps) => {
  const theme = useTheme();
  const mapRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
    // Create a beautiful custom map with Jerusalem area
    if (mapRef.current && events.length > 0) {
      const mapContainer = mapRef.current;
      
      // Create a custom map representation of Jerusalem area
      mapContainer.innerHTML = `
        <div style="
          width: 100%; 
          height: 100%; 
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
        ">
          <!-- Jerusalem Area Map Background -->
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(circle at 30% 40%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(139, 69, 19, 0.05) 50%, transparent 60%);
          "></div>
          
          <!-- Map Grid Lines -->
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          "></div>
          
          <!-- Jerusalem Landmarks -->
          <div style="
            position: absolute;
            top: 20%;
            left: 25%;
            width: 8px;
            height: 8px;
            background: rgba(139, 69, 19, 0.3);
            border-radius: 50%;
            border: 1px solid rgba(139, 69, 19, 0.5);
          " title="הר הבית"></div>
          
          <div style="
            position: absolute;
            top: 35%;
            left: 45%;
            width: 6px;
            height: 6px;
            background: rgba(218, 165, 32, 0.3);
            border-radius: 50%;
            border: 1px solid rgba(218, 165, 32, 0.5);
          " title="הכותל המערבי"></div>
          
          <div style="
            position: absolute;
            top: 60%;
            left: 75%;
            width: 7px;
            height: 7px;
            background: rgba(139, 69, 19, 0.3);
            border-radius: 50%;
            border: 1px solid rgba(139, 69, 19, 0.5);
          " title="מגדל דוד"></div>
          
          <!-- Event Location Markers -->
          ${events.map((event, index) => {
            // Position markers based on actual coordinates relative to Jerusalem center
            const jerusalemCenter = { lat: 31.7683, lng: 35.2137 };
            const latDiff = event.coordinates.lat - jerusalemCenter.lat;
            const lngDiff = event.coordinates.lng - jerusalemCenter.lng;
            
            // Scale and position markers on the map
            const left = 50 + (lngDiff * 8000); // Scale factor for longitude
            const top = 50 - (latDiff * 8000); // Scale factor for latitude, inverted Y
            
            return `
              <div style="
                position: absolute;
                left: ${Math.max(15, Math.min(85, left))}%;
                top: ${Math.max(15, Math.min(85, top))}%;
                background: ${index === 0 ? theme.palette.primary.main : theme.palette.secondary.main};
                color: white;
                padding: 8px 12px;
                border-radius: 18px;
                font-size: 12px;
                font-weight: bold;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                transform: translate(-50%, -50%);
                pointer-events: auto;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 1000;
                border: 3px solid white;
                text-shadow: 0 1px 2px rgba(0,0,0,0.3);
              " 
              onmouseover="this.style.transform='translate(-50%, -50%) scale(1.15)'; this.style.zIndex='1001'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.4)';"
              onmouseout="this.style.transform='translate(-50%, -50%) scale(1)'; this.style.zIndex='1000'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)';"
              title="${event.nameHebrew} - ${event.locationHebrew}"
              >
                📍 ${event.nameHebrew}
              </div>
            `;
          }).join('')}
          
          <!-- Map Legend -->
          <div style="
            position: absolute;
            bottom: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.95);
            padding: 10px 15px;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            font-family: 'Heebo', sans-serif;
            direction: rtl;
            text-align: center;
            z-index: 1001;
            border: 1px solid rgba(139, 69, 19, 0.2);
          ">
            <div style="
              display: flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 5px;
            ">
              <div style="
                width: 12px;
                height: 12px;
                background: ${theme.palette.primary.main};
                border-radius: 50%;
                border: 2px solid white;
              "></div>
              <span style="font-size: 12px; color: ${theme.palette.primary.main}; font-weight: 600;">שבת חתן</span>
            </div>
            <div style="
              display: flex;
              align-items: center;
              gap: 8px;
            ">
              <div style="
                width: 12px;
                height: 12px;
                background: ${theme.palette.secondary.main};
                border-radius: 50%;
                border: 2px solid white;
              "></div>
              <span style="font-size: 12px; color: ${theme.palette.secondary.main}; font-weight: 600;">הנחת תפילין</span>
            </div>
          </div>
          
          <!-- Map Title -->
          <div style="
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(255, 255, 255, 0.95);
            padding: 10px 15px;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            font-family: 'Heebo', sans-serif;
            direction: rtl;
            text-align: center;
            z-index: 1001;
            border: 1px solid rgba(139, 69, 19, 0.2);
          ">
            <h4 style="margin: 0; color: ${theme.palette.primary.main}; font-size: 16px; font-weight: 600;">מפת ירושלים - מיקומי האירועים</h4>
            <p style="margin: 3px 0 0 0; font-size: 12px; color: #666;">לחץ על הכפתורים למטה לניווט</p>
          </div>
        </div>
      `;
    }
  }, [events, theme.palette.primary.main, theme.palette.secondary.main]);

  const openInMaps = (event: Event) => {
    const { coordinates } = event;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = `http://maps.apple.com/?daddr=${coordinates.lat},${coordinates.lng}&dirflg=d`;
        setTimeout(() => {
          window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
        }, 1000);
      } else {
        window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
      }
    } else {
      window.open(`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`, '_blank');
    }
  };

  const openAddressInMaps = (event: Event) => {
    const { addressHebrew } = event;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = `http://maps.apple.com/?q=${encodeURIComponent(addressHebrew)}`;
        setTimeout(() => {
          window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressHebrew)}`;
        }, 1000);
      } else {
        window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressHebrew)}`;
      }
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressHebrew)}`, '_blank');
    }
  };

  return (
    <Card sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <CardContent>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
            {titleHebrew}
          </Typography>
        </Box>

        {/* Interactive Map */}
        <Box sx={{ mb: 3 }}>
          <div 
            ref={mapRef} 
            style={{ 
              width: '100%', 
              height: '400px', 
              borderRadius: '8px',
              border: `2px solid ${theme.palette.primary.main}`
            }} 
          />
        </Box>

        {/* Event Details Below Map */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          alignItems: 'center'
        }}>
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              sx={{ 
                width: '100%', 
                maxWidth: 600,
                border: `2px solid ${index === 0 ? theme.palette.primary.main : theme.palette.secondary.main}`,
                backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.05)' : 'rgba(156, 39, 176, 0.05)'
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ 
                    color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                    ml: 1,
                    fontSize: 28
                  }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {event.nameHebrew}
                  </Typography>
                </Box>
                
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                  {event.locationHebrew}
                </Typography>
                
                <Typography variant="body2" sx={{ mb: 2, fontFamily: 'monospace' }}>
                  {event.addressHebrew}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                  <Button
                    variant="outlined"
                    startIcon={<Directions />}
                    onClick={() => openInMaps(event)}
                    sx={{ 
                      borderColor: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      '&:hover': {
                        borderColor: index === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark,
                        backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
                      }
                    }}
                  >
                    ניווט
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<LocationOn />}
                    onClick={() => openAddressInMaps(event)}
                    sx={{ 
                      borderColor: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                      '&:hover': {
                        borderColor: index === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark,
                        backgroundColor: index === 0 ? 'rgba(25, 118, 210, 0.04)' : 'rgba(156, 39, 176, 0.04)'
                      }
                    }}
                  >
                    צפה בכתובת
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;
