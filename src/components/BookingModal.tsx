"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, CalendarCheck } from "lucide-react";

type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  notes: string;
};

export const openBookingModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-booking-modal"));
  }
};

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<BookingFormData>();

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
      reset();
    };
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, [reset]);

  const onSubmit = async (data: BookingFormData) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
  };

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden relative pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900 shrink-0">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-primary" />
                  Book Appointment
                </h3>
                <button 
                  onClick={close}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="b-name">Patient Name *</Label>
                        <Input id="b-name" placeholder="John Doe" {...register("name", { required: true })} className="bg-slate-50 dark:bg-slate-800/50" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="b-phone">Phone Number *</Label>
                          <Input id="b-phone" type="tel" placeholder="(555) 000-0000" {...register("phone", { required: true })} className="bg-slate-50 dark:bg-slate-800/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="b-email">Email Address *</Label>
                          <Input id="b-email" type="email" placeholder="john@example.com" {...register("email", { required: true })} className="bg-slate-50 dark:bg-slate-800/50" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="b-date">Preferred Date *</Label>
                          <Input id="b-date" type="date" {...register("date", { required: true })} className="bg-slate-50 dark:bg-slate-800/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="b-time">Preferred Time *</Label>
                          <Input id="b-time" type="time" {...register("time", { required: true })} className="bg-slate-50 dark:bg-slate-800/50" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="b-treatment">Treatment Type *</Label>
                        <select 
                          id="b-treatment" 
                          {...register("treatment", { required: true })}
                          className="flex h-10 w-full rounded-md border border-input bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select Treatment...</option>
                          <option value="General Checkup">General Checkup</option>
                          <option value="Teeth Cleaning">Teeth Cleaning</option>
                          <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Orthodontics">Orthodontics</option>
                          <option value="Emergency Dental Care">Emergency Dental Care</option>
                          <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="b-notes">Additional Notes (optional)</Label>
                        <Textarea id="b-notes" placeholder="Any special requirements or concerns?" rows={3} {...register("notes")} className="resize-none bg-slate-50 dark:bg-slate-800/50" />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/25"
                      >
                        {isSubmitting ? "Submitting..." : "Request Appointment"}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 flex flex-col items-center text-center space-y-6"
                    >
                      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-3">Appointment Request Submitted</h4>
                        <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                          Thank you for choosing our clinic.
                          <br />
                          Our team will contact you shortly to confirm your appointment.
                        </p>
                      </div>
                      <Button onClick={close} className="mt-4 rounded-full px-10 h-12">
                        Done
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
