import React, { createContext, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const authInfo = {
        createUser,
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