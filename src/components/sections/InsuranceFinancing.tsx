"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";

export function InsuranceFinancing() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Insurance & Payment Options
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe quality dental care should be accessible to everyone. That's why we work with most major insurance providers and offer flexible financing to fit your budget.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Insurance Accepted</h3>
                <p className="text-sm text-muted-foreground mb-4">We are in-network with Delta Dental, Cigna, MetLife, Aetna, and more.</p>
                <div className="text-xs font-semibold text-primary">Verify Your Benefits →</div>
              </div>
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
                <CreditCard className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Financing</h3>
                <p className="text-sm text-muted-foreground mb-4">0% interest payment plans through CareCredit and our in-house membership.</p>
                <div className="text-xs font-semibold text-primary">View Payment Plans →</div>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                Contact Our Billing Team
              </Button>
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">Do you accept my insurance?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We accept most major PPO insurance plans. Even if we are out-of-network, we will gladly file claims on your behalf to help you maximize your benefits. Please call our office to verify your specific provider.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Do you offer payment plans?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! We understand that dental work can be an unexpected expense. We partner with CareCredit and Cherry to offer flexible, low-to-no interest monthly payment plans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">What if I don't have dental insurance?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No insurance? No problem. We offer an exclusive In-House Dental Savings Plan. For a low annual fee, you receive two free cleanings, exams, x-rays, and a significant discount on all other restorative and cosmetic treatments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">When is payment due?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Your estimated patient portion is due at the time of service. We accept cash, major credit cards, and approved third-party financing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
