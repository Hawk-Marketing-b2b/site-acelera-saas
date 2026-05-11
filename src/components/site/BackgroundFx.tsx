/**
 * Decorative background — orbes roxo/magenta, grid sutil
 * e feixes de luz neon diagonais atravessando a seção.
 */
export function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orbes */}
      <div
        className="glow-orb size-[480px] -left-32 -top-32"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="glow-orb size-[420px] -right-24 top-40"
        style={{ background: "var(--color-secondary)", opacity: 0.35 }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 80%)",
        }}
      />

      {/* Feixes neon diagonais */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            // azul cobalto
            "linear-gradient(115deg, transparent 38%, oklch(0.55 0.25 265 / 0.55) 50%, transparent 62%)",
            // magenta
            "linear-gradient(115deg, transparent 62%, oklch(0.6 0.25 330 / 0.45) 71%, transparent 80%)",
            // roxo claro
            "linear-gradient(115deg, transparent 18%, oklch(0.7 0.2 295 / 0.35) 26%, transparent 33%)",
            // azul fino
            "linear-gradient(115deg, transparent 80%, oklch(0.6 0.22 250 / 0.4) 86%, transparent 92%)",
          ].join(", "),
          backgroundSize: "100% 100%",
          mixBlendMode: "screen",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
