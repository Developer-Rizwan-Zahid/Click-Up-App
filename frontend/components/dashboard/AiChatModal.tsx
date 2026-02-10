"use client";

import { useState } from "react";
import { X, Send, Bot, Sparkles } from "lucide-react";

export const AiChatModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
        { role: 'ai', text: 'Hello! I am your AI assistant. How can I help you with your tasks today?' }
    ]);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput("");
        setLoading(true);

        try {
            // Call backend API
            const res = await fetch('http://localhost:5000/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userMsg })
            });

            if (res.ok) {
                const data = await res.json();
                setMessages(prev => [...prev, { role: 'ai', text: data.response }]);
            } else {
                setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I couldn't connect to the server." }]);
            }
        } catch (e) {
            setMessages(prev => [...prev, { role: 'ai', text: "Network error occurred." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-[600px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="h-14 border-b px-4 flex items-center justify-between bg-gradient-to-r from-purple-50 to-white">
                    <div className="flex items-center gap-2 text-purple-700 font-bold">
                        <Sparkles size={20} />
                        <span>ClickUp AI</span>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={20} className="text-gray-400" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                    ? 'bg-[#7B68EE] text-white rounded-br-none'
                                    : 'bg-white border text-gray-700 rounded-bl-none shadow-sm'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-white border px-4 py-2 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" />
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce delay-100" />
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce delay-200" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask AI anything..."
                            className="w-full h-11 pl-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-[#7B68EE] focus:ring-1 focus:ring-[#7B68EE]"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="absolute right-2 top-2 p-1.5 bg-[#7B68EE] text-white rounded-md hover:bg-[#6653d6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
