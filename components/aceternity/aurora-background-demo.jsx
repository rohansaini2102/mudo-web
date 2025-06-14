"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Finally, a mood app that actually gets you.
        </div>
        <div className="w-full px-4 py-4">
          <TextGenerateEffect 
            words="Drop a selfie, voice note, or emoji to track your mood in seconds. Discover what actually affects your mental health with AI insights, then chat with Dr. Maya - your personal AI therapist available 24/7." 
            className="font-extralight text-sm md:text-xl text-black dark:text-neutral-200 text-center max-w-5xl mx-auto"
          />
        </div>
        <button
          className="bg-white rounded-full w-fit text-black px-6 py-3 font-medium hover:scale-105 transition-transform">
          Join Waitlist
        </button>
      </motion.div>
    </AuroraBackground>
  );
}