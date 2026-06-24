import { Metadata } from "next";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Dental Implants | Smile Matters",
  description: "Permanent, natural-looking tooth replacement with advanced dental implants.",
};

export default function DentalImplantsPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Dental Implants</h1>
          <p className="text-xl text-muted-foreground">Restore your smile's function and aesthetics with permanent implant solutions.</p>
        </div>
      </div>
      <WhyChooseUs />
      <AppointmentCTA />
    </>
  );
}
