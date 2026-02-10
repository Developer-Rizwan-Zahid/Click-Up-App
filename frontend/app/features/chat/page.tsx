import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChatHero from "@/components/features/chat/ChatHero";
import ChatComparison from "@/components/features/chat/ChatComparison";
import ChatFeatures from "@/components/features/chat/ChatFeatures";
import ChatVoiceVideo from "@/components/features/chat/ChatVoiceVideo";
import ChatPerformance from "@/components/features/chat/ChatPerformance";
import ChatAstroCta from "@/components/features/chat/ChatAstroCta";
import ChatFooter from "@/components/features/chat/ChatFooter";


export default function ChatPage() {
    return (
        <main className="bg-black">
            <Navbar />
            <div className="pt-16">
                <ChatHero />
                <ChatComparison />
                <ChatFeatures />
                <ChatVoiceVideo />
                <ChatPerformance />
                <ChatAstroCta/>
                <ChatFooter/>
            </div>
        </main>
    );
}
