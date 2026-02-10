"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatArea } from "@/components/chat/ChatArea";

export default function ChatPage() {
    const [messages, setMessages] = useState<any[]>([]);

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/api/chat', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setMessages(data);
            }
        } catch (e) {
            console.error("Failed to fetch messages", e);
        }
    };

    // Initial fetch and poller for live-like feel
    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 3000);
        return () => clearInterval(interval);
    }, []);

    const sendMessage = async (content: string) => {
        try {
            const token = localStorage.getItem('token');
            // Optimistic update
            const tempMsg = {
                id: Date.now(),
                content,
                sender: "Me",
                timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, tempMsg]);

            await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ content })
            });

            // Refresh to get server timestamp/ID
            fetchMessages();

        } catch (e) {
            console.error("Failed to send message", e);
        }
    };

    return (
        <div className="flex h-screen w-full bg-white text-[#292D34]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden min-w-0">
                <Topbar />

                <div className="flex-1 flex flex-col overflow-hidden">
                    <ChatHeader />
                    <ChatArea messages={messages} /> 
                    <ChatInput onSend={sendMessage} />
                </div>
            </main>
        </div>
    );
}
