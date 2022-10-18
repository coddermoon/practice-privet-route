import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext= createContext()

const auth = getAuth(app)
const UserContext = ({children}) => {
  const [user,setUser]= useState([])

//   create user

const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// login

const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
// handle signout 
const handleSignOut = ()=>{
return signOut(auth)
}
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
setUser(currentUser)
})
return ()=>{
    unsubscribe()
}
},[])
console.log(user)
    const authInfo ={user,createUser,loginUser,handleSignOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;