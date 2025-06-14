"use client";
import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/moving-border";

export function WaitlistSpotlight() {

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center h-full px-8">
          <div className="mb-12">
            <TextGenerateEffect 
              words="Join the waitlist to get latest updates and early access to MUDO" 
              className="text-2xl md:text-4xl font-bold text-white text-center"
            />
          </div>
          
          <div className="w-full max-w-lg">
            <form action="https://formspree.io/f/mldnnrwn" method="POST" className="flex gap-4">
              <Button
                as="div"
                borderRadius="1.75rem"
                containerClassName="flex-1 h-16"
                className="bg-black/80 border-neutral-700 text-white relative"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full h-full bg-transparent text-white text-lg placeholder-white/60 focus:outline-none px-6"
                  required
                />
              </Button>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Join Waitlist
              </button>
            </form>
          </div>
      </div>
    </section>
  );
}