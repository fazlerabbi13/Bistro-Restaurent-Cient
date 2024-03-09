import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
const AuthContext = createContext();

const auth = getAuth(app);
export const Authprovider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;