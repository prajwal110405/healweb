"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, GraduationCap, Award, HeartHandshake } from "lucide-react";

const credentials = [
  "DDS, University of California, San Francisco",
  "Fellow, Academy of General Dentistry",
  "Member, American Academy of Cosmetic Dentistry",
  "Top Dentist Award 2023-2024",
];

export function MeetDoctor() {
  return (
    <section id="meet-doctor" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Sarah Jenkins - Lead Dentist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Dr. Sarah Jenkins</h3>
                <p className="text-white/80">Lead Cosmetic Dentist</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Meet Your Dentist
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
                Experienced, compassionate care focused on creating healthy and confident smiles.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience in comprehensive and cosmetic dentistry, Dr. Jenkins is passionate about providing pain-free, state-of-the-art dental care. Her philosophy is centered around patient comfort and achieving natural, beautiful results that last a lifetime.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{cred}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border mt-8">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="font-bold text-xl text-foreground">15+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="font-bold text-xl text-foreground">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Board Cert.</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <HeartHandshake className="w-6 h-6 text-primary" />
                </div>
                <div className="font-bold text-xl text-foreground">5k+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Smiles</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
