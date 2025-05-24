"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import CharacterDisplay from "@/components/character-display"
import ServiceTags from "@/components/service-tags"

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main container with rounded background */}
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-6 lg:p-12 shadow-2xl">
          {/* Header Navigation */}
          <header className="flex justify-between items-center mb-12 lg:mb-16">
            <div className="text-2xl lg:text-3xl font-bold text-gray-800">Portfolio</div>
            <Navigation onHover={setHoveredSection} />
          </header>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Hi, I'm a<br />
                  <span className="text-gray-800">problem</span>
                  <br />
                  <span className="text-gray-800">solver</span>
                </h1>
              </div>

              <ServiceTags />

              {/* Additional info that appears on hover */}
              {hoveredSection && (
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {hoveredSection.charAt(0).toUpperCase() + hoveredSection.slice(1)} Section
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {hoveredSection === "projects" && "Explore my latest work and creative solutions."}
                    {hoveredSection === "workex" && "Discover my professional journey and experience."}
                    {hoveredSection === "pricing" && "Find the perfect package for your needs."}
                    {hoveredSection === "contact" && "Let's connect and bring your ideas to life."}
                  </p>
                </div>
              )}
            </div>

            {/* Right Content - Character */}
            <div className="flex justify-center lg:justify-end">
              <CharacterDisplay hoveredSection={hoveredSection} />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 lg:mt-16 text-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
