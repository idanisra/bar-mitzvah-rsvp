import { Event } from '../../../types/events';
import { isMobileDevice, isIOSDevice, getMapUrls } from '../../../utils/deviceDetection';
import { MAP_ACTIONS } from '../../../constants/maps';

/**
 * Open navigation to event location
 * @param event - Event object with coordinates and address
 */
export const openInMaps = (event: Event): void => {
  const { coordinates, address } = event;
  const urls = getMapUrls(MAP_ACTIONS.NAVIGATION, coordinates, address);
  
  if (isMobileDevice()) {
    // For mobile, try to open in navigation apps
    if (isIOSDevice()) {
      // Try Apple Maps first on iOS
      window.location.href = urls.appleMaps;
      
      // Fallback to Google Maps after a short delay
      setTimeout(() => {
        window.location.href = urls.googleMaps;
      }, 1000);
    } else {
      // For Android, use Google Maps directly
      window.location.href = urls.googleMaps;
    }
  } else {
    // For desktop, open in Google Maps
    window.open(urls.googleMaps, '_blank');
  }
};

/**
 * Open address search in maps
 * @param event - Event object with address
 */
export const openAddressInMaps = (event: Event): void => {
  const { address } = event;
  const urls = getMapUrls(MAP_ACTIONS.SEARCH, undefined, address);
  
  if (isMobileDevice()) {
    // For mobile, try to open in navigation apps
    if (isIOSDevice()) {
      // Try Apple Maps first on iOS
      window.location.href = urls.appleMaps;
      
      // Fallback to Google Maps after a short delay
      setTimeout(() => {
        window.location.href = urls.googleMaps;
      }, 1000);
    } else {
      // For Android, use Google Maps directly
      window.location.href = urls.googleMaps;
    }
  } else {
    // For desktop, open in Google Maps
    window.open(urls.googleMaps, '_blank');
  }
};
