"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ReactCompareSlider = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
  { ssr: false }
);
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Teeth Whitening",
    before: "/images/gallery/whitening-before.png",
    after: "/images/gallery/whitening-after.png",
  },
  {
    id: 2,
    title: "Porcelain Veneers",
    before: "/images/gallery/veneers-before.png",
    after: "/images/gallery/veneers-after.png",
  },
  {
    id: 3,
    title: "Dental Implants",
    before: "/images/gallery/implants-before.png",
    after: "/images/gallery/implants-after.png",
  },
  {
    id: 4,
    title: "Invisalign Orthodontics",
    before: "/images/gallery/ortho-before.png",
    after: "/images/gallery/ortho-after.png",
  },
];

export function SmileGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="smile-gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            Smile Transformations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Real results from real patients.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Slide left and right to see the stunning before and after transformations of our cosmetic and restorative dental treatments.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group rounded-3xl overflow-hidden shadow-lg border border-border/50 bg-slate-50 dark:bg-slate-900/50"
            >
              <div 
                className="cursor-pointer relative"
                onClick={() => setSelectedItem(item)}
              >
                <ReactCompareSlider
                  itemOne={<div className="relative w-full h-full"><Image src={item.before} alt={`${item.title} Before`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                  itemTwo={<div className="relative w-full h-full"><Image src={item.after} alt={`${item.title} After`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm pointer-events-none tracking-wide uppercase">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm pointer-events-none tracking-wide uppercase">
                  After
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <button 
                  onClick={() => setSelectedItem(item)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View Full Screen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none">
          {selectedItem && (
            <div className="w-full aspect-video relative">
              <ReactCompareSlider
                itemOne={<div className="relative w-full h-full"><Image src={selectedItem.before} alt={`${selectedItem.title} Before`} fill className="object-cover" sizes="100vw" /></div>}
                itemTwo={<div className="relative w-full h-full"><Image src={selectedItem.after} alt={`${selectedItem.title} After`} fill className="object-cover" sizes="100vw" /></div>}
                className="w-full h-full"
              />
              <div className="absolute top-6 left-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg pointer-events-none tracking-wide uppercase">
                Before
              </div>
              <div className="absolute top-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg pointer-events-none tracking-wide uppercase">
                After
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
