import React, { createContext } from 'react';

const authContext = createContext()

const userContext = ({children}) => {
    console.log(children)
    return (
        <authContext.Provider value={{name:'akash'}}>
           {children}
        </authContext.Provider>
    );
};

export default userContext;