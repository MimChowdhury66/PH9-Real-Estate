import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



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

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)

    }
    // logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const allValues = { createUser, signIn, googleLogin, githubLogin, logout, user };

    return (

        <AuthContext.Provider value={allValues}>


            {children}


        </AuthContext.Provider>
    );
};

export default FirebaseProvider;