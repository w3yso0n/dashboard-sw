import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingUp, Target } from "lucide-react";

const analyses = [
  {
    icon: Shield,
    question: "¿Cómo aseguran que las entregas cumplen con los estándares de calidad establecidos?",
    answer: "En Leoneta (5 integrantes) ejecutamos 15 casos de prueba divididos en tres suites: pruebas modulares (MC), de integración (INT) y de sistema (SYS), logrando un 80% de éxito (12 aprobados, 3 fallidos). Las pruebas modulares validaron los flujos individuales (registro, login, búsqueda, filtros, calificación) al 100%. Los fallos se concentraron en integración (falta de estado real del ride y transición a Completado) y sistema (responsive en <400px). La tasa de defectos bajó de 5.8 a 1.9 defectos/KLOC. En Changarritos (1 integrante), se ejecutaron pruebas de sistema, modulares e integración con un único fallo identificado en el módulo de filtros. La tasa de defectos bajó de 4.5 a 1.8 defectos/KLOC.",
  },
  {
    icon: TrendingUp,
    question: "¿Qué tan estable y predecible es el proceso de desarrollo?",
    answer: "La predictibilidad mejoró de 58% a 92% en Leoneta y de 65% a 90% en Changarritos. Leoneta alcanza ~35% de avance global: el frontend demo está al 65–75% con 6 de 12 módulos implementados, pero el backend (API REST/NestJS + BD) está al 0–10%. De 10 objetivos, solo 2 están completos y 6 sin iniciar. La coordinación entre 5 integrantes especializados por módulo fue clave para estabilizar la velocidad a partir del Sprint 4. Changarritos, al ser una sola persona, tuvo predictibilidad naturalmente alta desde el inicio sin dependencias entre integrantes.",
  },
  {
    icon: CheckCircle,
    question: "¿Cómo se mide y mejora continuamente la calidad del código?",
    answer: "Cobertura de pruebas (28% → 79% en Leoneta, 35% → 76% en Changarritos), complejidad ciclomática y deuda técnica. En Leoneta, los code reviews entre 5 integrantes y las tres suites de pruebas (modulares, integración y sistema) fueron fundamentales. Los 3 bugs críticos identificados son: falta de estado global/persistente del ride, no actualización de asientos al aceptar pasajeros, y falta de comunicación entre pantallas. Las soluciones requieren store global (Context/Redux/Zustand) y backend con BD. En Changarritos, las pruebas de sistema, modulares e integración identificaron un error en el filtro; la deuda técnica se mantuvo controlada en 6 ítems.",
  },
  {
    icon: Target,
    question: "Si pudieran mejorar sólo un métrico, ¿cuál sería y por qué?",
    answer: "Lead Time. Leoneta lo redujo de 19 a 5 días y Changarritos de 12 a 5 días. Para Leoneta, un Lead Time más corto permitiría iterar más rápido sobre las fases pendientes: Fase 2 (Backend + BD NestJS), Fase 3 (Seguridad/Verificación e Incentivos) y Fase 4 (IA + analítica). Actualmente el 50% de funcionalidades están bloqueadas por falta de backend, por lo que reducir el Lead Time a 3 días con feature flags y trunk-based development aceleraría el desbloqueo. Es un métrico multiplicador: mejorarlo impulsa CSAT y velocidad simultáneamente, permitiendo obtener feedback real de la comunidad CUCEI más temprano.",
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
