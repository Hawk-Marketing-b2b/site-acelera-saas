/**
 * Decorative background orbs and grid — purple/magenta glow consistent
 * with the Acelera SaaS visual language.
 */
export function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="glow-orb size-[480px] -left-32 -top-32"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="glow-orb size-[420px] -right-24 top-40"
        style={{ background: "var(--color-secondary)", opacity: 0.35 }}
      />
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
    </div>
  );
}
