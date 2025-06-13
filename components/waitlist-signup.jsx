"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlowingButton } from "./aceternity/glowing-button";
import { cn } from "@/lib/utils";

export const WaitlistSignup = ({ className }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("text-center", className)}
      >
        <div className="text-green-400 text-xl font-semibold mb-2">
          🎉 You're in!
        </div>
        <p className="text-gray-400">
          Welcome to the MUDO early access list. We'll notify you when we launch!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={cn("flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="relative flex-1 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 backdrop-blur-sm"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      <GlowingButton
        type="submit"
        disabled={isLoading}
        className="whitespace-nowrap"
      >
        {isLoading ? "Joining..." : "Get Early Access"}
      </GlowingButton>
    </motion.form>
  );
};