import { useState, useCallback, useMemo } from 'react';
import { EventType } from '../types/events';
import { EVENTS } from '../config/events';

export interface UseEventSelectionReturn {
  selectedEvents: EventType[];
  isSelected: (eventType: EventType) => boolean;
  selectEvent: (eventType: EventType) => void;
  deselectEvent: (eventType: EventType) => void;
  toggleEvent: (eventType: EventType) => void;
  selectAllEvents: () => void;
  deselectAllEvents: () => void;
  isAllEventsSelected: boolean;
  selectedEventsData: Array<typeof EVENTS[EventType]>;
  hasMultipleEvents: boolean;
}

/**
 * Custom hook for managing event selection in RSVP forms
 */
export const useEventSelection = (initialEvent?: EventType): UseEventSelectionReturn => {
  const [selectedEvents, setSelectedEvents] = useState<EventType[]>(
    initialEvent ? [initialEvent] : []
  );

  const isSelected = useCallback((eventType: EventType): boolean => {
    return selectedEvents.includes(eventType);
  }, [selectedEvents]);

  const selectEvent = useCallback((eventType: EventType) => {
    setSelectedEvents(prev => {
      if (!prev.includes(eventType)) {
        return [...prev, eventType];
      }
      return prev;
    });
  }, []);

  const deselectEvent = useCallback((eventType: EventType) => {
    setSelectedEvents(prev => prev.filter(event => event !== eventType));
  }, []);

  const toggleEvent = useCallback((eventType: EventType) => {
    setSelectedEvents(prev => {
      if (prev.includes(eventType)) {
        return prev.filter(event => event !== eventType);
      } else {
        return [...prev, eventType];
      }
    });
  }, []);

  const selectAllEvents = useCallback(() => {
    setSelectedEvents(Object.keys(EVENTS) as EventType[]);
  }, []);

  const deselectAllEvents = useCallback(() => {
    setSelectedEvents([]);
  }, []);

  const isAllEventsSelected = useMemo(() => {
    return selectedEvents.length === Object.keys(EVENTS).length;
  }, [selectedEvents]);

  const selectedEventsData = useMemo(() => {
    return selectedEvents.map(eventId => EVENTS[eventId]);
  }, [selectedEvents]);

  const hasMultipleEvents = useMemo(() => {
    return selectedEvents.length > 1;
  }, [selectedEvents]);

  return {
    selectedEvents,
    isSelected,
    selectEvent,
    deselectEvent,
    toggleEvent,
    selectAllEvents,
    deselectAllEvents,
    isAllEventsSelected,
    selectedEventsData,
    hasMultipleEvents
  };
};
