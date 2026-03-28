import { type TrafficStatus } from "@/data/dashboard-data";

const statusColors: Record<TrafficStatus, string> = {
  green: "bg-traffic-green shadow-[0_0_12px_hsl(var(--traffic-green)/0.5)]",
  yellow: "bg-traffic-yellow shadow-[0_0_12px_hsl(var(--traffic-yellow)/0.5)]",
  red: "bg-traffic-red shadow-[0_0_12px_hsl(var(--traffic-red)/0.5)]",
};

const statusLabels: Record<TrafficStatus, string> = {
  green: "En la meta",
  yellow: "A mejorar",
  red: "Requiere atención",
};

export function TrafficLight({
  status,
  label,
  neutral,
}: {
  status: TrafficStatus;
  label?: string;
  /** Sin semáforo de color: indicador aún no medible o no aplica. */
  neutral?: boolean;
}) {
  if (neutral) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-3.5 w-3.5 rounded-full bg-muted-foreground/35" />
        <span className="text-xs text-muted-foreground">{label ?? "Sin medición"}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <div className={`h-3.5 w-3.5 rounded-full ${statusColors[status]}`} />
      <span className="text-xs text-muted-foreground">{label ?? statusLabels[status]}</span>
    </div>
  );
}
