"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Smile, Syringe, Braces, Sparkles, Baby } from "lucide-react";

const SERVICES = [
  {
    title: "General Dentistry",
    description: "Comprehensive check-ups, cleanings, and preventive care for optimal oral health.",
    icon: Activity,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and total smile makeovers.",
    icon: Smile,
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth using advanced techniques.",
    icon: Syringe,
  },
  {
    title: "Orthodontics",
    description: "Clear aligners and traditional braces to perfectly align your teeth.",
    icon: Braces,
  },
  {
    title: "Teeth Whitening",
    description: "Professional, safe, and effective whitening for a brighter, more confident smile.",
    icon: Sparkles,
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle and fun dental care tailored specifically for children and teens.",
    icon: Baby,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wide uppercase text-sm mb-3"
            >
              Our Services
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            >
              Comprehensive Dental Care
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" className="rounded-full">
              View All Services
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group border-slate-200/60 dark:border-slate-800 bg-background hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent group-hover:underline underline-offset-4 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
