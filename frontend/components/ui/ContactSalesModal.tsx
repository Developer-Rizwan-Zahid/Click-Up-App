"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/api";

export function ContactSalesModal() {
    const { isOpen, closeModal } = useModal();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        workEmail: "",
        firstName: "",
        phone: "",
        employeeCount: "",
        lastName: "", // Added to match typical forms, though model had fewer, sticking to model for API
    });

    // Using model specific fields for submission
    const [submitData, setSubmitData] = useState({
        workEmail: "",
        firstName: "",
        phone: "",
        employeeCount: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSubmitData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
            });

            if (response.ok) {
                closeModal();
                router.push("/dashboard"); // Redirect to dashboard as requested
            } else {
                console.error("Failed to submit");
                // Handle error (optional: show toast)
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 sm:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-black text-slate-900 mb-2">Contact Sales</h2>
                                <p className="text-gray-500">
                                    Join 3M+ teams saving time and getting more done with ClickUp.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Work Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="workEmail"
                                        required
                                        value={submitData.workEmail}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={submitData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={submitData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Number of Employees <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="employeeCount"
                                        required
                                        value={submitData.employeeCount}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-white"
                                    >
                                        <option value="" disabled>Select...</option>
                                        <option value="1-10">1-10 associated</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51-200">51-200</option>
                                        <option value="201-500">201-500</option>
                                        <option value="501-1000">501-1000</option>
                                        <option value="1000+">1000+</option>
                                    </select>
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-[#7B68EE] hover:bg-[#6c5ce7] text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="animate-spin" size={20} /> Submitting...
                                            </span>
                                        ) : (
                                            "Submit"
                                        )}
                                    </Button>
                                </div>

                                <p className="text-xs text-center text-gray-400 leading-relaxed px-4">
                                    By submitting, I agree to ClickUp's <a href="#" className="underline decoration-gray-400 underline-offset-2">Privacy Policy</a> and consent to be contacted about my inquiry via email, phone, or SMS. I can opt out anytime.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
