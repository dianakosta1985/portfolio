"use client";
import { useEffect, useState } from "react";
import { Button, Stat } from "./ui";
import { loadNumber, saveNumber } from "./storage";

const EMOJIS = ["🚀", "🌈", "🍕", "🎸", "🐙", "🌵", "🎲", "🦊", "🍩", "⚡", "🐳", "🌻", "🎈", "🍉", "🦄", "🔮", "🐝", "🍀"];

type Card = { id: number; emoji: string; matched: boolean };

const newDeck = (pairs: number): Card[] =>
  [...EMOJIS.slice(0, pairs), ...EMOJIS.slice(0, pairs)]
    .map((emoji) => ({ emoji, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ emoji }, id) => ({ id, emoji, matched: false }));

const SIZES = { small: { pairs: 8, cols: 4 }, large: { pairs: 18, cols: 6 } };

const Memory = () => {
  const [size, setSize] = useState<keyof typeof SIZES>("small");
  const [deck, setDeck] = useState(() => newDeck(SIZES.small.pairs));
  const [open, setOpen] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const bestKey = `memory-best-${size}`;
  const [best, setBest] = useState(() => loadNumber(bestKey));

  const won = deck.every((card) => card.matched);

  useEffect(() => {
    if (!started || won) return;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [started, won]);

  useEffect(() => {
    if (!won || !started) return;
    if (best === null || moves < best) {
      setBest(moves);
      saveNumber(bestKey, moves);
    }
    // Only react to finishing a game
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won]);

  useEffect(() => {
    if (open.length !== 2) return;
    const [a, b] = open;
    if (deck[a].emoji === deck[b].emoji) {
      setDeck((d) => d.map((card, i) => (i === a || i === b ? { ...card, matched: true } : card)));
      setOpen([]);
      return;
    }
    const timer = setTimeout(() => setOpen([]), 800);
    return () => clearTimeout(timer);
  }, [open, deck]);

  const flip = (i: number) => {
    if (open.length === 2 || open.includes(i) || deck[i].matched) return;
    setStarted(true);
    if (open.length === 1) setMoves((m) => m + 1);
    setOpen([...open, i]);
  };

  const restart = (nextSize = size) => {
    setSize(nextSize);
    setDeck(newDeck(SIZES[nextSize].pairs));
    setOpen([]);
    setMoves(0);
    setSeconds(0);
    setStarted(false);
    setBest(loadNumber(`memory-best-${nextSize}`));
  };

  const time = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-2">
        <Button active={size === "small"} onClick={() => restart("small")}>4 × 4</Button>
        <Button active={size === "large"} onClick={() => restart("large")}>6 × 6</Button>
      </div>

      <div className="flex gap-3">
        <Stat label="Moves" value={moves} />
        <Stat label="Time" value={time} />
        <Stat label="Best" value={best ?? "–"} />
      </div>

      {won && <p className="text-lg font-semibold">All pairs found in {moves} moves! 🎉</p>}

      <div
        className="grid gap-2 sm:gap-3"
        style={{ gridTemplateColumns: `repeat(${SIZES[size].cols}, minmax(0, 1fr))` }}
      >
        {deck.map((card, i) => {
          const faceUp = card.matched || open.includes(i);
          return (
            <button
              key={card.id}
              onClick={() => flip(i)}
              aria-label={faceUp ? card.emoji : "Hidden card"}
              className={`flex items-center justify-center rounded-xl ring-1 transition ${
                size === "small" ? "size-[4.5rem] text-4xl sm:size-[5.5rem]" : "size-12 text-2xl sm:size-16 sm:text-3xl"
              } ${
                card.matched
                  ? "bg-emerald-400/20 ring-emerald-300/40"
                  : faceUp
                    ? "bg-white/15 ring-white/30"
                    : "bg-gradient-to-br from-pink-500/70 to-indigo-500/70 ring-white/10 hover:brightness-110"
              }`}
            >
              {faceUp && <span className="animate-pop">{card.emoji}</span>}
            </button>
          );
        })}
      </div>

      <Button onClick={() => restart()}>New game</Button>
    </div>
  );
};

export default Memory;
