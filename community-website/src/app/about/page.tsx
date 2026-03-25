"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { Target, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission & Vision</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Building the foundation for tomorrow&apos;s industry leaders.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass dark:glass-dark p-8 rounded-3xl"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {siteConfig.mission}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass dark:glass-dark p-8 rounded-3xl"
          >
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
              <Zap size={28} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Vision</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {siteConfig.vision}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass dark:glass-dark p-8 md:p-12 rounded-[2rem] text-center"
        >
          <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400 rounded-full flex items-center justify-center mb-6">
            <Users size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Story</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {siteConfig.story}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
