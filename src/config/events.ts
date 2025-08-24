import { Event } from '../types/events';

export const EVENTS: Record<string, Event> = {
  'shabbat-chatan': {
    id: 'shabbat-chatan',
    nameHebrew: 'שבת חתן',
    dateHebrew: 'י״ב-י״ג כסלו תשפ״ה',
    locationHebrew: 'מלון ורט, ירושלים',
    addressHebrew: 'רחוב המלך דוד 23, ירושלים, 94101, ישראל',
    coordinates: { lat: 31.7785, lng: 35.2256 },
    descriptionHebrew: 'שבת מיוחדת עם משפחה קרובה וחברים',
    isLargeEvent: false,
    maxGuests: 50,
    startTime: 'יום שישי 16:00',
    endTime: 'יום שבת 21:00',
    dressCodeHebrew: 'לבוש שבת',
    additionalInfoHebrew: [
      'קידוש וארוחות חגיגיות כלולות',
      'לינה במלון זמינה',
      'הסעה ממקומות מרכזיים'
    ]
  },
  'hanachat-tefillin': {
    id: 'hanachat-tefillin',
    nameHebrew: 'הנחת תפילין',
    dateHebrew: 'ט״ז כסלו תשפ״ה',
    locationHebrew: 'מלון יהודה, ירושלים',
    addressHebrew: 'רחוב יהודה 91, ירושלים, 91000, ישראל',
    coordinates: { lat: 31.7833, lng: 35.2167 },
    descriptionHebrew: 'חגיגה גדולה של בר המצווה עם משפחה, חברים וקהילה',
    isLargeEvent: true,
    maxGuests: 200,
    startTime: '18:00',
    endTime: '23:00',
    dressCodeHebrew: 'לבוש חצי רשמי עד רשמי',
    additionalInfoHebrew: [
      'קבלת פנים עם קוקטיילים',
      'מוזיקה חיה ובידור',
      'צילום ווידאו',
      'חניה עם שירות זמינה'
    ]
  }
};

export const getEventById = (id: string): Event | undefined => {
  return EVENTS[id];
};

export const getAllEvents = (): Event[] => {
  return Object.values(EVENTS);
};
