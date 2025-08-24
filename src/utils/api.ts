/**
 * Utility functions for API calls and error handling
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}

/**
 * Simulate API call with configurable delay and success rate
 * Useful for development and testing
 */
export const simulateApiCall = async <T>(
  data: T,
  options: {
    delay?: number;
    successRate?: number;
    errorMessage?: string;
  } = {}
): Promise<ApiResponse<T>> => {
  const { delay = 1000, successRate = 0.9, errorMessage = 'API call failed' } = options;

  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccess = Math.random() < successRate;
      
      if (isSuccess) {
        resolve({
          success: true,
          data,
          message: 'Success'
        });
      } else {
        resolve({
          success: false,
          error: errorMessage
        });
      }
    }, delay);
  });
};

/**
 * Handle API errors consistently
 */
export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR'
    };
  }
  
  if (typeof error === 'string') {
    return {
      message: error,
      code: 'STRING_ERROR'
    };
  }
  
  if (typeof error === 'object' && error !== null) {
    const errorObj = error as any;
    return {
      message: errorObj.message || 'Unknown error occurred',
      code: errorObj.code || 'OBJECT_ERROR',
      details: errorObj
    };
  }
  
  return {
    message: 'An unexpected error occurred',
    code: 'UNEXPECTED_ERROR'
  };
};

/**
 * Retry API call with exponential backoff
 */
export const retryApiCall = async <T>(
  apiCall: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      // Exponential backoff
      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError!;
};

// Note: debounce and throttle functions are exported from performance.ts
// to avoid duplicate exports
