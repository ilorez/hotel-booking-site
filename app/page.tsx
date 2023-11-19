import HeroSection from '@/components/global/HeroSection';
import RoomsSlider from '@/components/global/RoomsSlider';
import HomePageTopSection from '@/components/global/HomePageTopSection';
import HomePageHotelSection from '@/components/global/HomePageHotelSection';
import CafesRestaurantsSection from '@/components/global/CafesRestaurantsSection';
import ActivitiesSection from '@/components/global/ActivitiesSection';

export default function Home() {
  return (
    <div className="min-h-[200vh] font-josefin">
      <HeroSection />
      <HomePageTopSection />
      <HomePageHotelSection />
      <RoomsSlider />
      <ActivitiesSection />
      <CafesRestaurantsSection />
    </div>
  );
}
