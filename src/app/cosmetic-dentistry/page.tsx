import { Metadata } from "next";
import { SmileGallery } from "@/components/sections/SmileGallery";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry & Veneers | Smile Matters",
  description: "Transform your smile with our premium cosmetic dentistry services, including porcelain veneers and professional teeth whitening.",
};

export default function CosmeticDentistryPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Cosmetic Dentistry</h1>
          <p className="text-xl text-muted-foreground">Achieve the flawless, confident smile you've always dreamed of.</p>
        </div>
      </div>
      <SmileGallery />
      <AppointmentCTA />
    </>
  );
}
