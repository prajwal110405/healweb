"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { openBookingModal } from "@/components/BookingModal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function AppointmentCTA() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Gradient / Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 -z-20" />
      
      {/* Decorative patterns & soft glow accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Abstract Dental Shape (subtle curved line) */}
      <svg className="absolute top-1/4 left-10 w-64 h-64 text-primary/5 -rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21c-2 0-3-2-3-4.5 0-1 .5-2 1-3.5C11 11 12 9 12 9s1 2 2 4c.5 1.5 1 2.5 1 3.5 0 2.5-1 4.5-3 4.5z" />
        <path d="M8.5 4.5c.5-1.5 2-2.5 3.5-2.5s3 1 3.5 2.5c.5 2.5.5 5-1.5 7.5-.5.5-1 1-2 1.5-1-.5-1.5-1-2-1.5-2-2.5-2-5-1.5-7.5z" />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto py-16 px-8 sm:px-12 rounded-[2.5rem] backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(14,165,233,0.1)] bg-white/40"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Ready For A Healthier Smile?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards perfect oral health. Our experts provide gentle, compassionate care tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button onClick={openBookingModal} size="lg" className="rounded-full h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 group">
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="rounded-full h-14 px-8 text-lg border-primary/20 text-primary bg-white hover:bg-sky-50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all hover:-translate-y-1 active:scale-95"
            >
              Contact Us
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-700 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-primary">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              Same-Day Emergency Appointments
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-primary">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              Trusted By Thousands
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
