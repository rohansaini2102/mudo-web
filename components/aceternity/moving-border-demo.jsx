"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <section className="py-20 px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Experience MUDO
        </h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
          Revolutionary mental health tracking with beautiful, intuitive interfaces
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <Button
            borderRadius="1.75rem"
            className="bg-black text-white border-blue-500/30"
            containerClassName="w-48 h-16"
            duration={4000}
          >
            🧠 Meet Dr. Maya
          </Button>
          
          <Button
            borderRadius="2rem"
            className="bg-black text-white border-blue-500/30"
            containerClassName="w-52 h-18"
            duration={3500}
          >
            📊 Track Your Mood
          </Button>
          
          <Button
            borderRadius="1.5rem"
            className="bg-black text-white border-blue-500/30"
            containerClassName="w-44 h-16"
            duration={4500}
          >
            👥 Join Circle
          </Button>
          
          <Button
            borderRadius="2.5rem"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-400/50"
            containerClassName="w-60 h-20"
            duration={3000}
          >
            🚀 Get Early Access
          </Button>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Button
              borderRadius="1rem"
              className="bg-black text-white border-blue-500/30"
              containerClassName="w-full max-w-sm h-24"
              duration={5000}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm">Real-time Insights</div>
              </div>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button
              borderRadius="1rem"
              className="bg-black text-white border-blue-500/30"
              containerClassName="w-full max-w-sm h-24"
              duration={4200}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-sm">Privacy First</div>
              </div>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">
            Hover over the buttons to see the moving blue borders in action
          </p>
        </div>
      </div>
    </section>
  );
}