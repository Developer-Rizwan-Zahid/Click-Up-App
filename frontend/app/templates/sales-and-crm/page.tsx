"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SalesCrmHero } from "@/components/templates/sales-crm/SalesCrmHero";
import { SalesCrmGrid } from "@/components/templates/sales-crm/SalesCrmGrid";

export default function SalesCrmPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <SalesCrmHero />
                <SalesCrmGrid />
            </main>
            <Footer />
        </div>
    );
}
