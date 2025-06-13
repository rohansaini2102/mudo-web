"use client";
import { Brain, Heart, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MovingBorder } from "@/components/ui/moving-border";

export function GlowingGridDemo() {
  return (
    <section className="py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why Choose MUDO?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Experience the future of mental health tracking with features designed specifically for Gen Z
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Brain className="h-4 w-4 text-blue-400" />}
            title="AI Therapist - Dr. Maya"
            description="Your 24/7 mental health companion who learns your patterns and speaks your language. Available anytime, no appointment needed."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Heart className="h-4 w-4 text-purple-400" />}
            title="Smart Mood Tracking"
            description="Track emotions in seconds with emojis, voice notes, or photos. Automatic pattern detection makes insights effortless."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<TrendingUp className="h-4 w-4 text-green-400" />}
            title="Predictive Insights"
            description="Discover what actually affects your mental health with AI-powered correlations and personalized recommendations."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Users className="h-4 w-4 text-cyan-400" />}
            title="Anonymous Mood Circle"
            description="Share moods with friends without revealing identity. Support each other while keeping your circle small and safe."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Shield className="h-4 w-4 text-indigo-400" />}
            title="Privacy First Design"
            description="End-to-end encryption, no data selling ever, and you own your data. Built specifically for Gen Z mental health."
          />
        </ul>

      </div>
    </section>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-lg border-0 p-1 overflow-hidden">
        {/* Moving Border */}
        <div className="absolute inset-0 rounded-lg">
          <MovingBorder duration={20000} rx="12px" ry="12px">
            <div className="h-2 w-12 bg-[linear-gradient(90deg,transparent_0%,#3b82f6_20%,#60a5fa_50%,#3b82f6_80%,transparent_100%)] opacity-[0.8] rounded-full" />
          </MovingBorder>
        </div>
        
        {/* Glowing Effect */}
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
        />
        
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg bg-white/[0.12] backdrop-blur-2xl p-6 md:p-6 shadow-[0px_0px_50px_0px_rgba(255,255,255,0.1)] border border-white/[0.2] glass-effect">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-md border border-white/[0.25] bg-white/[0.15] backdrop-blur-sm p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-white/95 md:text-2xl/[1.875rem] drop-shadow-sm">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-white/80 md:text-base/[1.375rem] drop-shadow-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};