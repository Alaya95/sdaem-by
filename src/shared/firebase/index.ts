import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCc1HK3bwawt1teYjMIzGVk96xxreTBs6Q",
    authDomain: "sdaem-by.firebaseapp.com",
    projectId: "sdaem-by",
    storageBucket: "sdaem-by.appspot.com",
    messagingSenderId: "465257540687",
    appId: "1:465257540687:web:ced3b88a8eb9d87ab70e3a",
    measurementId: "G-HE9FWLBLH3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;