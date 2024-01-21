import { createContext, useEffect, useState } from "react";
import { account } from "../config/appwrite";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import Loader from "../components/Loader";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (user) => {
        try {
            await account.createEmailSession(user.email, user.password);
            let res = await checkUser();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);
        setLoading(false);
        navigate("/");
    }

    const checkUser = async () => {
        try {
            const res = await account.get("current");
            console.log(res);
            setUser(res);
            setLoading(false);
            return res;
        } catch (error) {
            setUser(null);
            setLoading(false);
        }
    }

    const signUp = async (user) => {
        try {
            await account.create(ID.unique(), user.email, user.password, user.name);
            let session = await account.createEmailSession(user.email, user.password);
            let pref = await account.updatePrefs({
                type: "user"
            })
            let link = await account.createVerification(`${import.meta.env.VITE_APPWRITE_URL}verify`);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    useEffect(() => {
        checkUser();
    }, []);

    const contextData = {
        user,
        handleLogin: login,
        handleLogout: logout,
        handleSignUp: signUp,
        refresh: checkUser,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <div className="flex items-center justify-center h-screen">
                <Loader />
            </div> : children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };