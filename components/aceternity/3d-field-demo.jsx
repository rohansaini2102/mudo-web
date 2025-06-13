"use client";
import React, { useState } from "react";
import { ThreeDField } from "../ui/3d-field";

export function ThreeDFieldDemo() {
  const [theme, setTheme] = useState('black');

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-900 to-black p-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive 3D Experience
          </h2>
          <p className="text-neutral-400">
            Hover over the cards to see advanced Three.js effects in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <ThreeDField theme={theme}>
            <h3 className="text-2xl font-bold mb-4">
              🌟 Particle Field
            </h3>
            <p className="text-neutral-300 mb-4">
              Watch as 200+ floating particles respond to your mouse movement with physics-based attraction.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>
                Mouse-following particle system
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>
                Wave motion animations
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>
                Boundary wrapping effects
              </li>
            </ul>
          </ThreeDField>

          <ThreeDField theme={theme}>
            <h3 className="text-2xl font-bold mb-4">
              🔮 Morphing Geometry
            </h3>
            <p className="text-neutral-300 mb-4">
              Experience dynamic 3D shapes that transform and scale based on hover interactions.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Icosahedron wireframe geometry
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Real-time scaling animations
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Hover-triggered transformations
              </li>
            </ul>
          </ThreeDField>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ThreeDField theme={theme} className="h-64">
            <h4 className="text-lg font-bold mb-2">⚡ Fast Render</h4>
            <p className="text-sm opacity-80">
              Optimized WebGL rendering with 60fps performance
            </p>
          </ThreeDField>

          <ThreeDField theme={theme} className="h-64">
            <h4 className="text-lg font-bold mb-2">🎨 Dynamic Colors</h4>
            <p className="text-sm opacity-80">
              Theme-aware particle colors and materials
            </p>
          </ThreeDField>

          <ThreeDField theme={theme} className="h-64">
            <h4 className="text-lg font-bold mb-2">🖱️ Interactive</h4>
            <p className="text-sm opacity-80">
              Real-time mouse tracking and physics responses
            </p>
          </ThreeDField>
        </div>
      </div>

      {/* Theme Toggle in Bottom Right */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-neutral-800 rounded-full p-2 border border-neutral-700 shadow-2xl">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme('black')}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                theme === 'black' 
                  ? 'bg-black border-white shadow-lg scale-110' 
                  : 'bg-black border-neutral-600 hover:border-neutral-400'
              }`}
              title="Black Theme"
            />
            <button
              onClick={() => setTheme('white')}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                theme === 'white' 
                  ? 'bg-white border-black shadow-lg scale-110' 
                  : 'bg-white border-neutral-400 hover:border-neutral-200'
              }`}
              title="White Theme"
            />
          </div>
        </div>
      </div>
    </section>
  );
}