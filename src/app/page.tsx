import { BlogSection } from "@/components/BlogSection";
import { CompanyMissionSection } from "@/components/CompanyMissionSection";
import { FalconVersionsSection } from "@/components/FalconVersionsSection";
import { HeroSection } from "@/components/HeroSection";
import { MainAchievementsSection } from "@/components/MainAchievementsSection";
import { OurEquipmentSection } from "@/components/OurEquipmentSection";
import { PageLayout } from "@/components/PageLayout";
import { TypesOfEquipmentSection } from "@/components/TypesOfEquipmentSection";
import { WelcomeSection } from "@/components/WelcomeSection";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <WelcomeSection />
      <TypesOfEquipmentSection />
      <FalconVersionsSection />
      <OurEquipmentSection />
      <CompanyMissionSection />
      <MainAchievementsSection />
      <BlogSection />
    </PageLayout>
  );
}
