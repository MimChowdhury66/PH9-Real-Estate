import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // signIn user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    // google logIn
    const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)

}

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const allValues = { createUser, signIn ,googleLogin};
    return (

        <AuthContext.Provider value={allValues}>


            {children}


        </AuthContext.Provider>
    );
};

export default FirebaseProvider;