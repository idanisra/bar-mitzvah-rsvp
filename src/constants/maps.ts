/**
 * Constants for map and navigation services
 */

export const MAP_SERVICES = {
  GOOGLE_MAPS: {
    BASE_URL: 'https://www.google.com/maps',
    NAVIGATION_PATH: '/dir/',
    SEARCH_PATH: '/search/',
    API_PARAM: '?api=1'
  },
  APPLE_MAPS: {
    BASE_URL: 'http://maps.apple.com',
    NAVIGATION_PATH: '/?daddr=',
    SEARCH_PATH: '/?q=',
    DIRECTION_FLAG: '&dirflg=d'
  }
} as const;

export const MAP_ACTIONS = {
  NAVIGATION: 'navigation',
  SEARCH: 'search'
} as const;

export type MapAction = typeof MAP_ACTIONS[keyof typeof MAP_ACTIONS];
export type MapService = keyof typeof MAP_SERVICES;
