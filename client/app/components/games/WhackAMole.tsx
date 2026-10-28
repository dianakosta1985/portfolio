"use client";
import { useEffect, useState } from "react";
import { Button, Stat } from "./ui";
import { loadNumber, saveNumber } from "./storage";

const ROUND_SECONDS = 30;
const HOLES = 9;

const WhackAMole = () => {
  const [playing, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [score, setScore] = useState(0);
  const [mole, setMole] = useState<number | null>(null);
  const [hit, setHit] = useState<number | null>(null);
  const [best, setBest] = useState(() => loadNumber("whack-best") ?? 0);

  useEffect(() => {
    if (!playing) return;
    const clock = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(clock);
  }, [playing]);

  useEffect(() => {
    if (!playing || timeLeft > 0) return;
    setPlaying(false);
    setMole(null);
    if (score > best) {
      setBest(score);
      saveNumber("whack-best", score);
    }
  }, [playing, timeLeft, score, best]);

  // Moles pop up faster as the round goes on
  useEffect(() => {
    if (!playing) return;
    const delay = 450 + (timeLeft / ROUND_SECONDS) * 450;
    const timer = setTimeout(() => {
      setHit(null);
      setMole((current) => {
        let next = Math.floor(Math.random() * HOLES);
        if (next === current) next = (next + 1) % HOLES;
        return next;
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [playing, mole, timeLeft]);

  const start = () => {
    setScore(0);
    setTimeLeft(ROUND_SECONDS);
    setHit(null);
    setPlaying(true);
  };

  const whack = (i: number) => {
    if (!playing || i !== mole) return;
    setScore((s) => s + 1);
    setHit(i);
    setMole(null);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-3">
        <Stat label="Score" value={score} />
        <Stat label="Time" value={`${timeLeft}s`} />
        <Stat label="Best" value={best} />
      </div>

      <p className="text-lg font-semibold" aria-live="polite">
        {playing
          ? "Whack the moles!"
          : timeLeft === 0
            ? `Time's up! You scored ${score}${score > 0 && score >= best ? " — new best! 🏆" : ""}`
            : "Hit as many moles as you can in 30 seconds"}
      </p>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {Array.from({ length: HOLES }, (_, i) => (
          <button
            key={i}
            onClick={() => whack(i)}
            aria-label={i === mole ? "Mole!" : "Empty hole"}
            className="relative flex size-24 items-end justify-center overflow-hidden rounded-full bg-gradient-to-b from-amber-900/60 to-stone-950 ring-1 ring-white/10 sm:size-28"
          >
            <span
              className={`mb-2 text-5xl transition-transform duration-150 select-none sm:text-6xl ${
                i === mole ? "translate-y-0" : "translate-y-24"
              }`}
            >
              🐹
            </span>
            {hit === i && <span className="animate-pop absolute inset-0 flex items-center justify-center text-4xl">💥</span>}
          </button>
        ))}
      </div>

      <Button onClick={start}>{playing ? "Restart" : timeLeft === 0 ? "Play again" : "Start"}</Button>
    </div>
  );
};

export default WhackAMole;
