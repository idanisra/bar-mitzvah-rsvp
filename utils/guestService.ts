import { collection, addDoc, updateDoc, deleteDoc, doc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Guest, EventType } from '../types';

export class GuestService {
  static async addGuest(guestData: Omit<Guest, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const now = new Date();
      const guestWithTimestamps = {
        ...guestData,
        createdAt: now,
        updatedAt: now,
      };
      
      const docRef = await addDoc(collection(db, 'guests'), guestWithTimestamps);
      return docRef.id;
    } catch (error) {
      console.error('Error adding guest:', error);
      throw new Error('Failed to add guest');
    }
  }

  static async updateGuest(guestId: string, updates: Partial<Guest>): Promise<void> {
    try {
      const guestRef = doc(db, 'guests', guestId);
      await updateDoc(guestRef, {
        ...updates,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error('Error updating guest:', error);
      throw new Error('Failed to update guest');
    }
  }

  static async deleteGuest(guestId: string): Promise<void> {
    try {
      const guestRef = doc(db, 'guests', guestId);
      await deleteDoc(guestRef);
    } catch (error) {
      console.error('Error deleting guest:', error);
      throw new Error('Failed to delete guest');
    }
  }

  static async generateRSVPLink(guestId: string, baseUrl: string = 'https://bar-mitzvah-rsvp.web.app'): Promise<string> {
    return `${baseUrl}/rsvp?guest=${guestId}`;
  }

  static async getGuestsByEvent(eventType: EventType): Promise<Guest[]> {
    try {
      const q = query(collection(db, 'guests'), where('invitedTo', 'array-contains', eventType));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
        lastContacted: doc.data().lastContacted?.toDate()
      })) as Guest[];
    } catch (error) {
      console.error('Error getting guests by event:', error);
      throw new Error('Failed to get guests by event');
    }
  }

  static async getPendingGuests(): Promise<Guest[]> {
    try {
      const q = query(collection(db, 'guests'), where('rsvpStatus', '==', 'pending'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
        lastContacted: doc.data().lastContacted?.toDate()
      })) as Guest[];
    } catch (error) {
      console.error('Error getting pending guests:', error);
      throw new Error('Failed to get pending guests');
    }
  }
}