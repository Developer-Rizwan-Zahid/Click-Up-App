"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PricingPlansProps {
    billingCycle: "yearly" | "monthly";
}

export function PricingPlans({ billingCycle }: PricingPlansProps) {
    const plans = [
        {
            name: "Free Forever",
            tagline: "Best for personal use",
            price: "Free",
            period: "forever",
            cta: "Sign Up For Free",
            ctaVariant: "outline",
            features: [
                "100MB Storage",
                "Unlimited Tasks",
                "Unlimited Free Plan Members",
                "Collaborative Docs",
                "Whiteboards",
                "Everything View",
                "Real-Time Chat",
                "Kanban Boards",
                "Sprint Management",
                "Calendar View"
            ]
        },
        {
            name: "Unlimited",
            tagline: "Best for small teams",
            price: billingCycle === "yearly" ? "$7" : "$10",
            period: "per user/month",
            cta: "Get Unlimited",
            ctaVariant: "primary",
            highlight: "background-gradient", // Custom indicator for styling
            features: [
                "Unlimited Storage",
                "Unlimited Integrations",
                "Unlimited Dashboards",
                "Guests with Permissions",
                "Unlimited Gantt Charts",
                "Unlimited Custom Fields",
                "Teams (User Groups)",
                "Goals & Portfolios",
                "Form View",
                "Resource Management",
                "Agile Reporting"
            ]
        },
        {
            name: "Business",
            tagline: "Best for mid-sized teams",
            price: billingCycle === "yearly" ? "$12" : "$19",
            period: "per user/month",
            cta: "Get Business",
            ctaVariant: "primary",
            isPopular: true,
            features: [
                "Google SSO",
                "Unlimited Teams",
                "Custom Exporting",
                "Advanced Public Sharing",
                "Advanced Automation",
                "Task Form Logic",
                "Goal Folders",
                "Workload Management",
                "Timesheets",
                "Mind Maps"
            ]
        },
        {
            name: "Enterprise",
            tagline: "Best for many large teams",
            price: "Contact",
            period: "Sales",
            cta: "Contact Sales",
            ctaVariant: "outline",
            features: [
                "White Labeling",
                "Advanced Permissions",
                "Enterprise API",
                "Unlimited Custom Roles",
                "Team Sharing for Spaces",
                "Default Personal Views",
                "MSA & HIPAA Available",
                "Single Sign-On (SSO)",
                "Live Onboarding Training",
                "Dedicated Success Manager"
            ]
        }
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-8 pb-20 bg-white">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative flex flex-col p-6 rounded-2xl border ${plan.isPopular ? "border-[#7b68ee] ring-2 ring-[#7b68ee]/20" : "border-gray-200"
                            } hover:shadow-xl transition-shadow bg-white`}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-1/2">
                                <span className="bg-[#7b68ee] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Best Value
                                </span>
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#292D34] mb-1">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-4">{plan.tagline}</p>

                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-4xl font-black text-[#292D34]">{plan.price}</span>
                                <span className="text-gray-400 font-medium text-sm">{plan.period}</span>
                            </div>
                            {billingCycle === "yearly" && plan.price !== "Free" && plan.price !== "Contact" && (
                                <p className="text-xs text-[#7b68ee] font-semibold">Billed yearly</p>
                            )}
                        </div>

                        <Button
                            className={`w-full mb-8 font-bold text-base h-12 rounded-xl transition-all ${plan.isPopular
                                    ? "bg-[#7b68ee] hover:bg-[#6c5ce7] text-white shadow-lg hover:shadow-[#7b68ee]/30"
                                    : plan.ctaVariant === 'outline'
                                        ? "bg-white border-2 border-gray-200 text-[#292D34] hover:border-gray-300 hover:bg-gray-50"
                                        : "bg-[#292D34] text-white hover:bg-black"
                                }`}
                        >
                            {plan.cta}
                        </Button>

                        <div className="mt-auto">
                            <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">
                                {index === 0 ? "Key features:" : `Everything in ${plans[index - 1].name} +`}
                            </p>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium leading-tight">
                                        <Check className="w-4 h-4 text-[#7b68ee] shrink-0 mt-0.5" strokeWidth={3} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
