"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, User, Lock, Eye, EyeOff, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import { motion } from "framer-motion";

export const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await api.post("/auth/register", { email, password, fullName });

            // Redirect to login page
            window.location.href = "/login";

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

                {/* Logo */}
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
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                            Free Forever
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-black text-[#292D34] mb-3 tracking-tight">
                            Let's get you moving!
                        </h1>
                        <p className="text-gray-500">
                            Create your free account and start saving time today.
                        </p>
                        {error && (
                            <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm font-bold rounded-lg border border-red-100">
                                {error}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSignup} className="space-y-5">

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="email">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-[#7B68EE] focus:ring-4 focus:ring-[#7B68EE]/10 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="fullname">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        id="fullname"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-[#7B68EE] focus:ring-4 focus:ring-[#7B68EE]/10 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="password">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min. 8 characters"
                                        className="w-full h-11 pl-10 pr-10 rounded-lg border border-gray-300 focus:border-[#7B68EE] focus:ring-4 focus:ring-[#7B68EE]/10 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={8}
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

                        <Button className="w-full h-14 text-lg bg-[#E91E63] hover:bg-[#d81557] text-white font-bold rounded-xl shadow-lg shadow-pink-500/20 transition-all hover:scale-[1.01]" disabled={isLoading}>
                            {isLoading ? "Creating Account..." : "Play with ClickUp"}
                        </Button>

                        <div className="text-xs text-gray-400 text-center leading-relaxed px-4">
                            By clicking the button above, you agree to our <Link href="#" className="underline hover:text-gray-600">Terms of Service</Link> and <Link href="#" className="underline hover:text-gray-600">Privacy Policy</Link>.
                        </div>

                    </form>

                    <div className="text-center pt-2">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link href="/login" className="font-bold text-[#7B68EE] hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column: Features visual */}
            <div className="hidden lg:flex w-[40%] bg-[#292D34] relative overflow-hidden flex-col justify-center items-center p-12 text-center text-white">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-full h-full opacity-20">
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-pink-500 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-sm space-y-12">

                    <div>
                        <h2 className="text-3xl font-black mb-6">Free Forever.</h2>
                        <p className="text-gray-400 text-lg">No credit card required. Upgrade as you grow.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-left space-y-4">
                        <FeatureItem text="Unlimited tasks and members" />
                        <FeatureItem text="Collaborative docs and whiteboards" />
                        <FeatureItem text="Real-time chat and video" />
                        <FeatureItem text="Kanban, Calendar, and List views" />
                        <FeatureItem text="Sprint management" />
                    </div>

                    <div className="flex justify-center gap-2 opacity-60">
                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                        <span className="text-xs font-bold ml-2 text-white">Loved by 2M+ teams</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="min-w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <Check size={12} strokeWidth={4} />
            </div>
            <span className="font-bold text-sm text-gray-200">{text}</span>
        </div>
    )
}
