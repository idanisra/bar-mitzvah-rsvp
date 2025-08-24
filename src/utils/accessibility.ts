/**
 * Utility functions for accessibility and ARIA support
 */

/**
 * Generate unique ID for ARIA attributes
 */
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Generate accessible label for form fields
 */
export const generateFieldLabel = (
  fieldName: string,
  required: boolean = false,
  description?: string
): string => {
  let label = fieldName;
  
  if (required) {
    label += ' *';
  }
  
  if (description) {
    label += ` (${description})`;
  }
  
  return label;
};

/**
 * Generate ARIA describedby attribute
 */
export const generateAriaDescribedby = (
  _fieldId: string,
  errorId?: string,
  helpTextId?: string
): string | undefined => {
  const ids = [errorId, helpTextId].filter(Boolean);
  return ids.length > 0 ? ids.join(' ') : undefined;
};

/**
 * Generate ARIA label for form fields
 */
export const generateAriaLabel = (
  fieldName: string,
  required: boolean = false,
  placeholder?: string
): string => {
  let label = fieldName;
  
  if (required) {
    label += ' (required)';
  }
  
  if (placeholder) {
    label += `, ${placeholder}`;
  }
  
  return label;
};

/**
 * Generate ARIA live region message
 */
export const generateAriaLiveMessage = (
  message: string,
  _politeness: 'polite' | 'assertive' | 'off' = 'polite'
): string => {
  return message;
};

/**
 * Check if element is focusable
 */
export const isFocusable = (element: HTMLElement): boolean => {
  const tagName = element.tagName.toLowerCase();
  const tabIndex = element.getAttribute('tabindex');
  
  // Elements that are naturally focusable
  if (['a', 'button', 'input', 'select', 'textarea'].includes(tagName)) {
    return true;
  }
  
  // Elements with tabindex >= 0
  if (tabIndex && parseInt(tabIndex) >= 0) {
    return true;
  }
  
  // Elements with contenteditable
  if (element.getAttribute('contenteditable') === 'true') {
    return true;
  }
  
  return false;
};

/**
 * Focus first focusable element in container
 */
export const focusFirstFocusable = (container: HTMLElement): void => {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
  );
  
  if (focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement).focus();
  }
};

/**
 * Trap focus within container (for modals)
 */
export const trapFocus = (container: HTMLElement): (() => void) => {
  const focusableElements = Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
  )) as HTMLElement[];
  
  if (focusableElements.length === 0) return () => {};
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };
  
  container.addEventListener('keydown', handleKeyDown);
  
  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
};

/**
 * Announce message to screen readers
 */
export const announceToScreenReader = (message: string): void => {
  // Create a live region element
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.setAttribute('aria-relevant', 'additions text');
  liveRegion.style.position = 'absolute';
  liveRegion.style.left = '-10000px';
  liveRegion.style.width = '1px';
  liveRegion.style.height = '1px';
  liveRegion.style.overflow = 'hidden';
  
  // Add to DOM
  document.body.appendChild(liveRegion);
  
  // Set message
  liveRegion.textContent = message;
  
  // Remove after a delay
  setTimeout(() => {
    document.body.removeChild(liveRegion);
  }, 1000);
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if user prefers high contrast
 */
export const prefersHighContrast = (): boolean => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

/**
 * Check if user prefers dark color scheme
 */
export const prefersDarkColorScheme = (): boolean => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
