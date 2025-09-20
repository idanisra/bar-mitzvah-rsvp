import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { NotificationData } from '../types';
import * as Notifications from 'expo-notifications';

export class NotificationService {
  static async createNotification(notificationData: Omit<NotificationData, 'id' | 'createdAt'>): Promise<string> {
    try {
      const now = new Date();
      const notificationWithTimestamp = {
        ...notificationData,
        createdAt: now,
      };
      
      const docRef = await addDoc(collection(db, 'notifications'), notificationWithTimestamp);
      return docRef.id;
    } catch (error) {
      console.error('Error creating notification:', error);
      throw new Error('Failed to create notification');
    }
  }

  static async markAsRead(notificationId: string): Promise<void> {
    try {
      const notificationRef = doc(db, 'notifications', notificationId);
      await updateDoc(notificationRef, { read: true });
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw new Error('Failed to mark notification as read');
    }
  }

  static async sendPushNotification(title: string, body: string, data?: any): Promise<void> {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data,
        },
        trigger: null, // Send immediately
      });
    } catch (error) {
      console.error('Error sending push notification:', error);
      throw new Error('Failed to send push notification');
    }
  }

  static async requestPermissions(): Promise<boolean> {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
      return false;
    }
  }

  static async createNewRSVPNotification(guestName: string, eventTypes: string[]): Promise<void> {
    try {
      const title = 'RSVP חדש! 🎉';
      const body = `${guestName} אישר השתתפות ב-${eventTypes.join(' ו-')}`;
      
      // Create notification in database
      await this.createNotification({
        type: 'new_rsvp',
        title,
        message: body,
        read: false,
      });

      // Send push notification
      await this.sendPushNotification(title, body, {
        type: 'new_rsvp',
        guestName,
        eventTypes,
      });
    } catch (error) {
      console.error('Error creating new RSVP notification:', error);
    }
  }

  static async createReminderNotification(guestName: string, eventType: string): Promise<void> {
    try {
      const title = 'תזכורת RSVP';
      const body = `זכור לשלוח קישור אישור השתתפות ל-${guestName} עבור ${eventType}`;
      
      await this.createNotification({
        type: 'reminder',
        title,
        message: body,
        read: false,
      });

      await this.sendPushNotification(title, body, {
        type: 'reminder',
        guestName,
        eventType,
      });
    } catch (error) {
      console.error('Error creating reminder notification:', error);
    }
  }
}