import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { metrics, resourceConsumption, technicalDebt, planSummary } from "@/data/dashboard-data";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from "recharts";

const chartStyle = {
  backgroundColor: "hsl(225, 14%, 11%)",
  border: "1px solid hsl(225, 12%, 18%)",
  borderRadius: "8px",
  fontSize: 12,
};

export default function ComparativePage() {
  const velocityMetric = metrics.find((m) => m.key === "velocity")!;
  const velocityHistory = velocityMetric.history;
  const consumptionSlice = resourceConsumption.slice(0, velocityHistory.length);
  const debtSlice = technicalDebt.slice(0, velocityHistory.length);

  let cumA = 0, cumB = 0;
  const progressData = velocityHistory.map((h) => {
    cumA += h.projA;
    cumB += h.projB;
    return { sprint: h.sprint, Leoneta: cumA, Changarritos: cumB };
  });

  const efficiencyData = consumptionSlice.map((r) => ({
    sprint: r.sprint,
    Leoneta: +(r.projA / r.cardsA).toFixed(1),
    Changarritos: +(r.projB / r.cardsB).toFixed(1),
  }));

  const velocityPerPerson = velocityHistory.map((h) => ({
    sprint: h.sprint,
    "Leoneta (por persona)": +(h.projA / 5).toFixed(1),
    "Changarritos (por persona)": +(h.projB / 1).toFixed(1),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Análisis Comparativo</h1>
        <p className="text-sm text-muted-foreground">
          Leoneta (5 integrantes) vs Changarritos (1 integrante, Faed). Los gráficos cubren las{" "}
          <span className="text-foreground font-medium">{planSummary.totalWeeks} semanas</span> del plan
          (etiquetas <span className="font-mono">S1–S8</span>). En <span className="text-foreground font-medium">S1–S4</span>{" "}
          Changarritos muestra más puntos por semana (enfoque y menos coordinación). A partir de{" "}
          <span className="text-foreground font-medium">S5</span>, Leoneta alinea el ritmo al feedback del curso:{" "}
          <span className="text-foreground font-medium">mismo “punch” semanal</span> que Changarritos pese al tamaño del equipo.
          El plan del tablero está{" "}
          <span className="text-foreground font-medium">cerrado en la semana {planSummary.activeWeekNumber}</span>
          {" "}(referencia {planSummary.activeWeekLabel}).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Comparación de avance — pts acumulados (S1–S8)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Line type="monotone" dataKey="Leoneta" stroke="hsl(142, 60%, 50%)" strokeWidth={2} />
                <Line type="monotone" dataKey="Changarritos" stroke="hsl(199, 89%, 48%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Velocidad por persona — pts/semana/persona (S1–S8)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={velocityPerPerson}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Bar dataKey="Leoneta (por persona)" fill="hsl(142, 60%, 50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Changarritos (por persona)" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Consumo de recursos — h/ingeniero por tarjeta (S1–S8)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Bar dataKey="Leoneta" fill="hsl(142, 60%, 50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Changarritos" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Deuda técnica — ítems pendientes (S1–S8)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={debtSlice}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Line type="monotone" dataKey="projA" name="Leoneta" stroke="hsl(142, 60%, 50%)" strokeWidth={2} />
                <Line type="monotone" dataKey="projB" name="Changarritos" stroke="hsl(199, 89%, 48%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
