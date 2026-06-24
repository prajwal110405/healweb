"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { openBookingModal } from "@/components/BookingModal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background -z-20" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted Family Dental Care
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Creating Healthy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Smiles For Life
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Advanced dental treatments with modern technology, experienced dentists, and patient-first care.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={openBookingModal} size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/25 group">
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg" 
                variant="outline" 
                className="rounded-full h-14 px-8 text-base group bg-background/50 backdrop-blur-sm border-2"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-muted-foreground"
            >
              {[
                "Same-Day Emergency Appointments",
                "Modern Digital Dentistry",
                "Family-Friendly Care",
                "Flexible Financing",
                "Trusted By Thousands Of Patients",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-full w-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center"
          >
            {/* Background glowing rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10" />

            {/* Image Container with Bottom Fade */}
            <div
              className="relative w-full max-w-lg lg:max-w-xl aspect-square lg:aspect-[4/5] z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            >
              <Image 
                src="/images/dental-team.png" 
                alt="Professional Dental Team"
                fill
                className="object-cover object-top lg:object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
