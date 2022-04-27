import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
   apiKey: "AIzaSyBuqo2hk9jsgEmrzqN9nAQ_HpraLUA2Kio",
   authDomain: "disney-plus-clone-2f023.firebaseapp.com",
   projectId: "disney-plus-clone-2f023",
   storageBucket: "disney-plus-clone-2f023.appspot.com",
   messagingSenderId: "44240808080",
   appId: "1:44240808080:web:1db186333641e704349015",
   measurementId: "G-HR44CPYEWR"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage};
export default db;
