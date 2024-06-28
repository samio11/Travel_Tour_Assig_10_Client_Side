import React, { useContext } from 'react';
import { AuthContent } from './AuthFile/AuthData';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContent)
    if(user)
        {
            return children;
        }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;