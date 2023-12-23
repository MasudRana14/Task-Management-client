import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);
    const [loading, setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();
    
    // Create User 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // SignIn 
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google SignIn 
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Log Out
    const logOut = ()=>{
        return signOut(auth);
    } 

    // updateUser Profile 
    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        });
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
           return unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        createUser,
        loading,
        googleSignIn,
        logOut,
        signIn,
        updateUserProfile
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;