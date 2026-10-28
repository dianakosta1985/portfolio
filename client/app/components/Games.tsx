"use client";
import React, { useState } from "react";
import { playfair } from "../../utils/fonts";
import AnimatedSection from "./layout/AnimatedSection";
import { PageProps } from "@/utils/types";
import TicTacToe from "./games/TicTacToe";
import Memory from "./games/Memory";
import WhackAMole from "./games/WhackAMole";

const games = [
  { name: "Tic-tac-toe", emoji: "❌⭕", description: "Classic X and O for two players.", Component: TicTacToe },
  { name: "Memory", emoji: "🃏", description: "Flip cards and find every pair.", Component: Memory },
  { name: "Whack-a-Mole", emoji: "🐹", description: "30 seconds. How many can you hit?", Component: WhackAMole },
];

const Games = (props: PageProps) => {
  const { title, description } = props;
  const [selected, setSelected] = useState(0);
  const { Component } = games[selected];

  return (
    <AnimatedSection
      className="flex flex-col min-h-[75vh] lg:min-h-[85vh] px-4 py-10 sm:p-10"
      id="games"
    >
      <h1
        className={`text-4xl md:text-6xl pb-2 font-bold mb-2 ${playfair.className}`}
      >
        {title}
      </h1>
      <p className="text-lg md:text-xl font-light mb-8">{description}</p>
      <div className="grid gap-4 md:grid-cols-3 mb-10">
        {games.map(({ name, emoji, description }, i) => (
          <button
            key={name}
            onClick={() => setSelected(i)}
            className={`text-left rounded-lg border p-5 transition-transform hover:scale-105 ${
              selected === i ? "border-blue-400 bg-slate-800" : "border-slate-700"
            }`}
          >
            <div className="text-4xl mb-3">{emoji}</div>
            <h2 className="text-xl font-medium mb-1">{name}</h2>
            <p className="font-light text-sm">{description}</p>
          </button>
        ))}
      </div>
      {/* key resets the game when switching */}
      <Component key={selected} />
    </AnimatedSection>
  );
};

export default Games;
