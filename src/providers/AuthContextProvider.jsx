import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from '../../firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const signInUser = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser)
        })

        // stop observing while unmounting 

        return unsubscribe

    }, [])



    const authInfo = {
        createUser,
        signInUser,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;