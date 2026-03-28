import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingUp, Target } from "lucide-react";

const analyses = [
  {
    icon: Shield,
    question: "¿Cómo aseguran que las entregas cumplen con los estándares de calidad establecidos?",
    answer: "Estamos en Sprint 4: el flujo general de Leoneta (login, búsqueda, publicación contra API real) ya está probado de forma informal en desarrollo, pero las suites formales MC, INT y SYS están planificadas para Sprint 5 y la validación end-to-end y Test Report para Sprint 7 — aún no ejecutadas. En Changarritos (plan de 9 sprints hasta S8), S0–S3 ya cubren Test Plan, autenticación, CRUD de productos y catálogo con integración; en Sprint 4 el foco es WhatsApp, chatbot IA y recomendaciones, con QA de respuestas y errores de IA. El cierre formal de Changarritos va en Sprint 8.",
  },
  {
    icon: TrendingUp,
    question: "¿Qué tan estable y predecible es el proceso de desarrollo?",
    answer: "La predictibilidad subió desde Sprints 1–3 y en Sprint 4 se mantiene en torno a ~87–89%, por encima del umbral que consideramos saludable. Aún hay historias de UX, notificaciones y confianza en curso, pero el ritmo de entrega es estable. Leoneta tiene backend y núcleo API entregados en Sprints 1–2 e integración base en Sprint 3; lo que falta son detalles de producto, QA formal y hardening. Changarritos, con un solo integrante, lleva S0–S3 cerrados y en Sprint 4 integra contacto WhatsApp e IA; notificaciones, métricas, correcciones y cierre están repartidos en S5–S8.",
  },
  {
    icon: CheckCircle,
    question: "¿Cómo se mide y mejora continuamente la calidad del código?",
    answer: "Seguimos cobertura de pruebas, deuda técnica y revisiones entre pares; los valores actuales (~78% Leoneta y ~84% Changarritos en cobertura) ya están en línea con la meta de cierre (80%) a nivel conjunto, y seguimos subiendo casos críticos antes de Sprint 5. La deuda técnica bajó respecto a Sprints anteriores y la rematamos en Sprint 6 tras la batería de pruebas. Prioridad inmediata: cerrar Sprint 4 (sincronización de pantallas, flujos de solicitud, pulido UX) antes de congelar criterios de aceptación para QA.",
  },
  {
    icon: Target,
    question: "Si pudieran mejorar sólo un métrico, ¿cuál sería y por qué?",
    answer: "Lead Time: mantenerlo bajo (~6 días Leoneta, ~5 Changarritos en el último punto registrado) permite terminar Sprint 4 y enchufar enseguida el ciclo de pruebas y correcciones. Afinar aún más con entregas pequeñas y definición clara de “listo” aceleraría la validación formal: Leoneta hacia Sprints 6–7 y Changarritos hacia S7–S8 (cierre).",
  },
];

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Análisis del proyecto</h1>
        <p className="text-sm text-muted-foreground">
          Estado al Sprint 4 en curso — Leoneta (5 integrantes, plan S0–S7) y Changarritos (1 integrante, plan S0–S8). QA, correcciones y cierre siguen planificados en sprints posteriores.
        </p>
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
