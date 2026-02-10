import { BrainSubNavbar } from "@/components/brain/shared/BrainSubNavbar";
import { Navbar } from "@/components/Navbar";

export default function BrainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black">
            <div className="pt-16">
                <BrainSubNavbar />
                {children}
            </div>
        </div>
    );
}
