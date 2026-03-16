import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import ProgramContent from "@/components/sections/ProgramContent";
import Authority from "@/components/sections/Authority";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <WhoIsThisFor />
      <ProgramContent />
      <Authority />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <WhatsAppButton />
    </>
  );
}
