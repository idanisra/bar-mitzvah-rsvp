# Bar Mitzvah - RSVP System

Advanced RSVP system for Bar Mitzvah with full Hebrew interface and mobile device support.

## Features

- ✅ **Public RSVP Form** - Guests can fill in details and send participation confirmation
- ✅ **Admin Dashboard** - View all responses with statistics
- ✅ **Responsive Design** - Works great on computer and phone
- ✅ **Full Hebrew Interface** - All texts in Hebrew with RTL support
- ✅ **Firebase Backend** - Data storage and management
- ✅ **Edit Responses** - Ability to edit existing responses

## Installation and Setup

### 1. Firebase Installation

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a Web app
4. Copy the configuration details

### 2. Firebase Configuration

Update the `src/firebase.js` file with your details:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. Firestore Setup

1. In Firebase Console, go to Firestore Database
2. Create a new database
3. Set basic security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvps/{document} {
      allow read, write: if true; // For demo purposes - change later
    }
  }
}
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Project

```bash
npm run dev
```

The app will open at: `http://localhost:5173`

## Usage

### Public Participation Form
- Address: `http://localhost:5173/`
- Guests fill in details and send participation confirmation
- Data is saved to Firebase

### Admin Dashboard
- Address: `http://localhost:5173/admin`
- View all responses
- Statistics on number of participants
- Edit existing responses

## Publishing to Website

### Firebase Hosting (Recommended)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize the project:
```bash
firebase init hosting
```

4. Build the project:
```bash
npm run build
```

5. Deploy:
```bash
firebase deploy
```

### Wix (Alternative)

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Wix
3. Configure Firebase configuration

## Push Notifications (Optional)

To enable push notifications when a new response is received:

1. Add Firebase Cloud Messaging
2. Configure Service Worker
3. Add code for sending notifications

## Security

- Change Firestore security rules before publishing
- Add user authentication to the dashboard
- Limit access to sensitive data

## Support

For questions or issues, contact us or open an issue on GitHub.

---

**Congratulations on the Bar Mitzvah! 🎉**
