import React, { createContext } from 'react';

export const authContext = createContext()

const userContext = ({children}) => {
 
    
    return (
        <authContext.Provider value={'hello'}>
           {children}
        </authContext.Provider>
    );
};

export default userContext;