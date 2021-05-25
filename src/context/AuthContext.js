import React, { createContext, useEffect, useState } from 'react'
import firebase from '../firebase/firebase.utils'

export const FirebaseAuthContext = createContext()

const AuthContext = (props) => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        firebase.firebaseAuth.onAuthStateChanged((user)=>{
            //console.log("userr", user)
            setCurrentUser(user)
        })
    }, [])
    return (
        <FirebaseAuthContext.Provider value={{currentUser}}>
            {props.children}
        </FirebaseAuthContext.Provider>
    )
}

export default AuthContext
