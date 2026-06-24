"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { openBookingModal } from "@/components/BookingModal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Smile Gallery", href: "/#smile-gallery" },
  { name: "Patient Resources", href: "/#patient-resources" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      setIsOpen(false);
      const targetId = href.replace("/", "");
      scrollToSection(targetId);
      return;
    }
    // Otherwise let standard Next.js navigation handle it
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`relative w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-background/80 backdrop-blur-sm py-2"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="Smile Matters Logo" 
              width={56} 
              height={56} 
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Smile Matters
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={openBookingModal} className="rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2 text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors flex items-center justify-center">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              
              <div className="flex items-center gap-3 mt-6 mb-8">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                  <Image 
                    src="/images/logo.png" 
                    alt="Smile Matters Logo" 
                    width={44} 
                    height={44} 
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Smile Matters
                </span>
              </div>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button onClick={() => { setIsOpen(false); openBookingModal(); }} className="mt-4 rounded-full w-full">
                  Book Appointment
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
