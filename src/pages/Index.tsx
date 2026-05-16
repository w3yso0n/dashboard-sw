import { Card, CardContent } from "@/components/ui/card";
import { metrics, getTrafficLabel, getTrafficStatus, teamMembers, projects, formatTargetLine, planSummary } from "@/data/dashboard-data";
import { TrafficLight } from "@/components/TrafficLight";
import { ArrowDown, ArrowUp, Users, FolderKanban, Activity, Clock, Info } from "lucide-react";

/** Compara el último punto con el sprint previo con cifras distintas (evita tendencia 0 cuando la serie se congela). */
function latestVersusPriorDistinct(history: { projA: number; projB: number }[]) {
  const latest = history[history.length - 1];
  for (let i = history.length - 2; i >= 0; i--) {
    const p = history[i];
    if (p.projA !== latest.projA || p.projB !== latest.projB) {
      return { latest, prev: p };
    }
  }
  const fallback = history[Math.max(0, history.length - 2)];
  return { latest, prev: fallback };
}

/** Qué significa cada número, en palabras simples (para la presentación). */
const queEsLaMetrica: Record<string, string> = {
  "defect-density":
    "Cuántos fallos o bugs aparecen comparados con el tamaño del código que entregamos. Mientras menos, mejor.",
  "test-coverage":
    "Qué tanto de nuestro código está cubierto por pruebas automáticas. Mientras más alto, más seguro es cambiar cosas sin romper lo demás.",
  csat:
    "Porcentaje de respuestas positivas en una encuesta corta después de una entrega o demo. La aplicamos a 17 amigos de la carrera como usuarios de prueba; el número es chico, pero ayuda a ver si la tendencia mejora de sprint en sprint.",
  velocity:
    "Cuánto trabajo terminamos por sprint (cada sprint son 2 semanas), medido en puntos. Sirve para ver el ritmo de nuestro equipo; no es para compararnos con otro equipo solo por el número.",
  predictability:
    "Qué tan bien cumplimos lo que nos propusimos hacer en cada sprint (en %). Cerca del 100 % suele ser bueno: ni prometemos de más ni de menos.",
  "lead-time":
    "Cuántos días pasan desde que nace una tarea hasta que queda lista para el usuario. Mientras menos días, más rápido entregamos valor.",
};

export default function Index() {
  const canonicalHistory = metrics[0].history;
  const lastSprintNumber = planSummary.activeSprintNumber;
  const totalSprints = planSummary.totalSprints;

  const latestMetrics = metrics.map((m) => {
    const { latest, prev } = latestVersusPriorDistinct(m.history);
    const avgCurrent = (latest.projA + latest.projB) / 2;
    const avgPrev = (prev.projA + prev.projB) / 2;
    const trend = avgCurrent - avgPrev;
    const improving = m.invertThreshold ? trend < 0 : trend > 0;
    const roundish = m.key === "csat" || m.key === "test-coverage" || m.key === "predictability";
    return { ...m, avgCurrent, trend, improving, roundish, status: getTrafficStatus(m, avgCurrent) };
  });

  const fmtAvg = (m: (typeof latestMetrics)[0]) =>
    m.roundish ? String(Math.round(m.avgCurrent)) : m.avgCurrent.toFixed(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Resumen</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Aquí ves de un vistazo <span className="text-foreground font-medium">Leoneta</span> (carpool) y{" "}
          <span className="text-foreground font-medium">Changarritos</span> (el otro producto). El trabajo se organizó en{" "}
          <span className="text-foreground font-medium">{totalSprints} sprints</span> ({planSummary.sprintCadenceNote}) y el plan ya terminó en el{" "}
          <span className="text-foreground font-medium">sprint {lastSprintNumber}</span>. Los gráficos van del sprint 1 al 8
          (etiquetas <span className="font-mono">S1…S8</span>). Abajo, cada tarjeta resume un indicador en lenguaje sencillo.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Users className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold font-mono">{teamMembers.length}</p><p className="text-xs text-muted-foreground">Personas en el equipo</p></div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><FolderKanban className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold font-mono">{projects.length}</p><p className="text-xs text-muted-foreground">Productos</p></div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Activity className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-2xl font-bold font-mono">{lastSprintNumber}</p>
              <p className="text-xs text-muted-foreground">Último sprint del plan</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                {totalSprints} sprints ({planSummary.totalCalendarWeeks} semanas de calendario) · En los gráficos: {canonicalHistory[0].sprint} hasta {canonicalHistory[canonicalHistory.length - 1].sprint}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Clock className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-2xl font-bold font-mono">{metrics.length}</p>
              <p className="text-xs text-muted-foreground">Indicadores que mostramos</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-accent/50">
        <CardContent className="pt-4 flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 mt-0.5">
            <Info className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold">Cómo leer esta pantalla</p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              Cada tarjeta de abajo tiene un <span className="text-foreground font-medium">semáforo</span> (verde / amarillo / rojo) y un
              número grande: es el <span className="text-foreground font-medium">promedio entre Leoneta y Changarritos</span>. La
              flecha con un número indica si ese promedio <span className="text-foreground font-medium">subió o bajó</span> respecto al
              dato anterior en la gráfica. Las definiciones técnicas largas están en la página Métricas.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {latestMetrics.map((m) => (
          <Card key={m.key} className="border-border bg-card">
            <CardContent className="pt-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold leading-snug">{m.name}</p>
                <TrafficLight
                  status={m.status}
                  label={getTrafficLabel(m, m.avgCurrent)}
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{queEsLaMetrica[m.key] ?? m.description}</p>
              <div className="flex items-end gap-2">
                <>
                  <span className="font-mono text-3xl font-bold">{fmtAvg(m)}</span>
                  <span className="text-xs text-muted-foreground mb-1">{m.unit}</span>
                </>
                <span className={`ml-auto flex items-center text-xs font-medium ${m.improving ? "text-traffic-green" : "text-traffic-red"}`}>
                  {m.invertThreshold
                    ? m.improving
                      ? <ArrowDown className="h-3 w-3 mr-0.5" />
                      : <ArrowUp className="h-3 w-3 mr-0.5" />
                    : m.improving
                      ? <ArrowUp className="h-3 w-3 mr-0.5" />
                      : <ArrowDown className="h-3 w-3 mr-0.5" />}
                  {m.roundish ? Math.abs(Math.round(m.trend)) : Math.abs(m.trend).toFixed(1)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Promedio de los dos productos · Meta que nos pusimos: {formatTargetLine(m)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
