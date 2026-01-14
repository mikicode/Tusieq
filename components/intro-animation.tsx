"use client"

import { useEffect, useState } from "react"

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"orbs" | "reveal">("orbs")

  useEffect(() => {
    // Short loading with animated orbs then reveal
    const timer = setTimeout(() => setPhase("reveal"), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (phase !== "reveal") return
    const timer = setTimeout(onComplete, 700)
    return () => clearTimeout(timer)
  }, [phase, onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-700 ${phase === "reveal" ? "opacity-0 scale-110 blur-lg" : "opacity-100 scale-100"}`}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large central orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 blur-[120px] animate-orb-pulse" />

        {/* Orbiting orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-white/20 blur-[80px] animate-orb-1" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/15 blur-[100px] animate-orb-2" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-white/15 blur-[90px] animate-orb-3" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-white/25 blur-[70px] animate-orb-4" />
        <div className="absolute top-1/2 left-1/5 w-32 h-32 rounded-full bg-accent/10 blur-[60px] animate-orb-5" />
      </div>

      {/* Center loading indicator */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-3 h-3 rounded-full bg-white animate-ping" />
      </div>
    </div>
  )
}
