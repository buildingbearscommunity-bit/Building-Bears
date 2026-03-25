"use client";

import { motion } from "framer-motion";
import { EventCard } from "@/components/EventCard";
import { upcomingEvents } from "@/data/config";

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 md:mb-20 text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 font-semibold text-sm mb-6">
          Weekly Meetups
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Community Events
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Join our weekly curated events. Learn from experts, network with peers, and get actionable insights to scale your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <EventCard event={event} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
