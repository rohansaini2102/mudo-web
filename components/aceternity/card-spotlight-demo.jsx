"use client";
import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";

export function CardSpotlightDemo() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How MUDO Works
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              From tracking your mood to getting personalized support - here's your journey
            </p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
              <CardSpotlight className="h-96 w-96" color="#262626" radius={350}>  
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Step 1: Track Your Mood
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Multiple ways to capture how you're feeling
          <ul className="list-none mt-2">
            <li className="flex items-center py-1">
              <span className="text-green-500 mr-2">•</span>
              Quick emoji selection
            </li>
            <li className="flex items-center py-1">
              <span className="text-green-500 mr-2">•</span>
              Voice notes when you need to vent
            </li>
            <li className="flex items-center py-1">
              <span className="text-green-500 mr-2">•</span>
              Selfie mood capture
            </li>
            <li className="flex items-center py-1">
              <span className="text-green-500 mr-2">•</span>
              Text journaling
            </li>
          </ul>
          <p className="text-sm text-neutral-400 mt-2">Takes just 30 seconds!</p>
        </div>
              </CardSpotlight>

              <CardSpotlight className="h-96 w-96" color="#262626" radius={350}>
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Step 2: AI Analyzes & Learns
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Our AI understands your unique patterns
          <ul className="list-none mt-2">
            <li className="flex items-center py-1">
              <span className="text-blue-500 mr-2">•</span>
              Identifies mood triggers
            </li>
            <li className="flex items-center py-1">
              <span className="text-blue-500 mr-2">•</span>
              Tracks emotional patterns over time
            </li>
            <li className="flex items-center py-1">
              <span className="text-blue-500 mr-2">•</span>
              Correlates activities with feelings
            </li>
            <li className="flex items-center py-1">
              <span className="text-blue-500 mr-2">•</span>
              Discovers what impacts your mental health
            </li>
          </ul>
          <p className="text-sm text-neutral-400 mt-2">Personalized to YOU</p>
        </div>
              </CardSpotlight>

              <CardSpotlight className="h-96 w-96" color="#262626" radius={350}>
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Step 3: Get Insights & Support
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Transform data into actionable support
          <ul className="list-none mt-2">
            <li className="flex items-center py-1">
              <span className="text-emerald-500 mr-2">•</span>
              "You're 73% happier after morning walks"
            </li>
            <li className="flex items-center py-1">
              <span className="text-emerald-500 mr-2">•</span>
              Dr. Maya provides personalized advice
            </li>
            <li className="flex items-center py-1">
              <span className="text-emerald-500 mr-2">•</span>
              24/7 AI therapy based on YOUR data
            </li>
            <li className="flex items-center py-1">
              <span className="text-emerald-500 mr-2">•</span>
              Actionable coping strategies
            </li>
          </ul>
          <p className="text-sm text-neutral-400 mt-2">Better decisions, better days</p>
        </div>
              </CardSpotlight>
            </div>
        </div>
      </div>
    </section>
  );
}