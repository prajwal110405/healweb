import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Same-Day Emergency Dentist | Smile Matters",
  description: "Get immediate dental care for toothaches, broken teeth, and dental emergencies. Same-day appointments available.",
};

export default function EmergencyDentistPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-block animate-pulse text-4xl mb-4">🚨</div>
          <h1 className="text-5xl font-bold mb-6">Emergency Dental Care</h1>
          <p className="text-xl text-muted-foreground mb-8">If you are experiencing severe pain, bleeding, or have lost a tooth, please call us immediately at (555) 123-4567.</p>
          <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20 text-primary font-medium">
            We reserve time in our daily schedule specifically for emergency patients. Don't wait in pain.
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
