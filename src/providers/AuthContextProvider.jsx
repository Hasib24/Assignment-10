import React, { createContext } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthContextProvider = ({children}) => {
    
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const authInfo = {
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;