import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { metrics, resourceConsumption, technicalDebt } from "@/data/dashboard-data";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from "recharts";

const chartStyle = {
  backgroundColor: "hsl(225, 14%, 11%)",
  border: "1px solid hsl(225, 12%, 18%)",
  borderRadius: "8px",
  fontSize: 12,
};

export default function ComparativePage() {
  const velocityMetric = metrics.find((m) => m.key === "velocity")!;

  // Progress comparison (cumulative story points)
  let cumA = 0, cumB = 0;
  const progressData = velocityMetric.history.map((h) => {
    cumA += h.projA;
    cumB += h.projB;
    return { sprint: h.sprint, Alpha: cumA, Beta: cumB };
  });

  // Hours per card
  const efficiencyData = resourceConsumption.map((r) => ({
    sprint: r.sprint,
    Alpha: +(r.projA / r.cardsA).toFixed(1),
    Beta: +(r.projB / r.cardsB).toFixed(1),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Análisis Comparativo</h1>
        <p className="text-sm text-muted-foreground">Comparación de rendimiento entre Proyecto Alpha y Proyecto Beta</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Comparación de Avance (Story Points Acumulados)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Line type="monotone" dataKey="Alpha" stroke="hsl(142, 60%, 50%)" strokeWidth={2} />
                <Line type="monotone" dataKey="Beta" stroke="hsl(199, 89%, 48%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Consumo de Recursos (Horas Ingeniero / Tarjeta)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Bar dataKey="Alpha" fill="hsl(142, 60%, 50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Beta" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Velocidad Media de los Equipos</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={velocityMetric.history}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Bar dataKey="projA" name="Alpha" fill="hsl(142, 60%, 50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="projB" name="Beta" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-sm">Deuda Técnica (Ítems Pendientes)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={technicalDebt}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 12%, 18%)" />
                <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartStyle} />
                <Legend />
                <Line type="monotone" dataKey="projA" name="Alpha" stroke="hsl(142, 60%, 50%)" strokeWidth={2} />
                <Line type="monotone" dataKey="projB" name="Beta" stroke="hsl(199, 89%, 48%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
