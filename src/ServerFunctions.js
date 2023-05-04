// run: npm install firebase
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var db = getFirestore(app);

export default async function signUp(name, email, password) {
  try {
    var docRef = doc(db, "users");
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

 export default async function signIn(email,password){
   try{
   const docRef = doc(db, 'users', email);
    const docSnapshot = await getDoc(docRef);
    if(docSnapshot.exists()){
     const token = Date.now();
      setDoc(docRef, {
        'token':token,
      },{merge:true});
      return  {'runState':true,'token':token};
    }else{
     return  {'runState':false};
    }
   }catch(e){
     console.log(e);
     return {'runState':false};
   }
   }
