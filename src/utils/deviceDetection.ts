import { MAP_SERVICES, MAP_ACTIONS, type MapAction } from '../constants/maps';

/**
 * Utility functions for device detection and platform-specific behavior
 */

/**
 * Check if the current device is mobile
 * @returns boolean indicating if the device is mobile
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Check if the current device is iOS
 * @returns boolean indicating if the device is iOS
 */
export const isIOSDevice = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

/**
 * Check if the current device is Android
 * @returns boolean indicating if the device is Android
 */
export const isAndroidDevice = (): boolean => {
  return /Android/.test(navigator.userAgent);
};

/**
 * Get the appropriate map URL based on device type
 * @param type - Type of map action ('navigation' | 'search')
 * @param coordinates - Optional coordinates for navigation
 * @param address - Address for search or fallback
 * @returns Object with URLs for different platforms
 */
export const getMapUrls = (
  type: MapAction,
  coordinates?: { lat: number; lng: number },
  address?: string
) => {
  const encodedAddress = address ? encodeURIComponent(address) : '';
  
  if (type === MAP_ACTIONS.NAVIGATION && coordinates) {
    return {
      googleMaps: `${MAP_SERVICES.GOOGLE_MAPS.BASE_URL}${MAP_SERVICES.GOOGLE_MAPS.NAVIGATION_PATH}${MAP_SERVICES.GOOGLE_MAPS.API_PARAM}&destination=${coordinates.lat},${coordinates.lng}&destination_place_id=${encodedAddress}`,
      appleMaps: `${MAP_SERVICES.APPLE_MAPS.BASE_URL}${MAP_SERVICES.APPLE_MAPS.NAVIGATION_PATH}${coordinates.lat},${coordinates.lng}${MAP_SERVICES.APPLE_MAPS.DIRECTION_FLAG}`
    };
  }
  
  return {
    googleMaps: `${MAP_SERVICES.GOOGLE_MAPS.BASE_URL}${MAP_SERVICES.GOOGLE_MAPS.SEARCH_PATH}${MAP_SERVICES.GOOGLE_MAPS.API_PARAM}&query=${encodedAddress}`,
    appleMaps: `${MAP_SERVICES.APPLE_MAPS.BASE_URL}${MAP_SERVICES.APPLE_MAPS.SEARCH_PATH}${encodedAddress}`
  };
};
