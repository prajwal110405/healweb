import { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Comprehensive Dental Services | Smile Matters",
  description: "Explore our wide range of dental services including cosmetic dentistry, implants, and general care.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl text-muted-foreground">Comprehensive care for your entire family under one roof.</p>
        </div>
      </div>
      <Services />
      <AppointmentCTA />
    </>
  );
}
