"use client";

import { useEffect, useRef } from "react";

interface Message {
    id: number;
    content: string;
    sender: string;
    timestamp: string;
}

export const ChatArea = ({ messages }: { messages: Message[] }) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if (messages.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                No messages yet. Start the conversation!
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'Me' ? 'justify-end' : 'justify-start'}`}>
                    <div className="flex flex-col max-w-[70%]">
                        <div className={`p-3 rounded-2xl text-sm shadow-sm ${msg.sender === 'Me'
                                ? 'bg-blue-600 text-white rounded-br-none'
                                : 'bg-white border text-gray-800 rounded-bl-none'
                            }`}>
                            {msg.content}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 px-1 self-end">
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                </div>
            ))}
            <div ref={bottomRef} />
        </div>
    );
};
