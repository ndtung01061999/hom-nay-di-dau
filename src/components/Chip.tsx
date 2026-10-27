"use client";

export function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
        active
          ? "border-orange-500 bg-orange-500 text-white shadow-sm"
          : "border-stone-200 bg-white text-stone-700 hover:border-orange-300 hover:bg-orange-50"
      }`}
    >
      {children}
    </button>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">{title}</h3>
      {children}
    </div>
  );
}
