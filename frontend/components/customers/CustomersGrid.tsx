"use client";

import { CustomerCard } from "./CustomerCard";

// Mock Data for grid
const CUSTOMERS = [
    {
        id: 1,
        logo: <span className="font-bold tracking-tight text-[#2ecc71] font-mono">SHIPT</span>,
        quote: "ClickUp has become the backbone of our engineering processes, allowing us to ship features faster and with more confidence.",
        role: "VP of Engineering"
    },
    {
        id: 2,
        logo: <span className="font-serif font-black text-[#8e44ad]">Wake Forest</span>,
        quote: "Managing university-wide projects was a nightmare until we centralized everything in ClickUp.",
        role: "Program Director"
    },
    {
        id: 3,
        logo: <span className="font-sans font-extrabold text-[#2980b9] italic">ATRATO</span>,
        quote: "The ability to customize every aspect of the workflow meant we didn't have to change how we work to fit the tool.",
        role: "Product Owner"
    },
    {
        id: 4,
        logo: <span className="font-sans font-bold text-[#292D34]">Mayo Clinic</span>,
        quote: "Patient care initiatives are complex. ClickUp gives us the visibility we need to ensure nothing slips.",
        role: "Operations Lead"
    },
    {
        id: 5,
        logo: <span className="font-mono font-bold text-[#e67e22]">FINASTRA</span>,
        quote: "We consolidated 4 different tools into one. The savings in license costs alone was massive.",
        role: "CTO"
    },
    {
        id: 6,
        logo: <span className="font-serif italic font-bold text-[#16a085]">Yggdrasil</span>,
        quote: "Our game development pipeline is now fully automated. We save about 12 hours per week per developer.",
        role: "Lead Game Designer"
    },
    {
        id: 7,
        logo: <span className="font-bold tracking-widest text-[#c0392b]">NETFLIX</span>,
        quote: "Coordination across global teams has never been seamless until now.",
        role: "Creative Producer"
    },
    {
        id: 8,
        logo: <span className="font-bold text-[#34495e]">Uber</span>,
        quote: "Scaling our local ops required tool that could handle complexity. ClickUp was the only answer.",
        role: "Regional Manager"
    },
    {
        id: 9,
        logo: <span className="font-bold text-[#7f8c8d]">Booking.com</span>,
        quote: "From marketing campaigns to legal reviews, everything happens in one place.",
        role: "Marketing Director"
    }
];

export function CustomersGrid() {
    return (
        <section className="pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CUSTOMERS.map((customer) => (
                        <CustomerCard
                            key={customer.id}
                            logo={customer.logo}
                            quote={customer.quote}
                            role={customer.role}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border-2 border-[#292D34] text-[#292D34] font-bold hover:bg-[#292D34] hover:text-white transition-all shadow-sm hover:shadow-lg">
                        Load More Stories
                    </button>
                </div>
            </div>
        </section>
    );
}
