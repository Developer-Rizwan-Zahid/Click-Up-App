"use client";

import {
    Plus,
    AtSign,
    Paperclip,
    Smile,
    Mic,
    Video,
    Monitor,
    Sparkles,
    Send,
    Bot
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
    onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
    const [message, setMessage] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (message.trim()) {
                onSend(message);
                setMessage("");
            }
        }
    };

    return (
        <div className="p-4 bg-white border-t border-gray-200">
            <div className="border border-gray-300 rounded-xl bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">

                {/* Input Field */}
                <div className="p-2">
                    <textarea
                        className="w-full min-h-[40px] max-h-[200px] resize-none border-none focus:ring-0 text-sm placeholder-gray-400 bg-transparent"
                        placeholder="Write a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={1}
                    />
                </div>

                {/* Toolbar */}
                <div className="flex items-center justify-between px-2 pb-2 mt-1">

                    {/* Left Actions */}
                    <div className="flex items-center gap-1 text-gray-500">
                        <IconButton icon={Plus} />
                        <IconButton icon={Sparkles} className="text-purple-500" />
                        <IconButton icon={AtSign} />
                        <IconButton icon={Paperclip} />
                        <IconButton icon={AtSign} /> {/* Placeholder for Loop/Mention */}
                        <div className="w-px h-4 bg-gray-200 mx-1" />
                        <IconButton icon={Smile} />
                        <IconButton icon={Bot} />
                        <IconButton icon={Video} />
                        <IconButton icon={Mic} />
                        <IconButton icon={Monitor} /> {/* Screen record */}
                    </div>

                    {/* Right: Send Button */}
                    <div className="flex items-center gap-2">
                        <button
                            disabled={!message.trim()}
                            onClick={() => {
                                onSend(message);
                                setMessage("");
                            }}
                            className={cn(
                                "p-1.5 rounded-md transition-all",
                                message.trim()
                                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                                    : "bg-transparent text-gray-300 cursor-not-allowed"
                            )}
                        >
                            <Send size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

function IconButton({ icon: Icon, className }: { icon: any, className?: string }) {
    return (
        <button className={cn("p-1.5 rounded hover:bg-gray-100 transition-colors", className)}>
            <Icon size={16} />
        </button>
    )
}
