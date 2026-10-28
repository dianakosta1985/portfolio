"use client";
import { useState } from "react";
import { Button, Stat } from "./ui";

type Cell = "X" | "O" | null;

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const findWinner = (board: Cell[]) => {
  for (const line of LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line };
    }
  }
  return null;
};

const TicTacToe = () => {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [score, setScore] = useState({ X: 0, O: 0, draw: 0 });

  const winner = findWinner(board);
  const isDraw = !winner && board.every(Boolean);
  const isOver = Boolean(winner) || isDraw;

  const play = (i: number) => {
    if (board[i] || isOver) return;
    const next = [...board];
    next[i] = turn;
    setBoard(next);
    setTurn(turn === "X" ? "O" : "X");
    const result = findWinner(next);
    if (result) setScore((s) => ({ ...s, [result.player!]: s[result.player!] + 1 }));
    else if (next.every(Boolean)) setScore((s) => ({ ...s, draw: s.draw + 1 }));
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
  };

  const status = winner
    ? `${winner.player} wins! 🎉`
    : isDraw
      ? "It's a draw 🤝"
      : `${turn}'s turn`;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-3">
        <Stat label="X" value={score.X} />
        <Stat label="Draws" value={score.draw} />
        <Stat label="O" value={score.O} />
      </div>

      <p className="text-lg font-semibold" aria-live="polite">{status}</p>

      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => play(i)}
            aria-label={`Cell ${i + 1}${cell ? `, ${cell}` : ""}`}
            className={`flex size-24 items-center justify-center rounded-2xl text-5xl font-black ring-1 ring-white/10 transition sm:size-28 ${
              winner?.line.includes(i) ? "bg-emerald-400/25" : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {cell && (
              <span className={`animate-pop ${cell === "X" ? "text-pink-400" : "text-indigo-300"}`}>
                {cell}
              </span>
            )}
          </button>
        ))}
      </div>

      <Button onClick={restart}>{isOver ? "Play again" : "Restart"}</Button>
    </div>
  );
};

export default TicTacToe;
