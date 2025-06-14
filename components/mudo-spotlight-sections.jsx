"use client";
import React from "react";
import { ConstantSpotlight } from "@/components/ui/constant-spotlight";
import { CardSpotlightDemo } from "@/components/aceternity/card-spotlight-demo";
import { GlowingGridDemo } from "@/components/aceternity/glowing-grid-demo";
import { WaitlistSpotlight } from "@/components/aceternity/waitlist-spotlight";

export function MudoSpotlightSections() {
  return (
    <ConstantSpotlight 
      className="w-full bg-black" 
      color="#262626"
      radius={600}
    >
        <div className="relative z-20">
          {/* How MUDO Works Section */}
          <section id="how-it-works">
            <CardSpotlightDemo />
          </section>
          
          {/* Why Choose MUDO Section */}
          <section id="why-choose-mudo">
            <GlowingGridDemo />
          </section>
          
          {/* Join Waitlist Section */}
          <section id="waitlist">
            <WaitlistSpotlight />
          </section>
        </div>
    </ConstantSpotlight>
  );
}