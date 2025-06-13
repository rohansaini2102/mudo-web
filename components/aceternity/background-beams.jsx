"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-neutral-50 to-neutral-100 dark:via-neutral-900 dark:to-neutral-800",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="pulse"
            x1="50%"
            x2="50%"
            y1="40%"
            y2="80%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="50%" stopColor="#18CCFC" stopOpacity="1" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
        </defs>
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="url(#pulse)"
            strokeOpacity="0.8"
            strokeWidth="0.25"
            fill="none"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </svg>
    </div>
  );
};