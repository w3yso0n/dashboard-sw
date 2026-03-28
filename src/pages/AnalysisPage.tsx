import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingUp, Target } from "lucide-react";

const analyses = [
  {
    icon: Shield,
    question: "¿Cómo aseguran que las entregas cumplen con los estándares de calidad establecidos?",
    answer: "Implementamos un pipeline de CI/CD con gates de calidad obligatorios: cobertura de pruebas mínima del 75%, revisión de código por al menos 2 peers, análisis estático con SonarQube, y pruebas de regresión automatizadas. La tasa de defectos bajó de 6.2 a 2.1 defectos/KLOC en Alpha, demostrando la efectividad de estos controles. Cada sprint incluye una sesión de QA dedicada antes del release.",
  },
  {
    icon: TrendingUp,
    question: "¿Qué tan estable y predecible es el proceso de desarrollo?",
    answer: "La predictibilidad mejoró de 60% a 91% en Proyecto Alpha y de 55% a 85% en Proyecto Beta a lo largo de 6 sprints. Esto se logró mediante refinamientos de backlog más rigurosos, planning poker con datos históricos, y reducción del WIP (Work In Progress). La velocidad se estabilizó a partir del Sprint 4, indicando un equipo maduro con estimaciones confiables. La desviación estándar de velocidad se redujo un 45%.",
  },
  {
    icon: CheckCircle,
    question: "¿Cómo se mide y mejora continuamente la calidad del código?",
    answer: "Utilizamos métricas automatizadas: cobertura de pruebas (32% → 81% en Alpha), complejidad ciclomática, duplicación de código, y deuda técnica medida en ítems pendientes. Las retrospectivas cada sprint identifican áreas de mejora. La implementación de linting rules y formateo automático estandarizó el código. Los code reviews obligatorios aseguran que cada cambio cumple con nuestros estándares.",
  },
  {
    icon: Target,
    question: "Si pudieran mejorar sólo un métrico, ¿cuál sería y por qué?",
    answer: "Lead Time. Actualmente en 6 días para Alpha y 9 para Beta, un Lead Time más corto impacta directamente en la satisfacción del cliente (CSAT), permite feedback más rápido, reduce el riesgo de cada entrega, y acelera el time-to-market. Reducir el Lead Time a 3-4 días requeriría mayor automatización de deploys, feature flags, y trunk-based development. Este métrico es multiplicador: al mejorarlo, otros métricas como CSAT y velocidad también mejorarían.",
  },
];

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Análisis de Cierre</h1>
        <p className="text-sm text-muted-foreground">Respuestas basadas en los métricas recopilados durante los 6 sprints</p>
      </div>
      <div className="grid gap-4">
        {analyses.map((a, i) => (
          <Card key={i} className="border-border bg-card">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-sm leading-relaxed">{a.question}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
