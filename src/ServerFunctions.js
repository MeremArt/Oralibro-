import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function signUp(name, email, password) {
  try {
    const docRef = doc(db, "users", email);
    await setDoc(docRef, {
      name: name,
      email: email,
      password: password,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function signIn(email, password) {
  try {
    const docRef = doc(db, "users", email);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const token = Date.now();
      await setDoc(
        docRef,
        {
          token: token,
        },
        { merge: true }
      );
      return { runState: true, token: token };
    } else {
      return { runState: false };
    }
  } catch (e) {
    console.log(e);
    return { runState: false };
  }
}

export async function signInWithGoogle(tokenId) {
  // Implement the logic to handle sign-in with Google
  // Send the tokenId to your server for verification and user authentication
  try {
    // Example code for handling the sign-in with Google using tokenId
    // You can replace this with your actual implementation
    const docRef = doc(db, "users", "googleUser");
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const token = Date.now();
      await setDoc(
        docRef,
        {
          token: token,
        },
        { merge: true }
      );
      return { runState: true, token: token };
    } else {
      return { runState: false };
    }
  } catch (e) {
    console.log(e);
    return { runState: false };
  }
}
