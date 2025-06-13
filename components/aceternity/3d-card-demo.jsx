"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          🧠 AI Therapist - Dr. Maya
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Your 24/7 mental health companion who remembers your journey and speaks your language
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="h-60 w-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl group-hover/card:shadow-xl flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="text-6xl mb-4">🧠</div>
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