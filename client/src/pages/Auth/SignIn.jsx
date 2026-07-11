import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";
import { useForm } from 'react-hook-form';

const Login = () => {
    const { handleLogin, user } = useAuth();
    const navigate = useNavigate();

    const { register, reset, handleSubmit, formState: { errors } } = useForm({ trim: true });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const Login = async (data) => {
        setLoading(true);
        try {
            await handleLogin({
                email: data.email,
                password: data.password,
            });
            toast.success("Logged in successfully");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
            reset();
        }
    }

    useEffect(() => {
        if (user && user.emailVerification) {
            navigate("/dashboard");
        }
        else if (user && !user.emailVerification) {
            navigate("/verify-email");
        }
    }, [])

    return (
        <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_26rem),linear-gradient(180deg,#f8fbff,#eef4f8)] px-4 py-10 flex items-center justify-center">
            <Meta title="Login | Alumni NITP" />
            <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative hidden min-h-[38rem] overflow-hidden bg-slate-900 lg:block">
                    <img src="/images/homePageImg.jpg" alt="NIT Patna campus" className="absolute inset-0 h-full w-full object-cover opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-950/85 via-slate-900/52 to-slate-950/75" />
                    <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
                        <Link to="/" className="w-fit">
                            <img src="logo.jfif" height={200} width={200} alt="logo" className="h-16 w-16 rounded-full border border-white/30 shadow-lg" />
                        </Link>
                        <div>
                            <p className="mb-4 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">NIT Patna Alumni Cell</p>
                            <h1 className="max-w-md text-5xl font-bold leading-tight">Reconnect with your NITP network.</h1>
                            <p className="mt-5 max-w-md text-base leading-7 text-slate-100">Access alumni profiles, opportunities, stories, and updates from the community.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
                <div className="flex items-center justify-center lg:hidden">
                    <img src="logo.jfif" height={200} width={200} alt="logo" className="h-16 w-16 rounded-full" />
                </div>
                <div className="mb-8 text-center lg:text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Welcome back</p>
                    <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950">
                        Sign in to your account
                    </h1>
                    <p className="mt-2 text-slate-600">Continue to the NITP Alumni Portal.</p>
                </div>

                <form onSubmit={handleSubmit(Login)} className="flex flex-col gap-4 px-3 w-full">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-semibold text-slate-700">E-mail <span className="text-red-500">*</span></label>
                        <input
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:bg-white"
                            type="email"
                            name="email"
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
                    <div className="flex relative flex-col space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Password <span className="text-red-500">*</span></label>
                        <input
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 pr-12 text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:bg-white"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            autoComplete="password"
                            placeholder="Enter Password"
                            {
                            ...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password should be at least 6 characters"
                                },
                                maxLength: {
                                    value: 32,
                                    message: "Password should not be greater than 32 characters"
                                }
                            })
                            }
                        />
                        {errors.password && <p className="text-rose-500">{errors.password.message}</p>}

                        <div className="absolute top-10 right-4">
                            {showPassword ? (
                                <FaEye
                                    size={22}
                                    className="text-slate-500 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                />
                            ) : (
                                <FaEyeSlash
                                    size={22}
                                    className="text-slate-500 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                />
                            )}
                        </div>
                    </div>

                    <button disabled={loading} type="submit" className="mt-3 rounded-2xl bg-sky-700 px-5 py-3 font-bold text-white shadow-lg shadow-sky-900/10 transition hover:bg-sky-800 disabled:bg-slate-400">
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <p className="text-center text-slate-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-sky-700">
                            <button className="text-sky-700 font-semibold">
                                SignUp
                            </button>
                        </Link>
                    </p>

                    <div className="flex items-center justify-center gap-2">
                        <Link to="/forgot-password" className="pt-0 -mt-3">
                            <p className="text-sky-700 font-medium">Forgot Password?</p>
                        </Link>

                        <Link to="/" className="flex items-center justify-center -mt-3">
                            <button className="text-rose-600 font-medium">
                                Skip for now
                            </button>
                        </Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
