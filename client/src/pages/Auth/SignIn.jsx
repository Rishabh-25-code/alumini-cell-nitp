import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { handleLogin, user } = useAuth();
    const navigate = useNavigate();
    document.title = "Tesla NIT Patna | AdminLogin";

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        showPassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const Login = async (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            try {
                await handleLogin({
                    email: formData.email,
                    password: formData.password,
                });
                toast.success("Logged in successfully");
                navigate("/dashboard");
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            alert("Please fill the form");
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
            <div className="lg:w-[28rem] md:w-[28rem] w-[90%] border-gray-700 border p-8 rounded-3xl bg-[#0c0c0c]">
                <div className="flex items-center justify-center">
                    <img src="/images/logo.svg" alt="logo" className="h-14 mt-1 w-auto" height={40} width={150} />
                </div>
                <div>
                    <h1 className="text-center text-xl font-semibold leading-normal py-6">
                        Welcome to <br /><span className="text-sky-500">NITP Alumni Portal!</span>
                    </h1>
                </div>

                <form onSubmit={Login} className="flex flex-col gap-6 px-3 w-full">
                    <div className="flex flex-col space-y-2">
                        <label className="text-lg">E-mail <span className="text-red-500">*</span></label>
                        <input
                            className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200 w-full"
                            type="email"
                            name="email"
                            placeholder="abc@tesla.co.in"
                            required
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className="flex relative flex-col space-y-2">
                        <label className="text-lg">Password <span className="text-red-500">*</span></label>
                        <input
                            className="py-2.5 px-5 rounded-xl bg-[#1b1b1b] text-gray-200"
                            type={formData.showPassword ? "text" : "password"}
                            name="password"
                            autoComplete="password"
                            placeholder="Enter Password"
                            required
                            maxLength={16}
                            minLength={8}
                            onChange={handleChange}
                            value={formData.password}
                        />
                        <div className="absolute bottom-3 right-4">
                            {formData.showPassword ? (
                                <FaEye
                                    size={22}
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => setFormData((prev) => {
                                        return {
                                            ...prev,
                                            showPassword: !prev.showPassword,
                                        }
                                    })}
                                />
                            ) : (
                                <FaEyeSlash
                                    size={22}
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => setFormData((prev) => {
                                        return {
                                            ...prev,
                                            showPassword: !prev.showPassword,
                                        }
                                    })}
                                />
                            )}
                        </div>
                    </div>

                    <button type="submit" className="py-2.5 mt-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-600 focus:bg-gray-600 text-white font-bold">
                        Login
                    </button>

                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-sky-500">
                            <button className="text-sky-500">
                                SignUp
                            </button>
                        </Link>
                    </p>

                    <Link to="/forgot-password" className="m-auto pt-0 -mt-3">
                        <p className="text-sky-500">Forgot Password?</p>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;