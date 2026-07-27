import { Hero } from "@/components/marketing/hero";
import { LogoTicker } from "@/components/marketing/logo-ticker";
import { FeatureCards } from "@/components/marketing/feature-cards";
import { ShowcaseGrid } from "@/components/marketing/showcase-grid";
import { InteractiveDemo } from "@/components/marketing/interactive-demo";
import { StatsBar } from "@/components/marketing/stats-bar";
import { Testimonials } from "@/components/marketing/testimonials";
import { Sponsors } from "@/components/marketing/sponsors";
import { CtaBanner } from "@/components/marketing/cta-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LogoTicker />
      <FeatureCards />
      <ShowcaseGrid />
      <InteractiveDemo />
      <StatsBar />
      <Testimonials />
      <Sponsors />
      <CtaBanner />
    </div>
  );
}
