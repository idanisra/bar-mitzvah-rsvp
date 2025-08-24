/**
 * Utility functions for responsive design and breakpoint management
 */

import { useMediaQuery, useTheme } from '@mui/material';

// Material-UI breakpoints
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Hook to check if current screen size matches a breakpoint
 */
export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
};

/**
 * Hook to check if current screen size is below a breakpoint
 */
export const useBreakpointDown = (breakpoint: Breakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};

/**
 * Hook to check if current screen size is between two breakpoints
 */
export const useBreakpointBetween = (start: Breakpoint, end: Breakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between(start, end));
};

/**
 * Hook to check if current screen size is mobile (below md)
 */
export const useIsMobile = (): boolean => {
  return useBreakpointDown('md');
};

/**
 * Hook to check if current screen size is tablet (between sm and lg)
 */
export const useIsTablet = (): boolean => {
  return useBreakpointBetween('sm', 'lg');
};

/**
 * Hook to check if current screen size is desktop (above md)
 */
export const useIsDesktop = (): boolean => {
  return useBreakpoint('md');
};

/**
 * Hook to check if current screen size is large desktop (above lg)
 */
export const useIsLargeDesktop = (): boolean => {
  return useBreakpoint('lg');
};

/**
 * Get responsive spacing based on breakpoint
 */
export const getResponsiveSpacing = (
  mobile: number,
  tablet: number,
  desktop: number
): { [key: string]: number } => ({
  [BREAKPOINTS.xs]: mobile,
  [BREAKPOINTS.sm]: tablet,
  [BREAKPOINTS.md]: desktop,
  [BREAKPOINTS.lg]: desktop,
  [BREAKPOINTS.xl]: desktop
});

/**
 * Get responsive font size based on breakpoint
 */
export const getResponsiveFontSize = (
  mobile: string,
  tablet: string,
  desktop: string
): { [key: string]: string } => ({
  [BREAKPOINTS.xs]: mobile,
  [BREAKPOINTS.sm]: tablet,
  [BREAKPOINTS.md]: desktop,
  [BREAKPOINTS.lg]: desktop,
  [BREAKPOINTS.xl]: desktop
});

/**
 * Get responsive grid columns based on breakpoint
 */
export const getResponsiveGridColumns = (
  mobile: number,
  tablet: number,
  desktop: number
): { [key: string]: number } => ({
  [BREAKPOINTS.xs]: mobile,
  [BREAKPOINTS.sm]: tablet,
  [BREAKPOINTS.md]: desktop,
  [BREAKPOINTS.lg]: desktop,
  [BREAKPOINTS.xl]: desktop
});

/**
 * Check if device supports touch
 */
export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Check if device is in landscape orientation
 */
export const isLandscape = (): boolean => {
  return window.innerWidth > window.innerHeight;
};

/**
 * Get device pixel ratio
 */
export const getDevicePixelRatio = (): number => {
  return window.devicePixelRatio || 1;
};

/**
 * Check if device supports high DPI displays
 */
export const isHighDPI = (): boolean => {
  return getDevicePixelRatio() > 1;
};
