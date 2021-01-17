import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBnFyhEkyY7tyHGbBV5X_OvlIKZCFkMUwo",
        authDomain: "crown-db-19d88.firebaseapp.com",
        projectId: "crown-db-19d88",
        storageBucket: "crown-db-19d88.appspot.com",
        messagingSenderId: "396735184202",
        appId: "1:396735184202:web:b117cc1720952c67f9d5b3",
        measurementId: "G-3WRSGQHRV0"
      
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
                
            })

        } catch (error){
            console.log('error creating user',error.message);

        }
    }
    return userRef;
    

};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;