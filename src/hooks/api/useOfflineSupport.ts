import { useState, useEffect, useCallback } from 'react';

interface OfflineSupportOptions {
  onOnline?: () => void;
  onOffline?: () => void;
  retryInterval?: number;
  maxRetries?: number;
}

export const useOfflineSupport = (options: OfflineSupportOptions = {}) => {
  const {
    onOnline,
    onOffline,
    retryInterval = 5000,
    maxRetries = 3
  } = options;

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  const checkConnection = useCallback(async () => {
    try {
      await fetch('/api/health', { 
        method: 'HEAD',
        cache: 'no-cache',
        mode: 'no-cors'
      });
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  const handleOnline = useCallback(() => {
    setIsOnline(true);
    setRetryCount(0);
    setIsRetrying(false);
    onOnline?.();
  }, [onOnline]);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
    onOffline?.();
  }, [onOffline]);

  const retryConnection = useCallback(async () => {
    if (retryCount >= maxRetries) return;

    setIsRetrying(true);
    const isConnected = await checkConnection();
    
    if (isConnected) {
      handleOnline();
    } else {
      setRetryCount(prev => prev + 1);
      setTimeout(retryConnection, retryInterval);
    }
  }, [retryCount, maxRetries, checkConnection, handleOnline, retryInterval]);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (!isOnline) {
      retryConnection();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnline, handleOffline, isOnline, retryConnection]);

  return {
    isOnline,
    isRetrying,
    retryCount,
    retryConnection
  };
};

export const useOfflineAPI = () => {
  const { isOnline, isRetrying } = useOfflineSupport();

  const makeRequest = useCallback(async (
    url: string, 
    options: RequestInit = {},
    fallbackData?: any
  ) => {
    if (!isOnline) {
      throw new Error('אין חיבור לאינטרנט. אנא בדקו את החיבור ונסו שוב.');
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`שגיאה: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      
      if (fallbackData) {
        return fallbackData;
      }
      
      throw error;
    }
  }, [isOnline]);

  return {
    makeRequest,
    isOnline,
    isRetrying
  };
};
