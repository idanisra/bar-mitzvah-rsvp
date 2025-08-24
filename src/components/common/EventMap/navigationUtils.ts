import { Event } from '../../../types/events';

export const openInMaps = (event: Event) => {
  const { lat, lng } = event.coordinates;
  const address = encodeURIComponent(event.address);
  
  // Check if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile, try to open in navigation apps
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${address}`;
    const appleMapsUrl = `http://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`;
    
    // Try to open Apple Maps first (iOS), then Google Maps
    window.location.href = appleMapsUrl;
    
    // Fallback to Google Maps after a short delay
    setTimeout(() => {
      window.location.href = googleMapsUrl;
    }, 1000);
  } else {
    // For desktop, open in Google Maps
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  }
};

export const openAddressInMaps = (event: Event) => {
  const address = encodeURIComponent(event.address);
  
  // Check if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile, try to open in navigation apps
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    const appleMapsUrl = `http://maps.apple.com/?q=${address}`;
    
    // Try to open Apple Maps first (iOS), then Google Maps
    window.location.href = appleMapsUrl;
    
    // Fallback to Google Maps after a short delay
    setTimeout(() => {
      window.location.href = googleMapsUrl;
    }, 1000);
  } else {
    // For desktop, open in Google Maps
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  }
};
