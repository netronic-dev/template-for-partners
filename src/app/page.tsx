import { HeroSection } from "@/components/HeroSection";
import { TypesOfEquipmentSection } from "@/components/TypesOfEquipmentSection";
import { WelcomeSection } from "@/components/WelcomeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <TypesOfEquipmentSection />
    </>
  );
}
