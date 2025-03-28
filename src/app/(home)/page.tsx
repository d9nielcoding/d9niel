import HeroSection from './HeroSection';
import IntroCardSection from './IntroCardSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <IntroCardSection />
    </div>
  );
}
