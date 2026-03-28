import { Card, CardContent } from "@/components/ui/card";
import { metrics, getTrafficLabel, getTrafficStatus, teamMembers, projects } from "@/data/dashboard-data";
import { TrafficLight } from "@/components/TrafficLight";
import { ArrowDown, ArrowUp, Users, FolderKanban, Activity, Clock, Info } from "lucide-react";

/** Último sprint con valores distintos al siguiente (serie “congelada” = sprint en curso según datos). */
function currentSprintLabelFromHistory(history: { sprint: string; projA: number; projB: number }[]): string {
  let plateauStart = history.length - 1;
  for (let i = history.length - 2; i >= 0; i--) {
    const cur = history[i];
    const next = history[i + 1];
    if (cur.projA !== next.projA || cur.projB !== next.projB) {
      plateauStart = i + 1;
      break;
    }
    plateauStart = i;
  }
  return history[plateauStart].sprint;
}

/** Compara el último punto con el sprint previo con cifras distintas (evita tendencia 0 cuando S4–S8 están congelados). */
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

/** Texto breve y poco técnico para el resumen (clave = `metric.key`). */
const queEsLaMetrica: Record<string, string> = {
  "defect-density":
    "Cuántos errores o fallos aparecen en relación al tamaño del código; mientras menos, mejor.",
  "test-coverage":
    "Qué parte del código tiene pruebas que ayudan a detectar fallos antes de que lleguen a usuarios.",
  csat:
    "Qué tan contentos dicen estar los usuarios, del 1 al 5. Por ahora no reportamos puntaje: el desarrollo sigue en curso y la medición real vendrá cuando la app esté en uso.",
  velocity:
    "Cantidad de trabajo terminado en cada sprint, en puntos. Sirve para ver ritmo, no para comparar equipos de un tamaño distinto.",
  predictability:
    "Porcentaje de lo que el equipo se comprometió a entregar en el sprint y que realmente terminó; mide qué tan acertado es el plan.",
  "lead-time":
    "Días que pasan desde que se pide algo hasta que queda listo; menos tiempo suele indicar un flujo más fluido.",
};

export default function Index() {
  const canonicalHistory = metrics[0].history;
  const currentSprintLabel = currentSprintLabelFromHistory(canonicalHistory);
  const currentSprintNum = Number.parseInt(currentSprintLabel.replace(/^S/i, ""), 10);
  const leonetaSprintTotal = canonicalHistory.length - 1;
  const changarritosSprintTotal = canonicalHistory.length;

  const latestMetrics = metrics.map((m) => {
    const { latest, prev } = latestVersusPriorDistinct(m.history);
    const avgCurrent = (latest.projA + latest.projB) / 2;
    const avgPrev = (prev.projA + prev.projB) / 2;
    const trend = avgCurrent - avgPrev;
    const improving = m.invertThreshold ? trend < 0 : trend > 0;
    return { ...m, avgCurrent, trend, improving, status: getTrafficStatus(m, avgCurrent) };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Resumen</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Vista general de los dos productos en desarrollo. El trabajo activo corresponde al{" "}
          <span className="text-foreground font-medium">sprint {currentSprintNum}</span>
          {" "}
          (última actualización de cifras: {currentSprintLabel}). Leoneta contempla {leonetaSprintTotal} sprints en total y
          Changarritos {changarritosSprintTotal}.
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
            <div><p className="text-2xl font-bold font-mono">{projects.length}</p><p className="text-xs text-muted-foreground">Proyectos activos</p></div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Activity className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-2xl font-bold font-mono">{currentSprintNum}</p>
              <p className="text-xs text-muted-foreground">Sprint en curso</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Leoneta: {leonetaSprintTotal} sprints · Changarritos: {changarritosSprintTotal}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2"><Clock className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-2xl font-bold font-mono">{metrics.length}</p>
              <p className="text-xs text-muted-foreground">Indicadores seguidos</p>
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
            <p className="text-sm font-semibold">Sobre la satisfacción de usuarios (CSAT)</p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              Todavía no llegamos a la etapa en la que el CSAT refleje usuarios reales usando la app en su día a día: falta avanzar en el
              desarrollo, estabilizar el producto y desplegarlo. Por eso la tarjeta muestra -/5: aún no hay dato medible.
              La meta 4.5 /5 del proyecto aplica cuando exista ese uso real y se pueda medir de forma formal.
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
                  neutral={m.key === "csat"}
                  label={m.key === "csat" ? "Sin medición aún" : getTrafficLabel(m, m.avgCurrent)}
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{queEsLaMetrica[m.key] ?? m.description}</p>
              <div className="flex items-end gap-2">
                {m.key === "csat" ? (
                  <span className="font-mono text-3xl font-bold">-/5</span>
                ) : (
                  <>
                    <span className="font-mono text-3xl font-bold">{m.avgCurrent.toFixed(1)}</span>
                    <span className="text-xs text-muted-foreground mb-1">{m.unit}</span>
                  </>
                )}
                {m.key !== "csat" && (
                  <span className={`ml-auto flex items-center text-xs font-medium ${m.improving ? "text-traffic-green" : "text-traffic-red"}`}>
                    {m.invertThreshold
                      ? m.improving
                        ? <ArrowDown className="h-3 w-3 mr-0.5" />
                        : <ArrowUp className="h-3 w-3 mr-0.5" />
                      : m.improving
                        ? <ArrowUp className="h-3 w-3 mr-0.5" />
                        : <ArrowDown className="h-3 w-3 mr-0.5" />}
                    {Math.abs(m.trend).toFixed(1)}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {m.key === "csat" ? (
                  <>
                    Sin media entre proyectos mientras no haya medición. Meta: {m.target} {m.unit} cuando la app esté en uso real y se pueda
                    medir CSAT de forma formal.
                  </>
                ) : (
                  <>Media entre Leoneta y Changarritos · Meta del proyecto: {m.target} {m.unit}</>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
