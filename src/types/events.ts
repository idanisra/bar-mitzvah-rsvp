export interface Event {
  id: string;
  name: string;
  nameHebrew: string;
  date: string;
  dateHebrew: string;
  location: string;
  locationHebrew: string;
  address: string;
  addressHebrew: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  descriptionHebrew: string;
  isLargeEvent: boolean;
  maxGuests?: number;
  startTime?: string;
  endTime?: string;
  dressCode?: string;
  dressCodeHebrew?: string;
  additionalInfo?: string[];
  additionalInfoHebrew?: string[];
}

export interface EventInvitation {
  eventId: string;
  guestName: string;
  guestEmail: string;
  phoneNumber: string;
  numberOfGuests: number;
  dietaryRestrictions: string;
  message: string;
  timestamp: Date;
  isAttending: boolean;
}

export type EventType = 'shabbat-chatan' | 'hanachat-tefillin';
