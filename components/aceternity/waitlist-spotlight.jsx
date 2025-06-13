"use client";
import React, { useState } from "react";
import { CardSpotlight } from "../ui/card-spotlight";

export function WaitlistSpotlight() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <CardSpotlight 
        className="h-screen w-full bg-black border-none p-0" 
        color="#262626"
        radius={350}
      >
        <div className="relative z-20 text-center flex flex-col items-center justify-center h-full px-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-12">
            Join the waitlist
          </h1>
          
          {!isSubmitted ? (
            <div className="space-y-8 w-full max-w-md">
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-8 py-6 bg-black border border-neutral-600 rounded-xl text-white text-lg placeholder-neutral-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-6 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Early Access
                </button>
              </form>
              
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-indigo-400 text-8xl mb-6">✓</div>
              <h2 className="text-3xl font-bold text-white">You're in!</h2>
            </div>
          )}
        </div>
      </CardSpotlight>
    </section>
  );
}