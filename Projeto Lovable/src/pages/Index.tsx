import AppHeader from "@/components/AppHeader";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import StatusCard from "@/components/StatusCard";
import CommunitySection from "@/components/CommunitySection";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      <HeroSection />
      <StatusCard />
      <QuickActions />
      <CommunitySection />
      <BottomNavigation />
    </div>
  );
};

export default Index;
