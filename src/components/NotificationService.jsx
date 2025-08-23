import { useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const NotificationService = () => {
  useEffect(() => {
    // Listen for new RSVPs
    const q = query(collection(db, 'rsvps'), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const newRsvp = change.doc.data();
          
          // Show browser notification
          if ('Notification' in window && Notification.permission === 'granted') {
            const notification = new Notification('תגובה חדשה לבר המצווה!', {
              body: `${newRsvp.firstName} ${newRsvp.lastName} - ${newRsvp.attending === 'yes' ? 'משתתף' : 'לא משתתף'}`,
              icon: '/vite.svg',
              badge: '/vite.svg',
              tag: 'new-rsvp',
              requireInteraction: true
            });
            
            // Auto close after 10 seconds
            setTimeout(() => {
              notification.close();
            }, 10000);
          }
          
          // Play notification sound (optional)
          try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
            audio.play();
          } catch (e) {
            console.log('Could not play notification sound');
          }
        }
      });
    });

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    return () => unsubscribe();
  }, []);

  return null; // This component doesn't render anything
};

export default NotificationService;
