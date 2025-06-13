"use client";
import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";

export function CardSpotlightDemo() {
  return (
    <div className="flex gap-8 justify-center items-center py-20">
      <CardSpotlight className="h-96 w-96">  
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          🧠 AI Therapist
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Meet Dr. Maya, your 24/7 mental health companion who understands your journey
          <ul className="list-none mt-2">
            <li className="flex items-center py-1">
              <span className="text-green-500 mr-2">✓</span>
              Available anytime, no appointment needed
            </li>
            <li className="flex items-center py-1">
              <span className="text-green-500 mr-2">✓</span>
              Learns your unique patterns over time
            </li>
            <li className="flex items-center py-1">
              <span className="text-green-500 mr-2">✓</span>
              Zero judgment, total privacy
            </li>
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Hover to reveal the spotlight effect
        </p>
      </CardSpotlight>

      <CardSpotlight className="h-96 w-96" color="#3b82f6" radius={200}>
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          📊 Smart Tracking
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Track your emotions in seconds, your way
          <ul className="list-none mt-2">
            <li className="flex items-center py-1">
              <span className="text-blue-500 mr-2">✓</span>
              Quick emoji selections
            </li>
            <li className="flex items-center py-1">
              <span className="text-blue-500 mr-2">✓</span>
              Voice notes when you need to vent
            </li>
            <li className="flex items-center py-1">
              <span className="text-blue-500 mr-2">✓</span>
              Automatic pattern detection
            </li>
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Smaller radius (200px)
        </p>
      </CardSpotlight>

      <CardSpotlight className="h-96 w-96" color="#10b981" radius={500}>
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          👥 Mood Circle
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Anonymous support from your real friends
          <ul className="list-none mt-2">
            <li className="flex items-center py-1">
              <span className="text-emerald-500 mr-2">✓</span>
              Share moods without revealing identity
            </li>
            <li className="flex items-center py-1">
              <span className="text-emerald-500 mr-2">✓</span>
              See when friends need support
            </li>
            <li className="flex items-center py-1">
              <span className="text-emerald-500 mr-2">✓</span>
              Keep your circle small and safe
            </li>
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Larger radius (500px)
        </p>
      </CardSpotlight>
    </div>
  );
}