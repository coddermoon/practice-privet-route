import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivetRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    if (loading) {
        return <h3 className='text-2xl font-bold text-center text-green-500'>Loading....</h3>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRoutes;