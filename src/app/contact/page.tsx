"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    localStorage.setItem("founderhub_registered", "true");
    setIsUnlocked(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Join the Community
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Fill out the form below to get access to all event links and resources.
        </p>
      </motion.div>

      <div className="glass dark:glass-dark rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="w-full h-[600px] bg-slate-50 dark:bg-slate-900 relative">
          <iframe 
            src={siteConfig.contact.googleFormSrc} 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            title="Google Contact Form"
            className="absolute inset-0"
          >
            Loading…
          </iframe>
        </div>
        
        <div className="p-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
          <AnimatePresence mode="wait">
            {!isUnlocked ? (
               <motion.div 
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col md:flex-row items-center justify-between gap-6"
               >
                 <div className="flex items-start gap-4 text-slate-600 dark:text-slate-300 flex-1">
                   <AlertCircle className="text-amber-500 shrink-0 mt-1" />
                   <p className="text-sm">
                     <strong>Submitted the form?</strong> Click the button to unlock meeting links across the entire website.
                   </p>
                 </div>
                 <Button onClick={handleUnlock} size="lg" className="w-full md:w-auto shrink-0 px-8">
                   I Have Submitted
                 </Button>
               </motion.div>
            ) : (
               <motion.div 
                key="unlocked"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-center justify-between gap-6"
               >
                 <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                   <CheckCircle2 size={24} />
                   <span className="font-semibold text-lg">Access Granted!</span>
                 </div>
                 <Link href="/events">
                   <Button variant="outline" size="lg" className="w-full md:w-auto border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-900/30">
                     View Upcoming Events
                   </Button>
                 </Link>
               </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
