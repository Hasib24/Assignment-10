import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
        .catch(error => console.log(error))
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
        logOut,
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