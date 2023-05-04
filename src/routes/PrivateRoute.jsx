import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthContextProvider';
import { Navigate } from 'react-router-dom';

import { Roller } from 'react-awesome-spinners'



const PrivateRoute = ({children}) => {
    
    const {user, loader} = useContext(AuthContext)

    if(loader){
        return <div className='h-[50vh] justify-center flex items-center'><Roller></Roller></div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;