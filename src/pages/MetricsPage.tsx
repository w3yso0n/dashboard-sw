import { MetricCard } from "@/components/MetricCard";
import { metrics } from "@/data/dashboard-data";

export default function MetricsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Métricas de Software</h1>
        <p className="text-sm text-muted-foreground">Estado actual con semáforos e historial por sprint para cada métrica</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((m) => (
          <MetricCard key={m.key} metric={m} />
        ))}
      </div>
    </div>
  );
}
