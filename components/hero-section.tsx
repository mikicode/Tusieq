"use client"

import type React from "react"

import { useEffect, useState } from "react"
import AnimatedBackground from "./animated-background"
import { Code, Server, Film, Globe } from "lucide-react"

const services = [
  { icon: Code, title: "Pluginy Minecraft", desc: "Niestandardowe rozwiązania dla Twojego serwera" },
  { icon: Server, title: "Serwery MC", desc: "Profesjonalna konfiguracja i optymalizacja" },
  { icon: Film, title: "Nagrywki Eventowe", desc: "Igrzyska śmierci, eventy i turnieje" },
  { icon: Globe, title: "Strony WWW", desc: "Nowoczesne strony na zamówienie" },
]

const typingSequence = ["T", "Tu", "Tus", "Tusi", "Tusie", "Tusieq"]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedName, setTypedName] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    let index = 0
    const forward = () => {
      if (index < typingSequence.length) {
        setTypedName(typingSequence[index])
        index++
        setTimeout(forward, 150)
      } else {
        setTypingComplete(true)
        setTimeout(() => setShowCursor(false), 1500)
      }
    }

    setTimeout(forward, 800)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <AnimatedBackground />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">Dostępny do współpracy</span>
        </div>

        {/* Main heading with typing animation */}
        <h1
          className={`text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="text-foreground">Cześć, jestem </span>
          <span className="inline-flex items-baseline">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-300 to-accent">
              {typedName || "T"}
            </span>
            {typingComplete && <span className="text-foreground">.</span>}
            {showCursor && <span className="w-1 h-[0.8em] bg-accent animate-pulse ml-1 inline-block" />}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Developer & Minecraft Expert. Tworzę <span className="text-foreground font-medium">pluginy</span>, konfiguruję{" "}
          <span className="text-foreground font-medium">serwery</span>, realizuję{" "}
          <span className="text-foreground font-medium">nagrywki eventowe</span> i buduję{" "}
          <span className="text-foreground font-medium">strony internetowe</span>.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
          >
            Napisz do mnie
          </a>
          <a
            href="#videos"
            onClick={(e) => handleSmoothScroll(e, "videos")}
            className="px-8 py-4 bg-secondary border border-border text-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
          >
            Zobacz realizacje
          </a>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card/50 border border-border rounded-2xl hover:bg-card/80 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <service.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
