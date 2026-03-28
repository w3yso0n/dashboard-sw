import { Card, CardContent } from "@/components/ui/card";
import { metrics, getTrafficStatus, teamMembers, projects } from "@/data/dashboard-data";
import { TrafficLight } from "@/components/TrafficLight";
import { ArrowDown, ArrowUp, Users, FolderKanban, Activity, Clock, Info } from "lucide-react";

export default function Index() {
  const latestMetrics = metrics.map((m) => {
    const latest = m.history[m.history.length - 1];
    const prev = m.history[m.history.length - 2];
    const avgCurrent = (latest.projA + latest.projB) / 2;
    const avgPrev = (prev.projA + prev.projB) / 2;
    const trend = avgCurrent - avgPrev;
    const improving = m.invertThreshold ? trend < 0 : trend > 0;
    return { ...m, avgCurrent, trend, improving, status: getTrafficStatus(m, avgCurrent) };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Resumen Ejecutivo</h1>
        <p className="text-sm text-muted-foreground">Vista general de las métricas de software del equipo</p>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Users className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold font-mono">{teamMembers.length}</p><p className="text-xs text-muted-foreground">Integrantes</p></div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><FolderKanban className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold font-mono">{projects.length}</p><p className="text-xs text-muted-foreground">Proyectos</p></div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Activity className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold font-mono">8</p><p className="text-xs text-muted-foreground">Sprints</p></div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Clock className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold font-mono">6</p><p className="text-xs text-muted-foreground">Métricas</p></div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-accent/50">
        <CardContent className="pt-4 flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 mt-0.5">
            <Info className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold">Nota sobre métricas de satisfacción</p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              Las pruebas y métricas de satisfacción de usuario (CSAT) aún no incluyen datos reales, ya que los proyectos no han sido lanzados ni finalizados. Los valores actuales son estimaciones basadas en pruebas internas con datos mock.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {latestMetrics.map((m) => (
          <Card key={m.key} className="border-border bg-card">
            <CardContent className="pt-4 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{m.name}</p>
                <TrafficLight status={m.status} />
              </div>
              <div className="flex items-end gap-2">
                <span className="font-mono text-3xl font-bold">{m.avgCurrent.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground mb-1">{m.unit}</span>
                <span className={`ml-auto flex items-center text-xs font-medium ${m.improving ? "text-traffic-green" : "text-traffic-red"}`}>
                  {m.improving ? <ArrowUp className="h-3 w-3 mr-0.5" /> : <ArrowDown className="h-3 w-3 mr-0.5" />}
                  {Math.abs(m.trend).toFixed(1)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Promedio ambos proyectos · Objetivo: {m.target} {m.unit}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
