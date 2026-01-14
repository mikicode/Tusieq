"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

const featuredVideo = {
  id: "9VkErFm42Vk",
  title: 'Igrzyska Śmierci - "Wykonanie nagrywki po stronie technicznej"',
}

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="videos" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">Zrealizowane nagrywki</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zobacz moje najnowsze realizacje eventów i nagrywek na serwerach Minecraft
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="w-full max-w-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`relative aspect-video rounded-2xl overflow-hidden bg-card border-2 transition-all duration-300 ${
                isHovered ? "border-accent shadow-[0_0_30px_rgba(255,182,193,0.4)] scale-[1.02]" : "border-border"
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-minecraft text-foreground mb-2">{featuredVideo.title}</h3>
              <a
                href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
              >
                <span>Otwórz na YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
