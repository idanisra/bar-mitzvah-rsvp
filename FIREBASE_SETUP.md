# Firebase Setup Guide for Bar Mitzvah Management App

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "צור פרויקט"
3. Enter project name: `bar-mitzvah-management` (or any name you prefer)
4. Click "Continue"
5. Enable Google Analytics (optional)
6. Click "Create project"

## Step 2: Add Web App

1. In your Firebase project, click the Web icon (</>)
2. Enter app nickname: `bar-mitzvah-management-web`
3. Click "Register app"
4. Copy the Firebase configuration object

## Step 3: Enable Firestore Database

1. In the Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (e.g., `us-central1` or `europe-west1`)
5. Click "Done"

## Step 4: Set Up Security Rules

Replace the default rules with these:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Guests collection - read/write for authenticated users
    match /guests/{document} {
      allow read, write: if request.auth != null;
    }
    
    // RSVP responses - read/write for authenticated users
    match /rsvpResponses/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Notifications - read/write for authenticated users
    match /notifications/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Step 5: Enable Authentication

1. Go to "Authentication" in Firebase Console
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

## Step 6: Update Firebase Configuration

1. Open `firebase.ts` in your project
2. Replace the placeholder values with your actual Firebase config:

```typescript
const firebaseConfig: FirebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## Step 7: Test the Setup

1. Run the app: `npm start`
2. Check that the app connects to Firebase
3. Try adding a guest to test Firestore integration

## Step 8: Set Up Push Notifications (Optional)

1. Go to "Cloud Messaging" in Firebase Console
2. Click "Get started"
3. Follow the setup instructions for Expo
4. Update notification configuration in the app

## Database Collections Structure

### `guests` Collection
```typescript
{
  id: string,
  name: string,
  email: string,
  phone: string,
  invitedTo: EventType[],
  rsvpLink: string,
  rsvpStatus: 'pending' | 'responded' | 'declined',
  rsvpData?: RSVPResponse,
  lastContacted?: Date,
  notes?: string,
  createdAt: Date,
  updatedAt: Date
}
```

### `rsvpResponses` Collection
```typescript
{
  id: string,
  guestId: string,
  name: string,
  email: string,
  phone: string,
  selectedEvents: EventType[],
  guests: number,
  dietary: string,
  message: string,
  submittedAt: Date
}
```

### `notifications` Collection
```typescript
{
  id: string,
  type: 'new_rsvp' | 'reminder' | 'general',
  title: string,
  message: string,
  guestId?: string,
  read: boolean,
  createdAt: Date
}
```

## Troubleshooting

### Common Issues:

1. **Permission Denied**: Check Firestore security rules
2. **Network Error**: Verify Firebase configuration
3. **Authentication Error**: Check if user is logged in
4. **Data Not Syncing**: Check internet connection

### Debug Steps:

1. Check Firebase Console for errors
2. Check browser/app console for error messages
3. Verify Firebase configuration is correct
4. Test with simple read/write operations first

## Production Considerations

1. **Security Rules**: Update rules for production use
2. **Authentication**: Implement proper user authentication
3. **Data Validation**: Add server-side validation
4. **Backup**: Set up regular data backups
5. **Monitoring**: Enable Firebase monitoring and alerts

## Support

If you encounter issues:
1. Check the Firebase Console for error logs
2. Review the app console for error messages
3. Verify all configuration steps were completed
4. Test with a simple Firebase operation first
