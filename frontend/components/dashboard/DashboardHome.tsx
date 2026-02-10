"use client";

import {
    Layout,
    Bot,
    Clock,
    KanbanSquare,
    User,
    Plus,
    Loader2,
    BarChart3,
    PieChart,
    ListTodo,
    SlidersHorizontal
} from "lucide-react";
import { DashboardTemplateCard } from "./DashboardTemplateCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Updated visual mapping to match the reference image better
const ICON_MAP: any = {
    "Layout": Layout,
    "Bot": PieChart, 
    "Clock": SlidersHorizontal, 
    "KanbanSquare": ListTodo, 
    "User": PieChart 
};

interface Template {
    id: string; // Added ID from model
    name: string;
    description: string;
    icon: string;
    color: string;
    badge?: string;
    isCenter?: boolean;
}

export const DashboardHome = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch('http://localhost:5000/api/dashboard/templates', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setTemplates(data);
                }
            } catch (error) {
                console.error("Error fetching templates", error);
            } finally {
                
                setLoading(false);
            }
        };

        fetchTemplates();
    }, []);

    const handleCreateDashboard = async (template: Template) => {
        setCreating(template.name);
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/api/dashboard/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(template)
            });

            if (res.ok) {
                const data = await res.json();
                alert(`Dashboard '${template.name}' created!`);
            }
        } catch (e) {
            console.error("Failed to create dashboard", e);
        } finally {
            setCreating(null);
        }
    };

    return (
        <div className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] h-full overflow-y-auto p-8">
            <div className="max-w-6xl mx-auto w-full pt-12">

                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Choose a Dashboard template
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Get started with a Dashboard template or create a custom Dashboard to fit your exact needs.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-purple-600" size={48} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {templates.map((template, index) => {
                            const IconComponent = ICON_MAP[template.icon] || Layout;
                            return (
                                <div key={index} className="relative">
                                    <DashboardTemplateCard
                                        title={template.name}
                                        description={template.description}
                                        icon={IconComponent}
                                        color={template.color}
                                        badge={template.badge}
                                        isCenter={template.isCenter}
                                        onClick={() => handleCreateDashboard(template)}
                                    />
                                    {creating === template.name && (
                                        <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-3xl">
                                            <Loader2 className="animate-spin text-purple-600" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        <div className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group flex flex-col justify-center min-h-[220px]">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors">
                                <Plus size={24} className="text-gray-400 group-hover:text-gray-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Start from scratch</h3>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};
