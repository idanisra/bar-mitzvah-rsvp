import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing';
import * as Clipboard from 'expo-clipboard';
import { Alert } from 'react-native';

export class LinkingService {
  static async makePhoneCall(phoneNumber: string): Promise<void> {
    try {
      const phoneUrl = `tel:${phoneNumber}`;
      const canOpen = await Linking.canOpenURL(phoneUrl);
      
      if (canOpen) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert('שגיאה', 'לא ניתן לבצע שיחה מהמכשיר הזה');
      }
    } catch (error) {
      console.error('Error making phone call:', error);
      Alert.alert('שגיאה', 'שגיאה בביצוע השיחה');
    }
  }

  static async sendEmail(email: string, subject?: string, body?: string): Promise<void> {
    try {
      let emailUrl = `mailto:${email}`;
      const params = new URLSearchParams();
      
      if (subject) params.append('subject', subject);
      if (body) params.append('body', body);
      
      if (params.toString()) {
        emailUrl += `?${params.toString()}`;
      }
      
      const canOpen = await Linking.canOpenURL(emailUrl);
      
      if (canOpen) {
        await Linking.openURL(emailUrl);
      } else {
        Alert.alert('שגיאה', 'לא ניתן לפתוח אפליקציית אימייל');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      Alert.alert('שגיאה', 'שגיאה בשליחת אימייל');
    }
  }

  static async sendSMS(phoneNumber: string, message?: string): Promise<void> {
    try {
      let smsUrl = `sms:${phoneNumber}`;
      
      if (message) {
        smsUrl += `?body=${encodeURIComponent(message)}`;
      }
      
      const canOpen = await Linking.canOpenURL(smsUrl);
      
      if (canOpen) {
        await Linking.openURL(smsUrl);
      } else {
        Alert.alert('שגיאה', 'לא ניתן לפתוח אפליקציית הודעות');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      Alert.alert('שגיאה', 'שגיאה בשליחת הודעה');
    }
  }

  static async shareRSVPLink(rsvpLink: string, guestName: string): Promise<void> {
    try {
      const isAvailable = await Sharing.isAvailableAsync();
      
      if (isAvailable) {
        await Sharing.shareAsync(rsvpLink, {
          mimeType: 'text/plain',
          dialogTitle: `שלח קישור אישור השתתפות ל-${guestName}`,
        });
      } else {
        // Fallback to clipboard
        await this.copyToClipboard(rsvpLink, `קישור אישור השתתפות ל-${guestName} הועתק ללוח`);
      }
    } catch (error) {
      console.error('Error sharing RSVP link:', error);
      Alert.alert('שגיאה', 'שגיאה בשיתוף הקישור');
    }
  }

  static async copyToClipboard(text: string, successMessage?: string): Promise<void> {
    try {
      await Clipboard.setStringAsync(text);
      
      if (successMessage) {
        Alert.alert('הצלחה', successMessage);
      }
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      Alert.alert('שגיאה', 'שגיאה בהעתקה ללוח');
    }
  }

  static async openRSVPLink(rsvpLink: string): Promise<void> {
    try {
      const canOpen = await Linking.canOpenURL(rsvpLink);
      
      if (canOpen) {
        await Linking.openURL(rsvpLink);
      } else {
        Alert.alert('שגיאה', 'לא ניתן לפתוח את הקישור');
      }
    } catch (error) {
      console.error('Error opening RSVP link:', error);
      Alert.alert('שגיאה', 'שגיאה בפתיחת הקישור');
    }
  }
}