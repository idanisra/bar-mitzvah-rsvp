/**
 * Utility functions for testing and debugging
 */

/**
 * Create mock data for testing
 */
export const createMockEvent = (overrides: Partial<any> = {}) => ({
  id: 'test-event',
  name: 'Test Event',
  nameHebrew: 'אירוע בדיקה',
  date: '2024-12-15',
  dateHebrew: 'ט״ו כסלו תשפ״ה',
  location: 'Test Location',
  locationHebrew: 'מיקום בדיקה',
  address: '123 Test St, Test City',
  addressHebrew: 'רחוב בדיקה 123, עיר בדיקה',
  coordinates: { lat: 31.7785, lng: 35.2256 },
  description: 'A test event for testing purposes',
  descriptionHebrew: 'אירוע בדיקה למטרות בדיקה',
  isLargeEvent: false,
  maxGuests: 100,
  startTime: '6:00 PM',
  endTime: '10:00 PM',
  dressCode: 'Casual',
  dressCodeHebrew: 'לבוש יומיומי',
  additionalInfo: ['Test info 1', 'Test info 2'],
  additionalInfoHebrew: ['מידע בדיקה 1', 'מידע בדיקה 2'],
  ...overrides
});

/**
 * Create mock form data for testing
 */
export const createMockFormData = (overrides: Partial<any> = {}) => ({
  name: 'Test User',
  email: 'test@example.com',
  phone: '050-1234567',
  guests: '2',
  dietary: 'none',
  message: 'Test message',
  ...overrides
});

/**
 * Create mock user for testing
 */
export const createMockUser = (overrides: Partial<any> = {}) => ({
  id: 'test-user-id',
  name: 'Test User',
  email: 'test@example.com',
  phone: '050-1234567',
  ...overrides
});

/**
 * Wait for a specified amount of time
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Wait for next tick
 */
export const waitForNextTick = (): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, 0));
};

/**
 * Mock console methods for testing
 */
export const mockConsole = () => {
  const originalConsole = { ...console };
  
  const mockConsole = {
    log: () => {},
    warn: () => {},
    error: () => {},
    info: () => {},
    debug: () => {}
  };
  
  Object.assign(console, mockConsole);
  
  return {
    mockConsole,
    restore: () => Object.assign(console, originalConsole)
  };
};

/**
 * Create a mock function that returns a promise
 */
export const createMockAsyncFunction = <T>(
  returnValue: T,
  delay: number = 100,
  shouldReject: boolean = false
) => {
  return () => {
    return new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(new Error('Mock error'));
        } else {
          resolve(returnValue);
        }
      }, delay);
    });
  };
};

/**
 * Create a mock event object
 */
export const createMockEventObject = (type: string, target: any = {}) => ({
  type,
  target,
  preventDefault: () => {},
  stopPropagation: () => {},
  currentTarget: target,
  ...target
});

/**
 * Create a mock form event
 */
export const createMockFormEvent = (target: any = {}) => 
  createMockEventObject('submit', target);

/**
 * Create a mock change event
 */
export const createMockChangeEvent = (target: any = {}) => 
  createMockEventObject('change', target);

/**
 * Create a mock click event
 */
export const createMockClickEvent = (target: any = {}) => 
  createMockEventObject('click', target);

/**
 * Create a mock keyboard event
 */
export const createMockKeyboardEvent = (
  key: string,
  target: any = {}
) => ({
  ...createMockEventObject('keydown', target),
  key,
  code: `Key${key.toUpperCase()}`,
  keyCode: key.charCodeAt(0),
  which: key.charCodeAt(0)
});

/**
 * Create a mock mouse event
 */
export const createMockMouseEvent = (target: any = {}) => ({
  ...createMockEventObject('click', target),
  clientX: 100,
  clientY: 100,
  screenX: 100,
  screenY: 100,
  button: 0,
  buttons: 1
});

/**
 * Create a mock touch event
 */
export const createMockTouchEvent = (target: any = {}) => ({
  ...createMockEventObject('touchstart', target),
  touches: [
    {
      clientX: 100,
      clientY: 100,
      screenX: 100,
      screenY: 100,
      pageX: 100,
      pageY: 100,
      target: target
    }
  ],
  changedTouches: [],
  targetTouches: []
});

/**
 * Create a mock intersection observer entry
 */
export const createMockIntersectionObserverEntry = (
  isIntersecting: boolean = true,
  target: Element
) => ({
  isIntersecting,
  target,
  boundingClientRect: {
    top: 0,
    left: 0,
    bottom: 100,
    right: 100,
    width: 100,
    height: 100
  },
  intersectionRatio: isIntersecting ? 1 : 0,
  intersectionRect: {
    top: 0,
    left: 0,
    bottom: 100,
    right: 100,
    width: 100,
    height: 100
  },
  rootBounds: null,
  time: Date.now()
});

/**
 * Mock IntersectionObserver for testing
 */
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = () => {};
  mockIntersectionObserver.observe = () => {};
  mockIntersectionObserver.unobserve = () => {};
  mockIntersectionObserver.disconnect = () => {};
  
  window.IntersectionObserver = mockIntersectionObserver as any;
  
  return mockIntersectionObserver;
};

/**
 * Mock ResizeObserver for testing
 */
export const mockResizeObserver = () => {
  const mockResizeObserver = () => {};
  mockResizeObserver.observe = () => {};
  mockResizeObserver.unobserve = () => {};
  mockResizeObserver.disconnect = () => {};
  
  window.ResizeObserver = mockResizeObserver as any;
  
  return mockResizeObserver;
};

/**
 * Mock matchMedia for testing
 */
export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
};
