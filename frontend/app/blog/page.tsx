"use client";

import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <main>
                <BlogHero />
                <BlogGrid />
            </main>
            <Footer />
        </div>
    );
}
