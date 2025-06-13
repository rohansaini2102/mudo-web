"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  className,
}) {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      
      // Check if mouse is within proximity
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      
      const maxDistance = Math.max(rect.width, rect.height) / 2;
      const normalizedDistance = distance / maxDistance;
      
      setIsActive(normalizedDistance <= (proximity / 100));
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled, proximity]);

  if (disabled) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
        isActive && glow ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-2xl md:rounded-3xl"
        style={{
          background: `radial-gradient(${spread}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl md:rounded-3xl"
        style={{
          background: `radial-gradient(${spread * 0.5}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent 50%)`,
        }}
      />
    </div>
  );
}