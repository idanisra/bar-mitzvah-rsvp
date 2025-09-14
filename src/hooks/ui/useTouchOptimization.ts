import { useCallback, useRef, useEffect } from 'react';

interface TouchOptimizationOptions {
  onTap?: () => void;
  onLongPress?: () => void;
  longPressDelay?: number;
  preventDefault?: boolean;
}

export const useTouchOptimization = (options: TouchOptimizationOptions = {}) => {
  const {
    onTap,
    onLongPress,
    longPressDelay = 500,
    preventDefault = true
  } = options;

  const touchStartTime = useRef<number>(0);
  const touchStartPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const isLongPress = useRef<boolean>(false);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
    
    touchStartTime.current = Date.now();
    touchStartPosition.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    
    isLongPress.current = false;
    
    if (onLongPress) {
      longPressTimer.current = setTimeout(() => {
        isLongPress.current = true;
        onLongPress();
      }, longPressDelay);
    }
  }, [onLongPress, longPressDelay, preventDefault]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
    
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    
    if (!isLongPress.current && onTap) {
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime.current;
      
      if (touchDuration < longPressDelay) {
        onTap();
      }
    }
  }, [onTap, longPressDelay, preventDefault]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  const handleTouchCancel = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchCancel: handleTouchCancel,
  };
};

export const useDeviceCapabilities = () => {
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
  const isIOS = typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = typeof window !== 'undefined' && /Android/.test(navigator.userAgent);

  return {
    isTouchDevice,
    isIOS,
    isAndroid,
    isMobileDevice: isIOS || isAndroid
  };
};
