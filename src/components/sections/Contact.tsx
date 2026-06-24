"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
          >
            Contact Us
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-md bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Emergency: +1 (555) 987-6543</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">contact@Smile Matters.com</p>
                    <p className="text-muted-foreground text-sm">support@Smile Matters.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">
                      123 Dental Street,<br />Healthcare City, 10020
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">Mon - Fri: 8am - 6pm</p>
                    <p className="text-muted-foreground text-sm">Saturday: 9am - 2pm</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md relative group">
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                 Interactive Map Embedded Here
               </div>
               {/* Simulating a map embed using an iframe */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155708892183!2d-73.98606622421315!3d40.75716183483984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1689258273617!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.5)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-xl bg-white dark:bg-slate-900">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit(onSubmit)} 
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          {...register("name", { required: true })}
                          className="h-12 bg-slate-50 dark:bg-slate-800/50"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            {...register("email", { required: true })}
                            className="h-12 bg-slate-50 dark:bg-slate-800/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            {...register("phone")}
                            className="h-12 bg-slate-50 dark:bg-slate-800/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="How can we help you today?" 
                          rows={5}
                          {...register("message", { required: true })}
                          className="resize-none bg-slate-50 dark:bg-slate-800/50"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 text-lg rounded-full shadow-lg shadow-primary/25 group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                      <div className="pt-4 flex justify-center gap-6 text-xs text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          Family-Friendly Care
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          Modern Digital Dentistry
                        </div>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 flex flex-col items-center text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully</h4>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                          Thank you for contacting us.<br />Our team will get back to you shortly.
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 rounded-full px-8"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
