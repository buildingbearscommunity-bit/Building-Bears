"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export function TestimonialCard({ testimonial, index }: { testimonial: TestimonialProps, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass dark:glass-dark p-8 rounded-3xl relative h-full flex flex-col"
    >
      <Quote className="absolute top-6 right-6 text-primary-200 dark:text-primary-900/50 opacity-50" size={48} />
      <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-8 relative z-10 flex-grow">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-100 dark:border-primary-800 shrink-0">
          <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
