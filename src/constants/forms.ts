/**
 * Constants for form fields and validation
 */

export const FORM_FIELDS = {
  RSVP: {
    NAME: 'name',
    EMAIL: 'email',
    PHONE: 'phone',
    GUESTS: 'guests',
    DIETARY: 'dietary',
    MESSAGE: 'message'
  }
} as const;

export const FORM_LABELS = {
  RSVP: {
    NAME: 'שם מלא',
    EMAIL: 'כתובת אימייל',
    PHONE: 'מספר טלפון',
    GUESTS: 'מספר אורחים',
    DIETARY: 'הגבלות תזונה',
    MESSAGE: 'הודעה נוספת'
  }
} as const;

export const FORM_PLACEHOLDERS = {
  RSVP: {
    NAME: 'הכנס את שמך המלא',
    EMAIL: 'example@email.com',
    PHONE: '050-1234567',
    GUESTS: 'מספר האורחים שיגיעו איתך',
    DIETARY: 'בחר הגבלות תזונה אם יש',
    MESSAGE: 'הודעה נוספת או בקשה מיוחדת'
  }
} as const;

export const DIETARY_OPTIONS = [
  { value: 'none', label: 'אין הגבלות' },
  { value: 'vegetarian', label: 'צמחוני' },
  { value: 'vegan', label: 'טבעוני' },
  { value: 'gluten-free', label: 'ללא גלוטן' },
  { value: 'dairy-free', label: 'ללא מוצרי חלב' },
  { value: 'nut-free', label: 'ללא אגוזים' },
  { value: 'other', label: 'אחר' }
] as const;

export const GUEST_COUNT_OPTIONS = [
  { value: '1', label: '1 (רק אני)' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6+', label: '6 ומעלה' }
] as const;

export type DietaryOption = typeof DIETARY_OPTIONS[number]['value'];
export type GuestCountOption = typeof GUEST_COUNT_OPTIONS[number]['value'];
