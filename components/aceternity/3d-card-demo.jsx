"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function ThreeDCardDemo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          <img src="/images/logo.png" alt="MUDO" className="h-6 w-6 inline mr-2" />
          AI Therapist - Dr. Maya
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Your 24/7 mental health companion who remembers your journey and speaks your language
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div 
            className="h-60 w-full bg-gradient-to-br from-gray-800 to-black rounded-xl group-hover/card:shadow-xl flex items-center justify-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300"
              style={{
                backgroundColor: "#262626",
                maskImage: useMotionTemplate`
                  radial-gradient(
                    350px circle at ${mouseX}px ${mouseY}px,
                    white,
                    transparent 80%
                  )
                `,
                opacity: isHovering ? 1 : 0,
              }}
            >
              {isHovering && (
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                  colors={[
                    [128, 128, 128],
                    [64, 64, 64],
                  ]}
                  dotSize={3}
                />
              )}
            </motion.div>
            <div className="text-center text-white p-8 relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                  <Image 
                    src="/images/therapist.png"
                    alt="Dr. Maya - AI Therapist"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Maya</h3>
              <p className="text-sm opacity-90">Available anytime, no appointment needed</p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="#"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline">
            Learn more →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs font-bold transition-colors">
            Join Early Access
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}