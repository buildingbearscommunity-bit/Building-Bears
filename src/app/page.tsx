"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { siteConfig, benefits, upcomingEvents, testimonials } from "@/data/config";
import * as Icons from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 font-semibold text-sm mb-6 border border-primary-100 dark:border-primary-800 shadow-sm">
              🚀 1000+ Founders strong
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">Startup Founders</span> Community
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg px-8 py-6 rounded-2xl">
                  Join Now
                </Button>
              </Link>
              <Link href="/events" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full text-lg px-8 py-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur">
                  Attend Next Meeting
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Join Us?</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">Everything you need to scale your startup</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = (Icons as unknown as Record<string, React.ElementType>)[benefit.icon] || Icons.Star;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center group hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm hover:shadow-xl"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Upcoming Events</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400">Join our weekly online and offline sessions</p>
            </div>
            <Link href="/events" className="hidden md:inline-flex">
              <Button variant="outline">View All Events</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/events" className="inline-block w-full">
              <Button variant="outline" className="w-full">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white rounded-t-[3rem] md:rounded-t-[5rem] mt-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Founders Say</h2>
            <p className="text-xl text-slate-400">Don&apos;t just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-primary-600 opacity-[0.03] dark:opacity-[0.1]"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to scale your startup?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
            Join thousands of founders worldwide building the future.
          </p>
          <Link href="/contact" className="inline-block">
            <Button size="lg" className="text-lg px-10 py-6 rounded-2xl shadow-xl shadow-primary-500/30">
              Apply to Join Community
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
