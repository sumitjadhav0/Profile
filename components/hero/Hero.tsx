"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
      "
    >
      {/* Background */}

      <HeroBackground />

      {/* Foreground */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          items-center
          px-6
          pb-16
          pt-28
          lg:px-10
          lg:pt-32
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-4
          "
        >
          {/* Hero text */}

          <div className="relative z-40">
            <HeroContent />
          </div>

          {/* AI interface */}

          <div className="relative z-30">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}