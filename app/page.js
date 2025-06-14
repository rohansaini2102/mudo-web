import { MudoNavbar } from "@/components/mudo-navbar";
import { AuroraBackgroundDemo } from "@/components/aceternity/aurora-background-demo";
import { ThreeDCardDemo } from "@/components/aceternity/3d-card-demo";
import { InsightsCardDemo } from "@/components/aceternity/insights-card-demo";
import { CanvasRevealEffectDemo } from "@/components/aceternity/canvas-reveal-effect-demo";
import { AnimatedTooltipPreview } from "@/components/aceternity/animated-tooltip-preview";
import { MudoSpotlightSections } from "@/components/mudo-spotlight-sections";

export default function Home() {
  return (
    <>
      <MudoNavbar />
      <main>
        <AuroraBackgroundDemo />
        <section id="features" className="py-20">
          <div className="flex flex-wrap justify-center gap-8 px-4">
            <div id="ai-therapist">
              <ThreeDCardDemo />
            </div>
            <InsightsCardDemo />
          </div>
        </section>
        <CanvasRevealEffectDemo />
        <section id="testimonials">
          <AnimatedTooltipPreview />
        </section>
        <MudoSpotlightSections />
      </main>
    </>
  );
}