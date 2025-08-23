import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
// You'll need to replace these with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCFht78Z1rKi3bnQQ4yIPUo9nDJkDd3mM8",
  authDomain: "bar-mitzvah-rsvp.firebaseapp.com",
  projectId: "bar-mitzvah-rsvp",
  storageBucket: "bar-mitzvah-rsvp.firebasestorage.app",
  messagingSenderId: "933196312029",
  appId: "1:933196312029:web:3469b17773acd20883da34",
  measurementId: "G-8W7H5GJ4ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;
