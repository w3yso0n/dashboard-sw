// Team members
export const teamMembers = [
  { id: 1, name: "Carlos Méndez", role: "Tech Lead" },
  { id: 2, name: "Ana García", role: "Frontend Dev" },
  { id: 3, name: "Luis Hernández", role: "Backend Dev" },
  { id: 4, name: "María López", role: "QA Engineer" },
  { id: 5, name: "Jorge Ramírez", role: "Full Stack Dev" },
  { id: 6, name: "Sofía Torres", role: "DevOps Engineer" },
];

export const projects = [
  { id: "proj-a", name: "Proyecto Alpha", color: "hsl(142, 60%, 50%)" },
  { id: "proj-b", name: "Proyecto Beta", color: "hsl(199, 89%, 48%)" },
];

export type TrafficStatus = "green" | "yellow" | "red";

export interface MetricData {
  name: string;
  key: string;
  unit: string;
  description: string;
  target: number;
  thresholds: { green: number; yellow: number }; // >= green = green, >= yellow = yellow, else red
  invertThreshold?: boolean; // true if lower is better
  history: { sprint: string; projA: number; projB: number }[];
}

export const metrics: MetricData[] = [
  {
    name: "Tasa de Defectos",
    key: "defect-density",
    unit: "defectos/KLOC",
    description: "Densidad de defectos por cada 1000 líneas de código por sprint",
    target: 2,
    thresholds: { green: 3, yellow: 5 },
    invertThreshold: true,
    history: [
      { sprint: "Sprint 1", projA: 6.2, projB: 7.1 },
      { sprint: "Sprint 2", projA: 5.1, projB: 5.8 },
      { sprint: "Sprint 3", projA: 4.3, projB: 4.9 },
      { sprint: "Sprint 4", projA: 3.5, projB: 4.2 },
      { sprint: "Sprint 5", projA: 2.8, projB: 3.6 },
      { sprint: "Sprint 6", projA: 2.1, projB: 3.1 },
    ],
  },
  {
    name: "Cobertura de Pruebas",
    key: "test-coverage",
    unit: "%",
    description: "Porcentaje de código cubierto por pruebas automatizadas",
    target: 80,
    thresholds: { green: 75, yellow: 50 },
    history: [
      { sprint: "Sprint 1", projA: 32, projB: 28 },
      { sprint: "Sprint 2", projA: 45, projB: 38 },
      { sprint: "Sprint 3", projA: 55, projB: 48 },
      { sprint: "Sprint 4", projA: 65, projB: 56 },
      { sprint: "Sprint 5", projA: 74, projB: 62 },
      { sprint: "Sprint 6", projA: 81, projB: 70 },
    ],
  },
  {
    name: "CSAT",
    key: "csat",
    unit: "/5",
    description: "Customer Satisfaction Score promedio",
    target: 4.5,
    thresholds: { green: 4.0, yellow: 3.0 },
    history: [
      { sprint: "Sprint 1", projA: 3.2, projB: 3.0 },
      { sprint: "Sprint 2", projA: 3.5, projB: 3.3 },
      { sprint: "Sprint 3", projA: 3.8, projB: 3.5 },
      { sprint: "Sprint 4", projA: 4.0, projB: 3.7 },
      { sprint: "Sprint 5", projA: 4.2, projB: 3.9 },
      { sprint: "Sprint 6", projA: 4.4, projB: 4.1 },
    ],
  },
  {
    name: "Velocidad del Equipo",
    key: "velocity",
    unit: "pts/sprint",
    description: "Story points completados por sprint",
    target: 40,
    thresholds: { green: 35, yellow: 25 },
    history: [
      { sprint: "Sprint 1", projA: 22, projB: 18 },
      { sprint: "Sprint 2", projA: 28, projB: 24 },
      { sprint: "Sprint 3", projA: 32, projB: 28 },
      { sprint: "Sprint 4", projA: 36, projB: 30 },
      { sprint: "Sprint 5", projA: 38, projB: 34 },
      { sprint: "Sprint 6", projA: 42, projB: 37 },
    ],
  },
  {
    name: "Predictibilidad",
    key: "predictability",
    unit: "%",
    description: "Porcentaje de compromiso cumplido por sprint",
    target: 90,
    thresholds: { green: 85, yellow: 70 },
    history: [
      { sprint: "Sprint 1", projA: 60, projB: 55 },
      { sprint: "Sprint 2", projA: 68, projB: 62 },
      { sprint: "Sprint 3", projA: 75, projB: 70 },
      { sprint: "Sprint 4", projA: 82, projB: 76 },
      { sprint: "Sprint 5", projA: 88, projB: 80 },
      { sprint: "Sprint 6", projA: 91, projB: 85 },
    ],
  },
  {
    name: "Lead Time",
    key: "lead-time",
    unit: "días",
    description: "Tiempo promedio desde solicitud hasta entrega",
    target: 5,
    thresholds: { green: 7, yellow: 14 },
    invertThreshold: true,
    history: [
      { sprint: "Sprint 1", projA: 18, projB: 22 },
      { sprint: "Sprint 2", projA: 15, projB: 19 },
      { sprint: "Sprint 3", projA: 12, projB: 16 },
      { sprint: "Sprint 4", projA: 10, projB: 13 },
      { sprint: "Sprint 5", projA: 8, projB: 11 },
      { sprint: "Sprint 6", projA: 6, projB: 9 },
    ],
  },
];

