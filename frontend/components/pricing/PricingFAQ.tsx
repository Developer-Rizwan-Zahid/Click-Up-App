"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does the free plan work?",
        answer: "Our Free Forever plan offers a robust set of features for personal use. It includes 100MB of storage, unlimited tasks, and access to our core features like Views, Docs, and Whiteboards. It's designed to help individuals stay organized and productive without any cost."
    },
    {
        question: "Can I try the paid plans before purchasing?",
        answer: "Yes! We not only offer a Free Forever plan, but we also provide a 100% money-back guarantee. If you're not satisfied with your purchase, simply contact us within 30 days for a full refund."
    },
    {
        question: "What forms of payment do you accept?",
        answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we can also support invoicing via bank transfer."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. Security is our top priority. We use SSL encryption, daily backups, and host our servers with AWS, one of the most secure cloud providers in the world. We are also SOC 2 Type II compliant."
    },
    {
        question: "Can I change plans at any time?",
        answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be prorated so you only pay for what you use."
    }
];

export function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-black text-center text-[#292D34] mb-16"
                >
                    Frequently asked questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-[#292D34]">{faq.question}</span>
                                <span className={`text-[#7b68ee] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </span>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-8 pb-8 text-gray-500 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
