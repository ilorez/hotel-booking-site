import HeroSection from "@/components/global/HeroSection";
import HomePageTopSection from "@/components/global/HomePageTopSection";
import Navbar from "@/components/global/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[200vh] ">
      <HeroSection />
      <HomePageTopSection />
    </div>
  );
}