export function getTrafficStatus(metric: MetricData, value: number): TrafficStatus {
  if (metric.invertThreshold) {
    if (value <= metric.thresholds.green) return "green";
    if (value <= metric.thresholds.yellow) return "yellow";
    return "red";
  }
  if (value >= metric.thresholds.green) return "green";
  if (value >= metric.thresholds.yellow) return "yellow";
  return "red";
}

// Comparative data
export const resourceConsumption = [
  { sprint: "Sprint 1", projA: 180, projB: 160, cardsA: 12, cardsB: 10 },
  { sprint: "Sprint 2", projA: 195, projB: 175, cardsA: 15, cardsB: 13 },
  { sprint: "Sprint 3", projA: 210, projB: 190, cardsA: 18, cardsB: 15 },
  { sprint: "Sprint 4", projA: 200, projB: 195, cardsA: 20, cardsB: 17 },
  { sprint: "Sprint 5", projA: 215, projB: 205, cardsA: 22, cardsB: 19 },
  { sprint: "Sprint 6", projA: 220, projB: 210, cardsA: 24, cardsB: 21 },
];

export const technicalDebt = [
  { sprint: "Sprint 1", projA: 15, projB: 12 },
  { sprint: "Sprint 2", projA: 18, projB: 16 },
  { sprint: "Sprint 3", projA: 22, projB: 20 },
  { sprint: "Sprint 4", projA: 20, projB: 23 },
  { sprint: "Sprint 5", projA: 17, projB: 21 },
  { sprint: "Sprint 6", projA: 14, projB: 18 },
];

export const memberConclusions = [
  {
    member: teamMembers[0],
    conclusion: "Como Tech Lead, he observado una mejora significativa en la madurez de nuestros procesos. La implementación de revisiones de código más rigurosas redujo la tasa de defectos en un 66%. Debemos continuar invirtiendo en automatización de pruebas para alcanzar el 90% de cobertura.",
  },
  {
    member: teamMembers[1],
    conclusion: "La adopción de componentes reutilizables y un design system consistente aceleró nuestro desarrollo frontend. La velocidad del equipo mejoró un 90% desde el Sprint 1. Recomiendo priorizar la reducción de deuda técnica en el frontend para mantener esta tendencia.",
  },
  {
    member: teamMembers[2],
    conclusion: "La arquitectura backend se estabilizó a partir del Sprint 4, reflejándose en la reducción del Lead Time. La implementación de CI/CD pipelines fue clave. El siguiente paso es implementar monitoreo en tiempo real para detectar problemas antes que lleguen a producción.",
  },
  {
    member: teamMembers[3],
    conclusion: "La cobertura de pruebas creció de 32% a 81% en Proyecto Alpha. Los tests automatizados detectaron el 73% de defectos antes de producción. Para mejorar, sugiero implementar pruebas de rendimiento y pruebas de integración end-to-end.",
  },
  {
    member: teamMembers[4],
    conclusion: "La predictibilidad del equipo mejoró de 60% a 91%, lo que demuestra una mejor planificación y estimación. La comunicación entre equipos fue esencial. Propongo sesiones de refinamiento más frecuentes para mantener este nivel.",
  },
  {
    member: teamMembers[5],
    conclusion: "La infraestructura como código y los pipelines automatizados redujeron los tiempos de deployment en un 70%. La deuda técnica en infraestructura disminuyó. Recomiendo invertir en observabilidad y alertas proactivas para el siguiente ciclo.",
  },
];
