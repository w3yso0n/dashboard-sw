import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrafficLight } from "./TrafficLight";
import { type MetricData, getTrafficLabel, getTrafficStatus } from "@/data/dashboard-data";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function MetricCard({ metric }: { metric: MetricData }) {
  const latestA = metric.history[metric.history.length - 1].projA;
  const latestB = metric.history[metric.history.length - 1].projB;
  const statusA = getTrafficStatus(metric, latestA);
  const statusB = getTrafficStatus(metric, latestB);
  const csatPending = metric.key === "csat";

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">{metric.name}</CardTitle>
        <p className="text-xs text-muted-foreground">{metric.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Leoneta</p>
            {csatPending ? (
              <>
                <p className="font-mono text-2xl font-bold">-/5</p>
                <TrafficLight status={statusA} neutral label="Sin medición aún" />
              </>
            ) : (
              <>
                <p className="font-mono text-2xl font-bold">{latestA}<span className="text-xs text-muted-foreground ml-1">{metric.unit}</span></p>
                <TrafficLight status={statusA} label={getTrafficLabel(metric, latestA)} />
              </>
            )}
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Changarritos</p>
            {csatPending ? (
              <>
                <p className="font-mono text-2xl font-bold">-/5</p>
                <TrafficLight status={statusB} neutral label="Sin medición aún" />
              </>
            ) : (
              <>
                <p className="font-mono text-2xl font-bold">{latestB}<span className="text-xs text-muted-foreground ml-1">{metric.unit}</span></p>
                <TrafficLight status={statusB} label={getTrafficLabel(metric, latestB)} />
              </>
            )}
          </div>
        </div>

        {csatPending ? (
          <div className="h-28 flex items-center justify-center rounded-md border border-dashed border-border bg-muted/30 px-3">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Sin gráfico: el CSAT se reportará cuando la app esté en uso real y haya dato medible.
            </p>
          </div>
        ) : (
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
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Objetivo: {metric.target} {metric.unit}{csatPending ? " (cuando aplique medición)" : ""}</span>
          <span className="font-mono">{metric.history.length} pts. en serie</span>
        </div>
      </CardContent>
    </Card>
  );
}
