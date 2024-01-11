import { account } from "../../config/appwrite"
import { toast } from "react-toastify"
import { useState } from "react"
import { formatDateTime } from "../../utils"

const VerifyEmail = () => {
    const [mailsent, setMailsent] = useState({
        sent: false,
        createdAt: null,
        expires: null,
    });

    const sendVerificationMail = async () => {
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
        }
    }

    return (
        <div className="pt-28 min-h-screen">
            <div className="flex items-center justify-center flex-col h-[60vh] gap-10">
                <h2 className="text-3xl font-bold text-sky-500 text-center">
                    Verify Email
                </h2>

                <button onClick={sendVerificationMail} className="bg-sky-500 hover:bg-sky-600 active:bg-gray-500 text-gray-900 font-medium px-6 py-2.5 rounded-2xl">
                    Send Verification Link
                </button>


                {mailsent.sent && <div className="text-center">
                    <p className="text-white">
                        {`Verification link sent to your Email Id. at ${formatDateTime(mailsent.createdAt)}`}
                    </p>
                    <p>
                        Expires on : <span className="text-rose-500">
                            {formatDateTime(mailsent.expires)}
                        </span>
                    </p>
                </div>}
            </div>
        </div>
    )
}

export default VerifyEmail