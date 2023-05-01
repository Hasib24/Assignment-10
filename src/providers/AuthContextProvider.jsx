import React, { createContext, useContext } from 'react';


export const AuthContext = createContext(null)
const AuthContextProvider = ({children}) => {



    const authInfo = {
        user: true
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;