import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fireBaseConfig/firebase";

export const AuthContent = createContext(null)
const AuthData = ({children}) => {
    const [user,setUser] = useState(null);
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
    const logOut = () =>{
        return signOut(auth)
    }
    const data = {
        user,createUser,loginUser,logOut
    }
    return (
        <AuthContent.Provider value={data}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthData;