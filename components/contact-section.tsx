"use client"

import { Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

// Discord icon component
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  )
}

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedDiscord, setCopiedDiscord] = useState(false)
  const [hoveredEmail, setHoveredEmail] = useState(false)
  const [hoveredDiscord, setHoveredDiscord] = useState(false)

  const email = "tusieq@fanth.pl"
  const discord = "Tusiequ"

  const copyToClipboard = (text: string, type: "email" | "discord") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedDiscord(true)
      setTimeout(() => setCopiedDiscord(false), 2000)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">Porozmawiajmy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Masz projekt? Chętnie pomogę w realizacji Twojego pomysłu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email card */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredEmail(true)}
            onMouseLeave={() => setHoveredEmail(false)}
          >
            <button
              onClick={() => copyToClipboard(email, "email")}
              className={`w-full bg-card border border-border rounded-2xl p-8 transition-all duration-300 text-left group ${
                hoveredEmail ? "border-accent/50 scale-[1.02] shadow-[0_0_20px_rgba(255,182,193,0.2)]" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4 text-sm">Preferowany sposób kontaktu dla większych projektów</p>
              <div className="flex items-center gap-3">
                <code className="flex-1 px-4 py-3 bg-secondary rounded-lg text-foreground font-mono text-sm">
                  {email}
                </code>
                <div className="p-3 bg-secondary rounded-lg">
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </button>
            <div
              className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-accent transition-all duration-300 ${hoveredEmail ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              Kliknij, aby skopiować maila!
            </div>
          </div>

          {/* Discord card */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredDiscord(true)}
            onMouseLeave={() => setHoveredDiscord(false)}
          >
            <button
              onClick={() => copyToClipboard(discord, "discord")}
              className={`w-full bg-card border border-border rounded-2xl p-8 transition-all duration-300 text-left group ${
                hoveredDiscord ? "border-[#5865F2]/50 scale-[1.02] shadow-[0_0_20px_rgba(88,101,242,0.2)]" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-[#5865F2]/10 flex items-center justify-center mb-6 group-hover:bg-[#5865F2]/20 transition-colors">
                <DiscordIcon className="w-7 h-7 text-[#5865F2]" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Discord</h3>
              <p className="text-muted-foreground mb-4 text-sm">Szybki kontakt i rozmowy w czasie rzeczywistym</p>
              <div className="flex items-center gap-3">
                <code className="flex-1 px-4 py-3 bg-secondary rounded-lg text-foreground font-mono text-sm">
                  {discord}
                </code>
                <div className="p-3 bg-secondary rounded-lg">
                  {copiedDiscord ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </button>
            <div
              className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[#5865F2] transition-all duration-300 ${hoveredDiscord ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              Kliknij, aby skopiować nazwe!
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Zazwyczaj odpowiadam w ciągu <span className="text-foreground font-medium">24 godzin</span>
          </p>
        </div>
      </div>
    </section>
  )
}
