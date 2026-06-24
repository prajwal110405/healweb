"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Expert Dentists",
  "Digital Diagnostics",
  "Pain-Free Procedures",
  "Flexible Scheduling",
];

const STATS = [
  { label: "Happy Patients", value: 5000, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Treatments", value: 20, suffix: "+" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/80 font-semibold tracking-wide uppercase text-sm mb-3"
            >
              Why Choose Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              Exceptional Care, <br /> Premium Experience.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80 leading-relaxed mb-8"
            >
              We combine state-of-the-art dental technology with a warm, welcoming environment. 
              Our commitment to excellence ensures that every visit is comfortable, efficient, 
              and delivers outstanding results.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-white" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center flex flex-col justify-center items-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
