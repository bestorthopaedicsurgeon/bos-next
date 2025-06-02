import { FeaturedSurgeonsSection } from "@/components/hero/FeaturedSurgeonsSection";
import { HeroSection } from "@/components/hero/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSurgeonsSection />
    </div>
  );
}
