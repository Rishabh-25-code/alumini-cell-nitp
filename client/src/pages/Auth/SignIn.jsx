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
        <div className="flex items-center justify-center h-screen w-full">
            <Meta title="Login | Alumni NITP" />
            <div className="lg:w-[28rem] md:w-[28rem] sm:w-[90%] w-[95%] border-gray-700 border py-8 lg:px-8 md:px-7 px-4 rounded-3xl bg-[#050505]">
                <div className="flex items-center justify-center">
                    <img src="logo.jfif"  height={200} width={200} alt="logo" className="lg:h-20 h-14 lg:w-20 w-14 rounded-full" />
                   
                </div>
                <div>
                    <h1 className="text-center text-xl font-semibold leading-normal py-6">
                        Welcome to <br /><span className="text-sky-500">NITP Alumni Portal!</span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit(Login)} className="flex flex-col gap-4 px-3 w-full">
                    <div className="flex flex-col space-y-2">
                        <label className="text-lg">E-mail <span className="text-red-500">*</span></label>
                        <input
                            className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200 w-full"
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
                        <label className="text-lg">Password <span className="text-red-500">*</span></label>
                        <input
                            className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200"
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
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                />
                            ) : (
                                <FaEyeSlash
                                    size={22}
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                />
                            )}
                        </div>
                    </div>

                    <button disabled={loading} type="submit" className="py-2.5 mt-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:bg-gray-600 focus:bg-gray-600 text-white font-bold">
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-sky-500">
                            <button className="text-sky-500">
                                SignUp
                            </button>
                        </Link>
                    </p>

                    <div className="flex items-center justify-center gap-2">
                        <Link to="/forgot-password" className="pt-0 -mt-3">
                            <p className="text-sky-500">Forgot Password?</p>
                        </Link>

                        <Link to="/" className="flex items-center justify-center -mt-3">
                            <button className="text-rose-500">
                                Skip for now
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;