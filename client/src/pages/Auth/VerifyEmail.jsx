import { account } from "../../config/appwrite"
import { toast } from "react-toastify"
import { useState } from "react"
import { formatDateTime } from "../../utils"
import Meta from "../../components/Meta/Meta"
import useAuth from "../../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"

const VerifyEmail = () => {
    const navigate = useNavigate();
    const [mailsent, setMailsent] = useState({
        sent: false,
        createdAt: null,
        expires: null,
    });

    const { user, handleLogout } = useAuth();
    const [loading, setLoading] = useState(false);

    const sendVerificationMail = async () => {
        setLoading(true);
        try {
            let link = await account.createVerification(`${import.meta.env.VITE_APPWRITE_URL}verify`);
            toast.success("Verification Link sent to your Email ID successfully!");
            setMailsent({
                sent: true,
                createdAt: link.$createdAt,
                expires: link.expire
            });
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="pt-28 min-h-screen">
            <Meta title="Verify Email | Alumni NITP" />
            <div className="flex items-center justify-center flex-col h-[60vh] gap-10">
                <h2 className="text-3xl font-bold text-sky-500 text-center">
                    Verify Email
                </h2>

                {!mailsent.sent && <div className="flex items-center gap-5 flex-col">
                    <p className="max-w-sm text-center">
                        An Email will be sent to your Email ID. Please click on the link in the Email to verify your Email ID.
                    </p>

                    <button disabled={loading} onClick={sendVerificationMail} className="bg-sky-500 disabled:bg-gray-500 hover:bg-sky-600 active:bg-gray-500 text-gray-900 font-medium px-6 py-2.5 rounded-2xl">
                        {
                            loading ? "Sending Email..." : "Send Verification Email"
                        }
                    </button>
                </div>}

                {mailsent.sent && <div className="text-center">
                    <p className="text-white">
                        Verification link sent to your Email Id. at <span className="text-green-500 font-medium">
                            {formatDateTime(mailsent.createdAt)}
                        </span>
                    </p>
                    <p>
                        Expires on : <span className="text-rose-500 font-medium">
                            {formatDateTime(mailsent.expires)}
                        </span>
                    </p>
                </div>}

                <div className="flex flex-col gap-2">
                    {
                        user?.emailVerified && <div>
                            <p className="text-white text-center">
                                Your Email ID is already verified. <Link to="/dashboard"><button className="text-sky-500 font-medium">Go to Dashboard.</button></Link>
                            </p>
                        </div>
                    }

                    {
                        !user?.emailVerified && <div>
                            <p className="text-white text-center">
                                I will verify my Email ID later. <Link to="/"><button className="text-sky-500 font-medium">
                                    Go to Home.
                                </button></Link>
                            </p>
                        </div>
                    }

                    {
                        !user?.emailVerified && <div>
                            <p className="text-white text-center">
                                Login with a different Email. <button onClick={() => {
                                    handleLogout();
                                    navigate("/signin");
                                }} className="text-sky-500 font-medium">
                                    Logout.
                                </button>
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail