import { useCountUp } from "@/hooks/useCountUp";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
}

/** Animated counter stat — counts up on first scroll into view. */
export function Stat({ value, suffix = "", label }: StatProps) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className="flex flex-col gap-1">
      <span
        ref={ref}
        className="text-3xl font-bold tabular-nums tracking-tight text-foreground md:text-4xl"
      >
        {current.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
