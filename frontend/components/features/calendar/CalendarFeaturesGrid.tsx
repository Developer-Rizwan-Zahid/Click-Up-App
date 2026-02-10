'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, MapPin, Users, ScrollText, Share2 } from 'lucide-react';

const features = [
    {
        title: 'Meeting reminders',
        description: 'Never miss a call with smart, non-intrusive desktop and mobile notifications.',
        icon: <Bell className="w-6 h-6 text-yellow-500" />
    },
    {
        title: 'Time tracking',
        description: 'Track time accurately on any event or task directly from your calendar view.',
        icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
        title: 'Work location & hours',
        description: 'Signal where you\'re working from and set your available hours for better collaboration.',
        icon: <MapPin className="w-6 h-6 text-red-500" />
    },
    {
        title: 'Compare team schedules',
        description: 'Overlay multiple calendars to find the perfect meeting time for everyone.',
        icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
        title: 'Infinite horizontal scroll',
        description: 'Seamlessly navigate through your fast-moving schedule across days and weeks.',
        icon: <ScrollText className="w-6 h-6 text-purple-500" />
    },
    {
        title: 'Secure calendar sharing',
        description: 'Share your availability with external guests without revealing private details.',
        icon: <Share2 className="w-6 h-6 text-blue-400" />
    }
];

export default function CalendarFeaturesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">Everything you expect, and more.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-start"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                            <p className="text-zinc-500 font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
