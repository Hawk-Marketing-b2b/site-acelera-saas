/**
 * Decorative background — orbes roxo/magenta, grid sutil
 * e meteoros (feixes finos coloridos animados) inspirados na hero do
 * acelerasaas.com.
 */

type Meteor = {
  /** posição inicial X (origem da rotação) no viewBox */
  x: number;
  /** posição inicial Y no viewBox */
  y: number;
  /** comprimento do rastro */
  length: number;
  /** id do gradiente (define a cor) */
  color: "cyan" | "cobalt" | "magenta" | "teal" | "violet";
  /** duração da animação em segundos */
  duration: number;
  /** delay (negativo p/ começar dessincronizado) */
  delay: number;
  /** espessura do traço */
  width?: number;
};

// ~12 meteoros distribuídos pelo viewBox 1440x800,
// inclinação fixa de -25° (≈ 115° no padrão do site original).
const METEORS: Meteor[] = [
  { x: 1500, y: -40,  length: 380, color: "cobalt",  duration: 7,   delay: 0,    width: 1.6 },
  { x: 1380, y: -80,  length: 220, color: "cyan",    duration: 5.5, delay: -1.5, width: 1.2 },
  { x: 1250, y: 60,   length: 520, color: "magenta", duration: 8,   delay: -3,   width: 1.4 },
  { x: 1100, y: 120,  length: 180, color: "violet",  duration: 4.5, delay: -2,   width: 1.2 },
  { x: 980,  y: 220,  length: 600, color: "cobalt",  duration: 9,   delay: -5,   width: 1.6 },
  { x: 880,  y: 40,   length: 260, color: "teal",    duration: 6,   delay: -1,   width: 1.2 },
  { x: 760,  y: 320,  length: 420, color: "magenta", duration: 7.5, delay: -4,   width: 1.4 },
  { x: 640,  y: 180,  length: 200, color: "cyan",    duration: 5,   delay: -2.5, width: 1.2 },
  { x: 520,  y: 460,  length: 480, color: "violet",  duration: 8.5, delay: -6,   width: 1.5 },
  { x: 400,  y: 280,  length: 240, color: "cyan",    duration: 5.5, delay: -3.5, width: 1.2 },
  { x: 280,  y: 540,  length: 320, color: "magenta", duration: 6.5, delay: -2,   width: 1.3 },
  { x: 160,  y: 380,  length: 200, color: "teal",    duration: 5,   delay: -4,   width: 1.2 },
];

// Cores em oklch (mantêm consistência com tokens do design system).
const STOPS: Record<Meteor["color"], string> = {
  cyan:    "oklch(0.85 0.16 220)",
  cobalt:  "oklch(0.65 0.22 255)",
  magenta: "oklch(0.7 0.25 340)",
  teal:    "oklch(0.78 0.15 190)",
  violet:  "oklch(0.78 0.18 300)",
};

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

      {/* Meteoros */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {(Object.keys(STOPS) as Meteor["color"][]).map((c) => (
            <linearGradient
              key={c}
              id={`meteor-${c}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor={STOPS[c]} stopOpacity="0" />
              <stop offset="60%" stopColor={STOPS[c]} stopOpacity="0.85" />
              <stop offset="100%" stopColor={STOPS[c]} stopOpacity="1" />
            </linearGradient>
          ))}
          <filter id="meteor-glow" x="-20%" y="-200%" width="140%" height="500%">
            <feGaussianBlur stdDeviation="1.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {METEORS.map((m, i) => (
          <g
            key={i}
            transform={`translate(${m.x} ${m.y}) rotate(155)`}
          >
            <line
              className="animate-meteor"
              x1="0"
              y1="0"
              x2={m.length}
              y2="0"
              stroke={`url(#meteor-${m.color})`}
              strokeWidth={m.width ?? 1.4}
              strokeLinecap="round"
              filter="url(#meteor-glow)"
              style={{
                animationDuration: `${m.duration}s`,
                animationDelay: `${m.delay}s`,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
