import { Metadata } from "next";
import { PatientResources } from "@/components/sections/PatientResources";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Patient Resources & Forms | Smile Matters",
  description: "Access new patient forms, visit guides, and our secure patient portal.",
};

export default function PatientResourcesPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Patient Resources</h1>
          <p className="text-xl text-muted-foreground">Everything you need for a smooth and comfortable visit.</p>
        </div>
      </div>
      <PatientResources />
      <Contact />
    </>
  );
}
