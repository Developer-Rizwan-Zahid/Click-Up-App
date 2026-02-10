"use client";

import { MessageSquare, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HelpCenterContact() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Still need help?</h2>
                <p className="text-gray-500 mb-10 text-lg">Our support team is just a click away.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-500">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Community</h3>
                        <p className="text-gray-500 mb-6 text-sm">Ask questions and discuss with other users.</p>
                        <Button variant="outline" className="w-full">Visit Community</Button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-500">
                            <MessageCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Chat Support</h3>
                        <p className="text-gray-500 mb-6 text-sm">Chat with our team 24/7 for instant help.</p>
                        <Button className="w-full bg-[#7B68EE] hover:bg-[#6c5ce7] text-white">Start Chat</Button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                        <p className="text-gray-500 mb-6 text-sm">Send us a detailed message about your issue.</p>
                        <Button variant="outline" className="w-full">Contact Support</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
