import { BlogSection } from "@/components/BlogSection";
import { CompanyMissionSection } from "@/components/CompanyMissionSection";
import { FalconVersionsSection } from "@/components/FalconVersionsSection";
import { HeroSection } from "@/components/HeroSection";
import { MainAchievementsSection } from "@/components/MainAchievementsSection";
// import { OurEquipmentSection } from "@/components/OurEquipmentSection";
import { TypesOfEquipmentSection } from "@/components/TypesOfEquipmentSection";
import { WelcomeSection } from "@/components/WelcomeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <TypesOfEquipmentSection />
      <FalconVersionsSection />
      {/* <OurEquipmentSection /> */}
      <CompanyMissionSection />
      <MainAchievementsSection />
      <BlogSection />
    </>
  );
}
