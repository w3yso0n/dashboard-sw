import { Card, CardContent } from "@/components/ui/card";
import { memberConclusions } from "@/data/dashboard-data";
import { User } from "lucide-react";

export default function ConclusionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Conclusiones del Equipo</h1>
        <p className="text-sm text-muted-foreground">Reflexión individual de cada integrante sobre el ciclo de desarrollo</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {memberConclusions.map((mc, i) => (
          <Card key={i} className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{mc.member.name}</p>
                  <p className="text-xs text-muted-foreground">{mc.member.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{mc.conclusion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
