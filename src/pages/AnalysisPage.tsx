import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingUp, Target } from "lucide-react";

const analyses = [
  {
    icon: Shield,
    question: "¿Cómo aseguran que las entregas cumplen con los estándares de calidad establecidos?",
    answer: "Implementamos un pipeline de CI/CD con gates de calidad obligatorios: cobertura de pruebas mínima del 75%, revisión de código por al menos 2 peers, análisis estático con SonarQube, y pruebas de regresión automatizadas. En Leoneta, la tasa de defectos bajó de 5.8 a 1.9 defectos/KLOC, validando la seguridad del motor de coincidencias y la autenticación institucional. En Changarritos, bajó de 6.5 a 2.8, asegurando la integridad de las transacciones de venta. Cada sprint incluye una sesión de QA dedicada antes del release.",
  },
  {
    icon: TrendingUp,
    question: "¿Qué tan estable y predecible es el proceso de desarrollo?",
    answer: "La predictibilidad mejoró de 58% a 92% en Leoneta y de 55% a 87% en Changarritos a lo largo de 6 sprints. En Leoneta, el refinamiento del MVP (registro institucional, perfiles, publicación de viajes y motor de coincidencias) permitió estimaciones más precisas. En Changarritos, la estabilización del catálogo de ventas y gestión de pedidos contribuyó a la mejora. La velocidad se estabilizó a partir del Sprint 4 en ambos proyectos, con una desviación estándar reducida en un 45%.",
  },
  {
    icon: CheckCircle,
    question: "¿Cómo se mide y mejora continuamente la calidad del código?",
    answer: "Utilizamos métricas automatizadas: cobertura de pruebas (28% → 79% en Leoneta, 25% → 71% en Changarritos), complejidad ciclomática, duplicación de código, y deuda técnica medida en ítems pendientes. En Leoneta, nos enfocamos en la calidad del motor de emparejamiento de rutas y la validación de credenciales institucionales. En Changarritos, priorizamos la robustez de las transacciones de venta y la gestión de inventario. Los code reviews obligatorios y retrospectivas por sprint aseguran mejora continua.",
  },
  {
    icon: Target,
    question: "Si pudieran mejorar sólo un métrico, ¿cuál sería y por qué?",
    answer: "Lead Time. Actualmente en 5 días para Leoneta y 7 para Changarritos. Un Lead Time más corto impacta directamente en la satisfacción de los usuarios universitarios (CSAT), permite iterar más rápido sobre el motor de coincidencias de Leoneta y el marketplace de Changarritos, reduce el riesgo por entrega, y acelera la adopción en campus. Reducirlo a 3 días requeriría mayor automatización de deploys, feature flags y trunk-based development. Es un métrico multiplicador: mejorarlo impulsa CSAT y velocidad simultáneamente.",
  },
];

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Análisis de Cierre</h1>
        <p className="text-sm text-muted-foreground">Respuestas basadas en los métricas recopilados durante los 6 sprints de Leoneta y Changarritos</p>
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
