import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";
import { useForm } from 'react-hook-form';

const Register = () => {
    const { handleSignUp } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    const [accAlreadyExist, setAccAlreadyExists] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match.");
            return reset();
        }

        try {
            await handleSignUp({
                email: data.email,
                password: data.password,
                name: data.name
            });
            setIsAccountCreated(true);
            toast.success("Registered successfully.");
        } catch (error) {
            if (error.message === "A user with the same id, email, or phone already exists in this project.") {
                setAccAlreadyExists(true);
            }
            toast.error(error.message);
        }
        finally {
            setLoading(false);
            reset();
        }
    };

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_26rem),linear-gradient(180deg,#f8fbff,#eef4f8)] px-4 py-10 flex justify-center items-center">
            <Meta title="Sign Up | Alumni NITP" />
            {
                accAlreadyExist &&
                <div className="flex items-center justify-center flex-col max-w-lg text-center">
                    <div className="flex items-center justify-center">
                        <img src="/images/logo.svg" alt="logo" className="h-14 mt-1 w-auto" height={40} width={150} />
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
                    <img src="/images/logo.svg" alt="logo" className="h-14 mt-1 w-auto" height={40} width={150} />
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
                !accAlreadyExist && <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative hidden min-h-[40rem] overflow-hidden bg-slate-900 lg:block">
                        <img src="/images/homePageImg.jpg" alt="NIT Patna campus" className="absolute inset-0 h-full w-full object-cover opacity-75" />
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/85 via-slate-900/52 to-slate-950/75" />
                        <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
                            <Link to="/" className="w-fit">
                                <img src="logo.jfif" alt="logo" className="h-16 w-16 rounded-full border border-white/30 shadow-lg" />
                            </Link>
                            <div>
                                <p className="mb-4 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">Join the alumni network</p>
                                <h1 className="max-w-md text-5xl font-bold leading-tight">Create your NITP alumni account.</h1>
                                <p className="mt-5 max-w-md text-base leading-7 text-slate-100">Share your journey, discover opportunities, and stay connected with the institute community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-10 sm:px-10 lg:px-12">
                    <h1 className="text-3xl font-bold mb-2 px-3 text-slate-950">Sign Up</h1>
                    <p className="mb-6 px-3 text-slate-600">Create an account to access alumni services.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 px-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                            <input
                                autoComplete="email"
                                autoFocus={true}
                                type="email"
                                id="email"
                                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:bg-white"
                                placeholder="abc@tesla.co.in"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-rose-500">{errors.email.message}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
                            <input
                                autoComplete="name"
                                type="text"
                                id="name"
                                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:bg-white"
                                placeholder="John Doe"
                                {
                                ...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Name should be at least 3 characters"
                                    },
                                })
                                }
                            />
                            {
                                errors.name && <p className="text-rose-500">{errors.name.message}</p>
                            }
                        </div>

                        <div className="flex relative flex-col gap-1">
                            <label htmlFor="password" className="text-sm font-semibold text-slate-700">Password</label>
                            <input
                                autoComplete="password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 pr-12 text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:bg-white"
                                placeholder="Enter Password"
                                {
                                ...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password should be at least 8 characters"
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: "Password should not be greater than 32 characters"
                                    }
                                })
                                }
                            />
                            {
                                errors.password && <p className="text-rose-500">{errors.password.message}</p>
                            }
                            <div className="absolute top-10 right-4">
                                {showPassword ? (
                                    <FaEye
                                        size={22}
                                        className="text-slate-500 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        size={22}
                                        className="text-slate-500 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="flex relative flex-col gap-1">
                            <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700">Confirm Password</label>
                            <input
                                autoComplete="password"
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 pr-12 text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:bg-white"
                                placeholder="Confirm Password"
                                {
                                ...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password should be at least 8 characters"
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: "Password should not be greater than 32 characters"
                                    }
                                })
                                }
                            />
                            {
                                errors.confirmPassword && <p className="text-rose-500">{errors.confirmPassword.message}</p>
                            }
                            <div className="absolute top-10 right-4">
                                {showConfirmPassword ? (
                                    <FaEye
                                        size={22}
                                        className="text-slate-500 cursor-pointer"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        size={22}
                                        className="text-slate-500 cursor-pointer"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                )}
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            className="mt-3 rounded-2xl bg-sky-700 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-900/10 transition hover:bg-sky-800 disabled:bg-slate-400"
                            type="submit"
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </button>

                        <p className="text-center mt-5 text-slate-600">
                            Already have an account?{" "}
                            <Link to="/signin" style={{ textDecoration: "none", color: "skyblue" }} className="text-sky-500">
                                Login
                            </Link>
                        </p>

                        <Link to="/" className="flex items-center justify-center -mt-3">
                            <button className="text-rose-600 font-medium">
                                Skip for now
                            </button>
                        </Link>
                    </form>
                    </div>
                </div>}
        </div>
    );
};

export default Register;
