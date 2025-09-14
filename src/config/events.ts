import { Event } from '../types/events';

export const EVENTS: Record<string, Event> = {
  'shabbat-chatan': {
    id: 'shabbat-chatan',
    nameHebrew: 'שבת חתן',
    dateHebrew: 'י״ב-י״ג כסלו תשפ״ה',
    dateGregorian: '12-13 בדצמבר 2025',
    locationHebrew: 'מלון ורט, ירושלים',
    addressHebrew: 'רחוב העלייה 1, ירושלים 9544001',
    phoneNumber: '02-6588888',
    website: 'https://www.afi-hotels.co.il/vert-jerusalem-hotel',
    coordinates: { lat: 31.7785, lng: 35.2256 },
    descriptionHebrew: '',
    isLargeEvent: false,
    maxGuests: 50,
    startTime: 'יום שישי 13:00',
    endTime: 'יום שבת 21:00',
    dressCodeHebrew: 'לבוש שבת',
    additionalInfoHebrew: []
  },
  'hanachat-tefillin': {
    id: 'hanachat-tefillin',
    nameHebrew: 'הנחת תפילין',
    dateHebrew: 'ט״ו כסלו תשפ״ה',
    dateGregorian: '15 בדצמבר 2025',
    locationHebrew: 'מלון יהודה, ירושלים',
    addressHebrew: 'רחוב חיים א. קוליץ 1, ירושלים 9109000',
    phoneNumber: '02-6322777',
    website: 'https://en.byh.co.il',
    coordinates: { lat: 31.7833, lng: 35.2167 },
    descriptionHebrew: '',
    isLargeEvent: true,
    maxGuests: 200,
    startTime: '09:00',
    endTime: '15:00',
    dressCodeHebrew: 'לבוש חצי רשמי עד רשמי',
    additionalInfoHebrew: []
  }
};

export const getEventById = (id: string): Event | undefined => {
  return EVENTS[id];
};

export const getAllEvents = (): Event[] => {
  return Object.values(EVENTS);
};
