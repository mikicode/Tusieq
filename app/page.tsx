"use client"

import { useState, useCallback } from "react"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import VideoSection from "@/components/video-section"
import ContactSection from "@/components/contact-section"
import RobloxSection from "@/components/roblox-section"
import Footer from "@/components/footer"
import IntroAnimation from "@/components/intro-animation"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <HeroSection />
      <TestimonialsSection />
      <VideoSection />
      <RobloxSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
