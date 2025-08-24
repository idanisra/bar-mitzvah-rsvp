import { Event } from '../types/events';

export const EVENTS: Record<string, Event> = {
  'shabbat-chatan': {
    id: 'shabbat-chatan',
    name: 'Shabbat Chatan',
    nameHebrew: 'שבת חתן',
    date: 'December 12-13, 2024',
    dateHebrew: 'י״ב-י״ג כסלו תשפ״ה',
    location: 'Vert Hotel, Jerusalem',
    locationHebrew: 'מלון ורט, ירושלים',
    address: 'King David St 23, Jerusalem, 94101, Israel',
    addressHebrew: 'רחוב המלך דוד 23, ירושלים, 94101, ישראל',
    coordinates: { lat: 31.7785, lng: 35.2256 },
    description: 'A special Shabbat celebration with close family and friends',
    descriptionHebrew: 'שבת מיוחדת עם משפחה קרובה וחברים',
    isLargeEvent: false,
    maxGuests: 50,
    startTime: 'Friday 4:00 PM',
    endTime: 'Saturday 9:00 PM',
    dressCode: 'Shabbat attire',
    dressCodeHebrew: 'לבוש שבת',
    additionalInfo: [
      'Kiddush and festive meals included',
      'Hotel accommodation available',
      'Transportation provided from central locations'
    ],
    additionalInfoHebrew: [
      'קידוש וארוחות חגיגיות כלולות',
      'לינה במלון זמינה',
      'הסעה ממקומות מרכזיים'
    ]
  },
  'hanachat-tefillin': {
    id: 'hanachat-tefillin',
    name: 'Hanachat Tefillin',
    nameHebrew: 'הנחת תפילין',
    date: 'December 15, 2024',
    dateHebrew: 'ט״ז כסלו תשפ״ה',
    location: 'Yehuda Hotel, Jerusalem',
    locationHebrew: 'מלון יהודה, ירושלים',
    address: 'Yehuda St 91, Jerusalem, 91000, Israel',
    addressHebrew: 'רחוב יהודה 91, ירושלים, 91000, ישראל',
    coordinates: { lat: 31.7833, lng: 35.2167 },
    description: 'A grand celebration of the Bar Mitzvah with family, friends, and community',
    descriptionHebrew: 'חגיגה גדולה של בר המצווה עם משפחה, חברים וקהילה',
    isLargeEvent: true,
    maxGuests: 200,
    startTime: '6:00 PM',
    endTime: '11:00 PM',
    dressCode: 'Semi-formal to formal',
    dressCodeHebrew: 'לבוש חצי רשמי עד רשמי',
    additionalInfo: [
      'Cocktail reception',
      'Live music and entertainment',
      'Photography and videography',
      'Valet parking available'
    ],
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
