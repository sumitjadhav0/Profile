"use client";

import AIOrb from "./AIOrb";
import AIStatus from "./AIStatus";
import CodeTerminal from "./CodeTerminal";
import FloatingTech from "./FloatingTech";
import NeuralNetwork from "./NeuralNetwork";

export default function HeroVisual() {
  return (
    <div
      className="
        relative
        flex
        min-h-[500px]
        items-center
        justify-center
        lg:min-h-[650px]
      "
    >
      <NeuralNetwork />

      <AIOrb />

      <FloatingTech />

      <AIStatus />

      <CodeTerminal />
    </div>
  );
}