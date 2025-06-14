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
          
          <div className="w-full max-w-2xl">
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
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  className="w-full h-full bg-transparent text-white text-lg placeholder-white/60 focus:outline-none px-6"
                  required
                />
              </Button>
              <button
                type="submit"
                className="shadow-[inset_0_0_0_2px_#ffffff] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-white hover:text-black transition duration-200"
              >
                Join Waitlist
              </button>
            </form>
          </div>
      </div>
    </section>
  );
}