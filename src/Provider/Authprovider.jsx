import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
export const Authprovider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
   
    const createUser = (email, passsword) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,passsword);
    }

    const signIn = (email,passsword) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,passsword);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
   
   
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;