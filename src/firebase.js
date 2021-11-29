import firebaseConfig from "./authServices/firebase/firebaseConfig";
import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider } from 'firebase/auth'; 
import {getFirestore} from 'firebase/firestore';

const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

export {auth,provider} ;
export default db;