import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fireBaseConfig/firebase";

export const AuthContent = createContext(null)
const AuthData = ({children}) => {
    const [user,setUser] = useState(null);
    const googleProvider1 = new GoogleAuthProvider()
    const gitProvider1 = new GithubAuthProvider()
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            if(currentUser){
                setUser(currentUser)
            }
            return ()=>{
                unSubscribe();
            }
        })
    },[])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider1)
    }
    const gitLogin = () =>{
        return signInWithPopup(auth,gitProvider1)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const data = {
        user,createUser,loginUser,logOut,googleLogin,gitLogin
    }
    return (
        <AuthContent.Provider value={data}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthData;