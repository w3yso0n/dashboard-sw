import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrafficLight } from "./TrafficLight";
import { type MetricData, formatTargetLine, getTrafficLabel, getTrafficStatus } from "@/data/dashboard-data";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function MetricCard({ metric }: { metric: MetricData }) {
  const latestA = metric.history[metric.history.length - 1].projA;
  const latestB = metric.history[metric.history.length - 1].projB;
  const statusA = getTrafficStatus(metric, latestA);
  const statusB = getTrafficStatus(metric, latestB);
  const fmt = (v: number) =>
    metric.key === "csat" || metric.key === "test-coverage" || metric.key === "predictability"
      ? `${Math.round(v)}`
      : `${v}`;

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2 space-y-2">
        <CardTitle className="text-sm font-semibold">{metric.name}</CardTitle>
        <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
        <div className="text-[11px] text-muted-foreground space-y-1 leading-relaxed border-t border-border pt-2">
          <p><span className="font-medium text-foreground/90">Fórmula:</span> {metric.formula}</p>
          <p><span className="font-medium text-foreground/90">Objetivo ideal:</span> {metric.idealGoal}</p>
          <p><span className="font-medium text-foreground/90">Herramientas:</span> {metric.tools}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Leoneta</p>
            <>
              <p className="font-mono text-2xl font-bold">{fmt(latestA)}<span className="text-xs text-muted-foreground ml-1">{metric.unit}</span></p>
              <TrafficLight status={statusA} label={getTrafficLabel(metric, latestA)} />
            </>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Changarritos</p>
            <>
              <p className="font-mono text-2xl font-bold">{fmt(latestB)}<span className="text-xs text-muted-foreground ml-1">{metric.unit}</span></p>
              <TrafficLight status={statusB} label={getTrafficLabel(metric, latestB)} />
            </>
          </div>
        </div>

        <div className="h-28">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={metric.history}>
              <XAxis dataKey="sprint" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} width={30} />
              <Tooltip
                contentStyle={{ backgroundColor: "hsl(225, 14%, 11%)", border: "1px solid hsl(225, 12%, 18%)", borderRadius: "8px", fontSize: 12 }}
                labelStyle={{ color: "hsl(210, 20%, 92%)" }}
              />
              <Line type="monotone" dataKey="projA" stroke="hsl(142, 60%, 50%)" strokeWidth={2} dot={false} name="Leoneta" />
              <Line type="monotone" dataKey="projB" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={false} name="Changarritos" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Meta del proyecto: {formatTargetLine(metric)}</span>
          <span className="font-mono">{metric.history.length} sprints en serie</span>
        </div>
      </CardContent>
    </Card>
  );
}
