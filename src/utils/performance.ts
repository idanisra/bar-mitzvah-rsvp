/**
 * Utility functions for performance optimization
 */

/**
 * Debounce function calls to limit execution frequency
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function calls to limit execution frequency
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

/**
 * Memoize function results to avoid recalculations
 */
export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  getKey?: (...args: Parameters<T>) => string
): T => {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = getKey ? getKey(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

/**
 * Lazy load images for better performance
 */
export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  placeholder?: string
): void => {
  if (placeholder) {
    img.src = placeholder;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        observer.unobserve(img);
      }
    });
  });
  
  observer.observe(img);
};

/**
 * Preload critical resources
 */
export const preloadResource = (
  href: string,
  as: 'script' | 'style' | 'image' | 'font' | 'fetch'
): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

/**
 * Prefetch non-critical resources
 */
export const prefetchResource = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

/**
 * Measure function execution time
 */
export const measureExecutionTime = <T extends (...args: any[]) => any>(
  func: T,
  label: string = 'Function execution'
): ((...args: Parameters<T>) => ReturnType<T>) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();
    
    console.log(`${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  };
};

/**
 * Batch DOM updates for better performance
 */
export const batchDOMUpdates = (updates: (() => void)[]): void => {
  // Use requestAnimationFrame for smooth updates
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Create intersection observer for lazy loading
 */
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

/**
 * Debounce scroll events for better performance
 */
export const debounceScroll = (
  callback: (event: Event) => void,
  delay: number = 16
): ((event: Event) => void) => {
  return debounce(callback, delay);
};

/**
 * Throttle resize events for better performance
 */
export const throttleResize = (
  callback: (event: Event) => void,
  delay: number = 16
): ((event: Event) => void) => {
  return throttle(callback, delay);
};

/**
 * Check if browser supports modern features
 */
export const supportsModernFeatures = (): boolean => {
  return (
    'IntersectionObserver' in window &&
    'requestAnimationFrame' in window &&
    'performance' in window &&
    'getBoundingClientRect' in Element.prototype
  );
};
