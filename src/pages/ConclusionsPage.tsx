import { Card, CardContent } from "@/components/ui/card";
import { memberConclusions } from "@/data/dashboard-data";
import { User, FolderKanban } from "lucide-react";

export default function ConclusionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Estado actual de los proyectos</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Los proyectos siguen en curso: estamos en el <span className="text-foreground font-medium">Sprint 4</span>
          {" "}(Leoneta: 8 sprints, S0–S7 · Changarritos: 9 sprints, S0–S8).
          Lo que ves abajo es el <span className="text-foreground font-medium">avance y prioridades a la fecha</span>, no un cierre ni una retrospectiva final.
        </p>
      </div>

      <Card className="border-border bg-accent/40">
        <CardContent className="pt-4 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <FolderKanban className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold">Resumen por producto</p>
          </div>
          <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed list-disc pl-5">
            <li>
              <span className="text-foreground font-medium">Leoneta:</span> Sprints 0–3 entregaron núcleo backend, integración frontend–API y flujo general login → buscar → solicitar.
              En Sprint 4 se trabaja en sincronización de pantallas, notificaciones, UX y confianza; QA formal, correcciones y documentación de cierre están en Sprints 5–7.
            </li>
            <li>
              <span className="text-foreground font-medium">Changarritos:</span> S0 preparatorio (Test Plan + KPIs); S1 autenticación; S2 CRUD de productos; S3 catálogo, filtros, buscador y detalle.
              Sprint 4: contacto WhatsApp, chatbot IA y recomendaciones. Siguientes: S5 notificaciones y favoritos; S6 métricas y ejecución completa de pruebas; S7 correcciones; S8 cierre (Test Report, documentación, validación).
            </li>
          </ul>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-sm font-semibold text-foreground mb-3">Aporte de cada integrante (situación actual)</h2>
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
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Avance a la fecha</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{mc.conclusion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
