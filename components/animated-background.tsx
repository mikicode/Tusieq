"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated floating orbs */}
      <div className="animate-float-1 absolute top-[15%] left-[10%] w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div
        className="animate-float-2 absolute top-[60%] right-[15%] w-96 h-96 bg-white/8 rounded-full blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="animate-float-3 absolute top-[30%] right-[30%] w-48 h-48 bg-white/6 rounded-full blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-float-4 absolute bottom-[20%] left-[25%] w-72 h-72 bg-white/7 rounded-full blur-[90px] animate-pulse-glow"
        style={{ animationDelay: "-1s" }}
      />
      <div
        className="animate-float-5 absolute top-[5%] right-[5%] w-40 h-40 bg-white/5 rounded-full blur-[70px] animate-pulse-glow"
        style={{ animationDelay: "-3s" }}
      />
    </div>
  )
}
