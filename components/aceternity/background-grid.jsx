"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGrid = ({ className, gridSize = 60 }) => {
  return (
    <div className={cn("absolute inset-0 h-full w-full", className)}>
      <div
        className="absolute inset-0 h-full w-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};