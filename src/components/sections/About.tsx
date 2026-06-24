"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Stethoscope, Heart } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Experienced Dentists",
    description: "Our team consists of highly qualified professionals with years of experience.",
    icon: Users,
  },
  {
    title: "Modern Technology",
    description: "Equipped with the latest digital diagnostics for precise and pain-free care.",
    icon: Stethoscope,
  },
  {
    title: "Comfortable Care",
    description: "A relaxing environment designed to make your visit anxiety-free.",
    icon: Heart,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wide uppercase text-sm mb-3"
          >
            About Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Your Smile, Our Priority
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Welcome to Smile Matters, where advanced dental technology meets compassionate care. 
            With over 15 years of experience, our clinic is dedicated to providing comprehensive, 
            patient-focused treatments that ensure your optimal oral health and a confident smile.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Card className="border border-transparent shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-primary/40 hover:shadow-[0_15px_40px_-10px_rgba(14,165,233,0.3)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out bg-background/60 backdrop-blur-xl group relative overflow-hidden cursor-pointer">
                {/* Subtle themed blue glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
