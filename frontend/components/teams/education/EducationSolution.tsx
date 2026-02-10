"use client";

import { motion } from "framer-motion";
import { FileText, Table, BarChart2, Users, Settings } from "lucide-react";

export function EducationSolution() {
    const solutions = [
        {
            title: "Forms & Surveys",
            description: "Collect student data, feedback, and applications with custom forms.",
            icon: FileText,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Spreadsheets",
            description: "Manage grades and budgets with powerful grid views and formulas.",
            icon: Table,
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            title: "Reporting",
            description: "Visualize student progress and administrative metrics with dashboards.",
            icon: BarChart2,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            title: "Student Management",
            description: "Keep all student records and profiles organized in one secure place.",
            icon: Users,
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            title: "Custom Fields",
            description: "Tailor ClickUp to your school's unique needs with unlimited custom fields.",
            icon: Settings,
            color: "text-red-500",
            bg: "bg-red-50"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#292D34] mb-6">
                        The all-in-one course management solution
                    </h2>
                    <p className="text-xl text-gray-500">
                        Replace or supplement your student information system with ClickUp's simple yet effective work management solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center"
                        >
                            <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-[#292D34] mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
