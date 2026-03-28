import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingUp, Target } from "lucide-react";

const analyses = [
  {
    icon: Shield,
    question: "¿Cómo aseguran que las entregas cumplen con los estándares de calidad establecidos?",
    answer: "Implementamos un pipeline de CI/CD con gates de calidad obligatorios: cobertura de pruebas mínima del 75%, revisión de código por al menos 2 peers (en Leoneta) y self-review con checklist en Changarritos. En Leoneta (5 integrantes), la tasa de defectos bajó de 5.8 a 1.9 defectos/KLOC, validando la seguridad del motor de coincidencias y la autenticación institucional. En Changarritos (1 integrante), bajó de 4.5 a 1.8 gracias a una disciplina estricta de testing automatizado. La menor complejidad del proyecto permitió un control más directo de la calidad.",
  },
  {
    icon: TrendingUp,
    question: "¿Qué tan estable y predecible es el proceso de desarrollo?",
    answer: "La predictibilidad mejoró de 58% a 92% en Leoneta y de 65% a 90% en Changarritos. En Leoneta, con 5 personas, el reto fue coordinar estimaciones entre módulos (autenticación, motor de coincidencias, perfiles, calificaciones). En Changarritos, al ser una sola persona, la predictibilidad fue naturalmente más alta desde el inicio porque no había dependencias entre integrantes. Ambos proyectos estabilizaron su velocidad a partir del Sprint 4.",
  },
  {
    icon: CheckCircle,
    question: "¿Cómo se mide y mejora continuamente la calidad del código?",
    answer: "Métricas automatizadas: cobertura de pruebas (28% → 79% en Leoneta, 35% → 76% en Changarritos), complejidad ciclomática y deuda técnica. En Leoneta, los code reviews entre 5 integrantes fueron fundamentales para mantener consistencia arquitectónica. En Changarritos, la integrante única compensó la falta de peer review con testing exhaustivo y análisis estático automatizado. La deuda técnica se redujo de 14 a 12 ítems en Leoneta y de 5 a 6 en Changarritos (controlada dado el alcance).",
  },
  {
    icon: Target,
    question: "Si pudieran mejorar sólo un métrico, ¿cuál sería y por qué?",
    answer: "Lead Time. Leoneta lo redujo de 19 a 5 días y Changarritos de 12 a 5 días. Changarritos tuvo ventaja natural por ser un equipo de una persona (menos overhead de coordinación). Para Leoneta, un Lead Time más corto permitiría iterar más rápido sobre el motor de coincidencias y obtener feedback de los usuarios universitarios más temprano. Reducirlo a 3 días requeriría feature flags, trunk-based development y mayor automatización. Es un métrico multiplicador: mejorarlo impulsa CSAT y velocidad simultáneamente.",
  },
];

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Análisis de Cierre</h1>
        <p className="text-sm text-muted-foreground">Respuestas basadas en los métricas de Leoneta (5 integrantes) y Changarritos (1 integrante)</p>
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
