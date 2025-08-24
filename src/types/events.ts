export interface Event {
  id: string;
  nameHebrew: string;
  dateHebrew: string;
  locationHebrew: string;
  addressHebrew: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  descriptionHebrew: string;
  isLargeEvent: boolean;
  maxGuests?: number;
  startTime?: string;
  endTime?: string;
  dressCodeHebrew?: string;
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
