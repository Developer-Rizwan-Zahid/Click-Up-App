"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function OperationsFAQ() {
    const faqs = [
        {
            question: "Can ClickUp's automation handle complex workflows for operations teams?",
            answer: "Yes! ClickUp Automations can handle complex workflows by triggering actions based on specific formatting, status changes, assignees, and more. You can chain multiple actions together to create sophisticated automated processes that match your team's exact needs."
        },
        {
            question: "Is ClickUp suitable for small operations teams?",
            answer: "Absolutely. ClickUp is designed to scale with you. Whether you're a team of one or one thousand, you can customize the platform to fit your current needs and expand its capabilities as your team grows."
        },
        {
            question: "How does ClickUp help with resource management?",
            answer: "ClickUp provides dedicated views for Workload management, allowing you to see team capacity, assign tasks based on availability, and rebalance work with simple drag-and-drop actions."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-4xl font-bold text-[#292D34] mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-[#292D34]">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-blue-500 flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 border-t border-gray-100 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
