"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Download, ShieldCheck, HelpCircle, Lock } from "lucide-react";

export function PatientResources() {
  return (
    <section id="patient-resources" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            Patient Resources
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Everything you need for your visit.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Save time at the front desk by completing your forms online, review our pre-treatment instructions, and access your secure patient portal.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* New Patient Forms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">New Patient Forms</h3>
            <p className="text-muted-foreground mb-6">Complete your medical history and consent forms online before you arrive.</p>
            <div className="space-y-3">
              <Button className="w-full justify-between group/btn">
                Digital Intake Form
                <ShieldCheck className="w-4 h-4 ml-2 opacity-70 group-hover/btn:opacity-100" />
              </Button>
              <Button variant="outline" className="w-full justify-between group/btn">
                Download PDF
                <Download className="w-4 h-4 ml-2 opacity-70 group-hover/btn:opacity-100" />
              </Button>
            </div>
          </motion.div>

          {/* Patient Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visit Information</h3>
            <p className="text-muted-foreground mb-6">Prepare for your appointment with our comprehensive guides and instructions.</p>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start border border-border">First Visit Guide</Button>
              <Button variant="ghost" className="w-full justify-start border border-border">Treatment Prep Instructions</Button>
              <Button variant="ghost" className="w-full justify-start border border-border">Post-Op Care Guidelines</Button>
            </div>
          </motion.div>

          {/* Secure Patient Portal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
            
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Secure Portal</h3>
            <p className="text-white/80 mb-8">Access your medical records, view x-rays, check upcoming appointments, and pay bills securely.</p>
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-slate-100 font-bold">
              Login to Patient Portal
            </Button>
            <p className="text-xs text-white/60 text-center mt-4">HIPAA Compliant & Secure</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
