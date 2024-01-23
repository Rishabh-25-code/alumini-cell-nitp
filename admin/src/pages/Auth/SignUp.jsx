import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";

const Register = () => {
    const { handleSignUp, user } = useAuth();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    const [accAlreadyExist, setAccAlreadyExists] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            await handleSignUp({
                email,
                password,
                name,
            });
            resetForm();
            setIsAccountCreated(true);
            toast.success("Registered successfully");
        } catch (error) {
            if (error.message === "A user with the same id, email, or phone already exists in this project.") {
                setAccAlreadyExists(true);
                resetForm();
            }
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
        setPassword("");
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Meta title="Sign Up | Alumni NITP" />
            {
                accAlreadyExist &&
                <div className="flex items-center justify-center flex-col max-w-lg text-center">
                    <div className="flex items-center justify-center">
                    <img src="/images/logo512.png" alt="logo" height={200} width={200}  className="lg:h-20 h-14 lg:w-20 w-14 rounded-full"  />

                    </div>

                    <p className="text-white text-lg pt-6">
                        A user with the provided email id already exists.
                    </p>

                    <p className="py-5">
                        Create account with new <Link onClick={() => {
                            resetForm();
                            setAccAlreadyExists(false);
                        }} to="/signup">
                            <span className="text-sky-500">
                                Email Id
                            </span>.
                        </Link>
                    </p>

                    <Link to="/forgot-password">
                        <p className="text-sky-500">
                            Forgot Password ?
                        </p>
                    </Link>
                </div>
            }

            {isAccountCreated ?
                <div className="flex items-center justify-center flex-col max-w-lg">
                    <img src="/public/images/logo512.png" alt="logo" height={200} width={200}  className="lg:h-20 h-14 lg:w-20 w-14 rounded-full"  />
                    <h3 className="text-xl font-semibold pt-5">Alumni Website NITP</h3>
                    <h1 className="text-3xl font-bold px-3 text-sky-500 pt-10">Account Created!</h1>
                    <p className="text-center mt-1">
                        Verification link has been sent to your email.
                        <br />Please verify your email to login.
                    </p>

                    <p className="text-center mt-1">
                        If you don't receive the email within a few minutes, <br />please check your spam folder.
                    </p>

                    <p className="text-center mt-4">
                        If already verified, click on the button below to login.
                    </p>

                    <Link to="/signin" className="mt-5">
                        <button className="text-white bg-sky-500 hover:bg-sky-600 focus:bg-gray-600 rounded-xl py-2.5 px-12">
                            Login
                        </button>
                    </Link>
                </div>
                :
                !accAlreadyExist && <div className="lg:w-[28rem] md:w-[28rem] w-[90%] border-gray-700 border p-8 rounded-3xl bg-[#0c0c0c]">
                    <div className="flex items-center justify-center">
                    <img src="/public/images/logo512.png" alt="logo" height={200} width={200}  className="lg:h-20 h-14 lg:w-20 w-14 rounded-full"  />
                        
                    </div>
                    <h1 className="text-3xl font-bold mb-5 px-3">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 px-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input
                                autoComplete="email"
                                autoFocus={true}
                                required
                                type="email"
                                id="email"
                                className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <input
                                autoComplete="name"
                                required
                                type="text"
                                id="name"
                                className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex relative flex-col gap-1">
                            <label htmlFor="password">Password</label>
                            <input
                                autoComplete="password"
                                required
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="absolute bottom-3 right-4">
                                {showPassword ? (
                                    <FaEye
                                        size={22}
                                        className="text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        size={22}
                                        className="text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="flex relative flex-col gap-1">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                required
                                autoComplete="password"
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="absolute bottom-3 right-4">
                                {showConfirmPassword ? (
                                    <FaEye
                                        size={22}
                                        className="text-gray-400 cursor-pointer"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        size={22}
                                        className="text-gray-400 cursor-pointer"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                )}
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            className="py-2.5 mt-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-600 focus:bg-gray-600 text-white font-semibold"
                            type="submit"
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </button>

                        <p className="text-center mt-5">
                            Already have an account?{" "}
                            <Link to="/signin" style={{ textDecoration: "none", color: "skyblue" }} className="text-sky-500">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>}
        </div>
    );
};

export default Register;