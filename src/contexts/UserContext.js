import React, { createContext } from 'react';

export const AuthContext= createContext()

const UserContext = ({children}) => {
    const user = {DisplayName:'akash'}
    const info ={user}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;