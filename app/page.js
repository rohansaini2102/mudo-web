import { MudoNavbar } from "@/components/mudo-navbar";
import { AuroraBackgroundDemo } from "@/components/aceternity/aurora-background-demo";
import { ThreeDCardDemo } from "@/components/aceternity/3d-card-demo";
import { CardSpotlightDemo } from "@/components/aceternity/card-spotlight-demo";
import { WaitlistSpotlight } from "@/components/aceternity/waitlist-spotlight";
import { GlowingGridDemo } from "@/components/aceternity/glowing-grid-demo";

export default function Home() {
  return (
    <>
      <MudoNavbar />
      <main>
        <AuroraBackgroundDemo />
        <section className="py-20">
          <ThreeDCardDemo />
        </section>
        <CardSpotlightDemo />
        <GlowingGridDemo />
        <WaitlistSpotlight />
      </main>
    </>
  );
}