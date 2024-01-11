import { account } from "../../config/appwrite";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Verify = () => {
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get('secret');
    const userId = urlParams.get('userId');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyAccount = async () => {
            try {
                const res = await account.updateVerification(userId, secret);
                console.log("Verification successful", res);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Verification failed:", error.message);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (!isAuthenticated) verifyAccount();
        else navigate("/signin");

    }, [userId, secret, navigate, isAuthenticated]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : isAuthenticated ? (
                <div>
                    <p>Verification successful</p>
                    <Link to="/signin">Login</Link>
                </div>
            ) : (
                <div>
                    <h1>Verification failed</h1>
                    {error && <p>Error: {error}</p>}
                </div>
            )}
        </div>
    );
};

export default Verify;
