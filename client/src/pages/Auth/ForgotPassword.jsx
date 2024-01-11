import { account } from "../../config/appwrite"
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [mailSent, setMailSent] = useState(false);

    const handleForgotPassword = async (e) => {
        if (email === "") {
            toast.error("Please enter your email");
            return;
        }
        e.preventDefault();
        try {
            const res = await account.createRecovery(email, 'http://localhost:5173/reset-password');
            console.log(res);
            toast.success("Recovery email sent!");
            setMailSent(true);
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error.message);
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="lg:w-[28rem] md:w-[28rem] w-[90%] border-gray-700 border p-8 rounded-3xl bg-[#0c0c0c]">
                <div className="flex items-center justify-center">
                    <img src="/images/logo.svg" alt="logo" className="h-14 mt-1 w-auto" height={40} width={150} />
                </div>
                <div>
                    <h1 className="text-center text-xl font-semibold leading-normal py-6">
                        Forgot Password
                    </h1>
                </div>

                <form onSubmit={handleForgotPassword} className="mb-5">
                    <div className="flex flex-col space-y-2">
                        <label className="text-lg">E-mail <span className="text-red-500">*</span></label>
                        <input
                            className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200 w-full"
                            type="email"
                            name="email"
                            placeholder="abc@tesla.co.in"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <button type="submit" className="py-2.5 px-5 rounded-xl bg-sky-500 hover:bg-sky-600 focus:bg-gray-600 text-white font-bold w-full mt-6">
                        Submit
                    </button>
                </form>

                {
                    mailSent ?
                        <p className="text-center mt-8">
                            Mail sent! <br />
                            If you don't receive the email within a few minutes, <br />please check your spam folder.
                        </p>
                        : null
                }

                <Link to="/signin" className="m-auto pt-0">
                    <p className="text-sky-500 text-center">Sign In</p>
                </Link>
            </div>
        </div>
    )
}

export default ForgotPassword