
import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBtPYGm-1iHN-E86FvDwCs1k5uAFt4uzYI",
    authDomain: "app-libros-18858.firebaseapp.com",
    projectId: "app-libros-18858",
    storageBucket: "app-libros-18858.appspot.com",
    messagingSenderId: "907666114001",
    appId: "1:907666114001:web:3b88f24260ac80a1ee8cf0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = () => {
    return firebase.firestore(firebaseApp);
}
