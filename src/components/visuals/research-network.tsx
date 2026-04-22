import { researchThemes } from "@/content/research";

const positions = [
  [50, 12],
  [82, 34],
  [72, 76],
  [28, 78],
  [16, 34],
  [50, 50]
];

export function ResearchNetwork() {
  return (
    <div className="instrument-card overflow-hidden p-5">
      <svg viewBox="0 0 100 92" className="h-auto w-full" role="img" aria-label="Research map connecting themes">
        <g stroke="rgb(var(--color-cyan) / 0.26)" strokeWidth="0.45">
          {positions.map((source, index) =>
            positions.slice(index + 1).map((target, nestedIndex) => (
              <line
                key={`${index}-${nestedIndex}`}
                x1={source[0]}
                y1={source[1]}
                x2={target[0]}
                y2={target[1]}
              />
            ))
          )}
        </g>
        {researchThemes.map((theme, index) => {
          const [x, y] = positions[index];
          return (
            <g key={theme.id}>
              <circle cx={x} cy={y} r={index === 5 ? 11 : 7.5} fill="rgb(var(--color-panel))" stroke="rgb(var(--color-cyan) / 0.72)" strokeWidth="0.7" />
              <circle cx={x} cy={y} r={index === 5 ? 3.1 : 2.4} fill={index === 5 ? "rgb(var(--color-gold))" : "rgb(var(--color-foreground))"} />
            </g>
          );
        })}
      </svg>
      <div className="mt-4 grid gap-2 text-sm text-muted">
        <p>
          Research themes are deliberately connected: contact laws inform DEM, DEM informs constitutive response, and dynamic signals reveal evolving granular fabric.
        </p>
      </div>
    </div>
  );
}
