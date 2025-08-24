import { createContext, useContext, useState, ReactNode } from 'react';
import { EventType } from '../types/events';

interface EventContextType {
  currentEvent: EventType;
  setCurrentEvent: (event: EventType) => void;
  isLargeEvent: boolean;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [currentEvent, setCurrentEvent] = useState<EventType>('hanachat-tefillin');

  const isLargeEvent = currentEvent === 'hanachat-tefillin';

  const value = {
    currentEvent,
    setCurrentEvent,
    isLargeEvent
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};
