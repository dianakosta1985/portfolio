import type { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
  active = false,
}: {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
      active
        ? "bg-white text-slate-900"
        : "bg-white/10 text-white hover:bg-white/20"
    }`}
  >
    {children}
  </button>
);

export const Stat = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="rounded-2xl bg-white/5 px-4 py-2 text-center ring-1 ring-white/10">
    <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
    <div className="text-xl font-bold text-white">{value}</div>
  </div>
);
