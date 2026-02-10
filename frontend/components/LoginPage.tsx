"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { api } from "@/lib/api";
import { motion } from "framer-motion";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const data = await api.post("/auth/login", { email, password });

            // Store token
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify({ email: data.email, fullName: data.fullName }));

            // Redirect (simple hard reload to Dashboard for now)
            window.location.href = "/dashboard";

        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen w-full bg-white">

            {/* Left Column: Form */}
            <div className="w-full lg:w-[60%] flex flex-col justify-center items-center p-8 lg:p-16 relative">

                {/* Logo Top Left */}
                <div className="absolute top-8 left-8 lg:left-12">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-[#292D34]">ClickUp</span>
                    </Link>
                </div>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-4xl font-black text-[#292D34] mb-3 tracking-tight">
                            Welcome back!
                        </h1>
                        <p className="text-gray-500">
                            The productivity platform for all your work.
                        </p>
                        {error && (
                            <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm font-bold rounded-lg border border-red-100">
                                {error}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="email">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-[#7B68EE] focus:ring-4 focus:ring-[#7B68EE]/10 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="password">Password</label>
                                    <Link href="#" className="text-xs font-bold text-[#7B68EE] hover:underline">Forgot?</Link>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full h-11 pl-10 pr-10 rounded-lg border border-gray-300 focus:border-[#7B68EE] focus:ring-4 focus:ring-[#7B68EE]/10 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full h-12 text-base bg-[#7B68EE] hover:bg-[#6653d6] text-white font-bold rounded-xl shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.01]" disabled={isLoading}>
                            {isLoading ? "Logging in..." : "Log In"}
                        </Button>

                        <div className="relative flex items-center gap-4 py-2">
                            <div className="h-px bg-gray-200 flex-1" />
                            <span className="text-xs font-bold text-gray-400 uppercase">Or</span>
                            <div className="h-px bg-gray-200 flex-1" />
                        </div>

                        <button type="button" className="w-full h-12 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold rounded-xl flex items-center justify-center gap-3 transition-colors">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            Login with Google
                        </button>

                        <button type="button" className="w-full h-12 bg-[#292D34] hover:bg-black text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-colors">
                            <span className="font-bold">SSO</span>
                            Login with SSO
                        </button>

                    </form>

                    <div className="text-center pt-4">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link href="signup" className="font-bold text-[#7B68EE] hover:underline">
                                Sign up for free
                            </Link>
                        </p>
                    </div>

                </div>
            </div>

            {/* Right Column: Visual (Hidden on mobile) */}
            <div className="hidden lg:flex w-[40%] bg-[#F9F9F9] relative overflow-hidden flex-col justify-center items-center p-12 text-center">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-full h-full">
                    <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-pink-200/40 to-orange-200/40 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-sm">
                    {/* Testimonial Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-8"
                    >
                        <div className="flex gap-1 mb-6 justify-center">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-5 h-5 text-[#FFD700] fill-current">★</div>)}
                        </div>
                        <h3 className="text-xl font-bold text-[#292D34] mb-4 leading-relaxed">
                            "ClickUp has completely transformed how we work. It's the only app we use now."
                        </h3>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-bold text-[#292D34]">Rizwan Zahid</div>
                                <div className="text-xs text-gray-500 font-medium">Head of Product, TechFlow</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex justify-center items-center gap-8 opacity-50 grayscale">
                        <div className="text-sm font-bold text-gray-500">ACME Corp</div>
                        <div className="text-sm font-bold text-gray-500">Stark Ind</div>
                        <div className="text-sm font-bold text-gray-500">Wayne Ent</div>
                    </div>
                </div>

            </div>
        </div>
    );
};
