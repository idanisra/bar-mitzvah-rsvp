/**
 * Utility functions for date formatting and manipulation
 */

export interface DateFormatOptions {
  locale?: string;
  timeZone?: string;
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  weekday?: 'long' | 'short' | 'narrow';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
}

/**
 * Format date with Hebrew locale support
 */
export const formatDate = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };

  return new Intl.DateTimeFormat('he-IL', defaultOptions).format(dateObj);
};

/**
 * Format time with Hebrew locale support
 */
export const formatTime = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Time';
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    ...options
  };

  return new Intl.DateTimeFormat('he-IL', defaultOptions).format(dateObj);
};

/**
 * Format date and time with Hebrew locale support
 */
export const formatDateTime = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date/Time';
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    ...options
  };

  return new Intl.DateTimeFormat('he-IL', defaultOptions).format(dateObj);
};

/**
 * Get relative time (e.g., "in 2 days", "yesterday")
 */
export const getRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = dateObj.getTime() - now.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'היום';
  } else if (diffInDays === 1) {
    return 'מחר';
  } else if (diffInDays === -1) {
    return 'אתמול';
  } else if (diffInDays > 1) {
    return `בעוד ${diffInDays} ימים`;
  } else {
    return `לפני ${Math.abs(diffInDays)} ימים`;
  }
};

/**
 * Check if date is in the future
 */
export const isFutureDate = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj > new Date();
};

/**
 * Check if date is today
 */
export const isToday = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  
  return dateObj.getDate() === today.getDate() &&
         dateObj.getMonth() === today.getMonth() &&
         dateObj.getFullYear() === today.getFullYear();
};

/**
 * Get day of week in Hebrew
 */
export const getHebrewDayOfWeek = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  return days[dateObj.getDay()];
};

/**
 * Format date range (e.g., "December 12-13, 2024")
 */
export const formatDateRange = (
  startDate: Date | string,
  endDate: Date | string
): string => {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return 'Invalid Date Range';
  }

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const startMonth = start.toLocaleDateString('he-IL', { month: 'long' });
  const endMonth = end.toLocaleDateString('he-IL', { month: 'long' });
  const startDay = start.getDate();
  const endDay = end.getDate();

  if (startYear === endYear) {
    if (startMonth === endMonth) {
      return `${startMonth} ${startDay}-${endDay}, ${startYear}`;
    } else {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    }
  } else {
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
  }
};
