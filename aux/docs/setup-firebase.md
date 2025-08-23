# Firebase Setup Guide - Bar Mitzvah RSVP

## Step 1: Creating a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "צור פרויקט"
3. Give the project a name: `bar-mitzvah-rsvp` (or any other name)
4. Click "Continue"
5. Turn off Google Analytics if not needed (optional)
6. Click "Create project"

## Step 2: Adding a Web App

1. In the new project, click the Web icon (</>) 
2. Give the app a name: `bar-mitzvah-web`
3. Click "Register app"
4. Copy the configuration details (firebaseConfig)

## Step 3: Setting up Firestore Database

1. In the side menu, click "Firestore Database"
2. Click "Create database"
3. Select "Start in test mode" (for demo purposes)
4. Choose a nearby location (e.g., europe-west1)
5. Click "Done"

## Step 4: Updating the Code

1. Open the file `src/firebase.js`
2. Replace the details with your details:

```javascript
const firebaseConfig = {
  apiKey: "your key here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your number",
  appId: "your id"
};
```

## Step 5: Testing

1. Run the project: `npm run dev`
2. Open the website: `http://localhost:5173`
3. Try filling out an RSVP form
4. Check in Firebase Console that the data is saved

## Step 6: Publishing to Website

### Firebase Hosting (Recommended)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize the project:
```bash
firebase init hosting
```
- Select your project
- Public directory: `dist`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

4. Build and deploy:
```bash
npm run build
firebase deploy
```

The website will be available at: `https://your-project-id.web.app`

## Important Notes

- **Security**: Before publishing, change the security rules in Firestore
- **Backup**: Firebase automatically backs up the data
- **Cost**: Firebase is free up to 50,000 reads per month

## Support

If there are issues, check:
1. Firebase details are correct
2. Internet connection
3. Security rules in Firestore
