  import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import AuthRoute from '../assets/components/authRoute';

  const firebaseConfig = {
    apiKey: "AIzaSyDvIaLKuVC7K-BJN6zEj-sHPb1dCT4i_8E",
  authDomain: "olxproject-be015.firebaseapp.com",
  projectId: "olxproject-be015",
  storageBucket: "olxproject-be015.firebasestorage.app",
  messagingSenderId: "55429877957",
  appId: "1:55429877957:web:8ce9ad64b05d285ed5e0ac"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();
  export const db = getFirestore(app);