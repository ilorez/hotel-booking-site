import HeroSection from '@/components/global/HeroSection';
import HomePageTopSection from '@/components/global/HomePageTopSection';

export default function Home() {
  return (
    <div className="min-h-[200vh] font-josefin">
      <HeroSection />
      <HomePageTopSection />
    </div>
  );
}
