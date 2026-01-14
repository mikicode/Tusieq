"use client"

import { useState } from "react"
import { Check } from "lucide-react"

// Discord icon
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  )
}

// Roblox icon
function RobloxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.164 0L.16 18.928 18.836 24l5.004-18.928L5.164 0zm9.086 14.5l-4.753-1.228 1.238-4.67 4.753 1.228-1.238 4.67z" />
    </svg>
  )
}

function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <div
      className={`fixed top-6 right-6 z-50 bg-card border border-accent/50 text-foreground px-6 py-4 rounded-xl shadow-lg shadow-accent/10 transition-all duration-500 flex items-center gap-3 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <Check className="w-5 h-5 text-green-500" />
      <span className="font-medium">{message}</span>
    </div>
  )
}

export default function RobloxSection() {
  const [copied, setCopied] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const discord = "Tusiequ"

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discord)
    setCopied(true)
    setShowToast(true)
    setTimeout(() => {
      setCopied(false)
      setShowToast(false)
    }, 3000)
  }

  return (
    <>
      <Toast message="Skopiowano! Napisz do mnie i się dogadamy!" show={showToast} />

      <section className="py-24 px-4 relative">
        {/* Grid background like in the image */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-card/50 border border-border rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <RobloxIcon className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Sklep Roblox</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Posiadamy również sklep Roblox
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
              Sprzedajemy przedmioty do popularnych gier: <span className="text-foreground font-medium">Adopt Me</span>,{" "}
              <span className="text-foreground font-medium">Murder Mystery 2</span>,{" "}
              <span className="text-foreground font-medium">Pet Simulator 99</span> oraz{" "}
              <span className="text-foreground font-medium">Pet Simulator X</span>. Skontaktuj się z nami na Discordzie!
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleCopyDiscord}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] text-white font-semibold rounded-xl hover:bg-[#4752C4] hover:scale-105 transition-all active:scale-95"
              >
                {copied ? <Check className="w-5 h-5" /> : <DiscordIcon className="w-5 h-5" />}
                <span>Kontakt discord</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
