"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { Calendar, MapPin, Video } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventProps {
  id: string;
  title: string;
  date: string;
  speaker: string;
  speakerImage: string;
  zoomLink: string | null;
  webexLink: string | null;
  isOnline: boolean;
  location?: string;
}

export function EventCard({ event }: { event: EventProps }) {
  const [hasRegistered, setHasRegistered] = useState(false);

  useEffect(() => {
    // Check localStorage for the mock auth flag
    const registered = localStorage.getItem('founderhub_registered') === 'true';
    // eslint-disable-next-line
    setHasRegistered(registered);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass dark:glass-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-800 flex flex-col h-full bg-white dark:bg-slate-900"
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            {event.isOnline ? "Online Event" : "In-Person"}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-6 text-slate-600 dark:text-slate-400 text-sm flex-grow">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary-500" />
            <span>{event.date}</span>
          </div>
          {event.isOnline ? (
            <div className="flex items-center gap-2">
              <Video size={16} className="text-primary-500" />
              <span>Zoom / Webex</span>
            </div>
          ) : (
             <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-500" />
              <span>{event.location}</span>
            </div>
          )}
          <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
             <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 shrink-0">
               <img src={event.speakerImage} alt={event.speaker} className="w-full h-full object-cover" />
             </div>
             <span className="font-medium text-slate-800 dark:text-slate-300 truncate">{event.speaker}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
        {!hasRegistered ? (
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Meeting links unlocked for members</p>
            <Link href="/contact" className="block w-full">
              <Button className="w-full">Register to Join</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
             <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span> You have access
             </p>
             <div className="grid grid-cols-2 gap-2">
              {event.zoomLink && (
                <a href={event.zoomLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 text-sm h-10 px-4 bg-blue-600 text-white hover:bg-blue-700 shadow-md flex-1">
                  Join Zoom
                </a>
              )}
              {event.webexLink && (
                <a href={event.webexLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 text-sm h-10 px-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-900 flex-1">
                  Join Webex
                </a>
              )}
             </div>
             {!event.zoomLink && !event.webexLink && event.isOnline && (
                 <p className="text-sm text-center text-slate-500">Links will be posted closer to event.</p>
             )}
             {!event.isOnline && (
                 <a href={`https://maps.google.com/?q=${event.location}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 text-sm h-10 px-4 bg-primary-600 text-white hover:bg-primary-700 w-full">
                  View Map
                </a>
             )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
