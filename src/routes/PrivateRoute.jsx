import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthContextProvider';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({children}) => {
    
    const {user, loader} = useContext(AuthContext)

    if(loader){
        return <div>loading...</div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;