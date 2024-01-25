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
            {loading ? <div className="flex flex-col gap-16 items-center justify-center h-screen">
                <div className="flex gap-3 items-center">
                    <img src="apple-icon.png" alt="Logo" className="w-16" />
                    <div className="flex divide-x divide-gray-600 gap-3">
                        <p className="text-white text-xl font-semibold">NIT,<br /> Patna</p>
                        <p className="text-xl font-semibold text-sky-500 pl-2">ALUMNI<br /> ASSOCIATION</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Loader /> <span className="font-medium text-white pl-3 text-lg">Loading...</span>
                </div>
            </div> : children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };