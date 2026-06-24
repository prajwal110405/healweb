"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    review: "The best dental experience I've ever had. The staff is incredibly friendly and the technology they use makes everything painless.",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    review: "I was always anxious about visiting the dentist, but Dr. Smith and the team at Smile Matters completely changed that. Highly recommended!",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Emily Davis",
    review: "Got my veneers done here and I couldn't be happier. The attention to detail and care is unmatched.",
    rating: 5,
    initials: "ED"
  },
  {
    name: "Robert Wilson",
    review: "Professional, clean, and modern. The entire process from booking to the actual procedure was seamless.",
    rating: 5,
    initials: "RW"
  },
  {
    name: "Amanda Martinez",
    review: "Amazing pediatric dentistry! My kids actually look forward to their dental checkups now. Thank you Smile Matters!",
    rating: 5,
    initials: "AM"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center max-w-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold tracking-wide uppercase text-sm mb-3"
        >
          Testimonials
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
        >
          What Our Patients Say
        </motion.h3>
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <motion.div 
          className="flex whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
        >
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div key={i} className="inline-block w-[350px] md:w-[450px] mx-4 shrink-0">
              <Card className="h-full border-slate-200/60 shadow-sm bg-background">
                <CardContent className="p-8 whitespace-normal">
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8 italic">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">Verified Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients for smooth fade out on edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 dark:from-slate-900/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 dark:from-slate-900/30 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
