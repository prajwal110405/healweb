import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MeetDoctor } from "@/components/sections/MeetDoctor";
import { Services } from "@/components/sections/Services";
import { SmileGallery } from "@/components/sections/SmileGallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { InsuranceFinancing } from "@/components/sections/InsuranceFinancing";
import { PatientResources } from "@/components/sections/PatientResources";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { Contact } from "@/components/sections/Contact";


export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Hero />
      <About />
      <MeetDoctor />
      <Services />
      <SmileGallery />
      <WhyChooseUs />
      <InsuranceFinancing />
      <Testimonials />
      <PatientResources />
      <AppointmentCTA />
      <Contact />
    </>
  );
}
