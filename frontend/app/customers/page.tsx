"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomersHero } from "@/components/customers/CustomersHero";
import { CustomersFeatured } from "@/components/customers/CustomersFeatured";
import { CustomersGrid } from "@/components/customers/CustomersGrid";

export default function CustomersPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
            <Navbar />
            <main>
                <CustomersHero />
                <CustomersFeatured />
                <CustomersGrid />
            </main>
            <Footer />
        </div>
    );
}
