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
  { id: "leoneta", name: "Leoneta", color: "hsl(142, 60%, 50%)" },
  { id: "changarritos", name: "Changarritos", color: "hsl(199, 89%, 48%)" },
];

export type TrafficStatus = "green" | "yellow" | "red";

export interface MetricData {
  name: string;
  key: string;
  unit: string;
  description: string;
  target: number;
  thresholds: { green: number; yellow: number };
  invertThreshold?: boolean;
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
      { sprint: "Sprint 1", projA: 5.8, projB: 6.5 },
      { sprint: "Sprint 2", projA: 4.9, projB: 5.4 },
      { sprint: "Sprint 3", projA: 4.1, projB: 4.7 },
      { sprint: "Sprint 4", projA: 3.3, projB: 4.0 },
      { sprint: "Sprint 5", projA: 2.6, projB: 3.4 },
      { sprint: "Sprint 6", projA: 1.9, projB: 2.8 },
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
      { sprint: "Sprint 1", projA: 28, projB: 25 },
      { sprint: "Sprint 2", projA: 40, projB: 35 },
      { sprint: "Sprint 3", projA: 52, projB: 46 },
      { sprint: "Sprint 4", projA: 63, projB: 55 },
      { sprint: "Sprint 5", projA: 72, projB: 64 },
      { sprint: "Sprint 6", projA: 79, projB: 71 },
    ],
  },
  {
    name: "CSAT",
    key: "csat",
    unit: "/5",
    description: "Customer Satisfaction Score — satisfacción de usuarios universitarios",
    target: 4.5,
    thresholds: { green: 4.0, yellow: 3.0 },
    history: [
      { sprint: "Sprint 1", projA: 3.1, projB: 3.3 },
      { sprint: "Sprint 2", projA: 3.4, projB: 3.5 },
      { sprint: "Sprint 3", projA: 3.7, projB: 3.7 },
      { sprint: "Sprint 4", projA: 4.0, projB: 3.9 },
      { sprint: "Sprint 5", projA: 4.3, projB: 4.1 },
      { sprint: "Sprint 6", projA: 4.5, projB: 4.3 },
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
      { sprint: "Sprint 1", projA: 20, projB: 18 },
      { sprint: "Sprint 2", projA: 26, projB: 23 },
      { sprint: "Sprint 3", projA: 31, projB: 28 },
      { sprint: "Sprint 4", projA: 35, projB: 32 },
      { sprint: "Sprint 5", projA: 39, projB: 35 },
      { sprint: "Sprint 6", projA: 43, projB: 38 },
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
      { sprint: "Sprint 1", projA: 58, projB: 55 },
      { sprint: "Sprint 2", projA: 65, projB: 63 },
      { sprint: "Sprint 3", projA: 73, projB: 70 },
      { sprint: "Sprint 4", projA: 80, projB: 77 },
      { sprint: "Sprint 5", projA: 86, projB: 82 },
      { sprint: "Sprint 6", projA: 92, projB: 87 },
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
      { sprint: "Sprint 1", projA: 19, projB: 20 },
      { sprint: "Sprint 2", projA: 16, projB: 17 },
      { sprint: "Sprint 3", projA: 13, projB: 14 },
      { sprint: "Sprint 4", projA: 10, projB: 12 },
      { sprint: "Sprint 5", projA: 7, projB: 9 },
      { sprint: "Sprint 6", projA: 5, projB: 7 },
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
  { sprint: "Sprint 1", projA: 175, projB: 155, cardsA: 11, cardsB: 10 },
  { sprint: "Sprint 2", projA: 190, projB: 170, cardsA: 14, cardsB: 12 },
  { sprint: "Sprint 3", projA: 205, projB: 188, cardsA: 17, cardsB: 15 },
  { sprint: "Sprint 4", projA: 198, projB: 192, cardsA: 19, cardsB: 17 },
  { sprint: "Sprint 5", projA: 210, projB: 200, cardsA: 21, cardsB: 19 },
  { sprint: "Sprint 6", projA: 218, projB: 208, cardsA: 24, cardsB: 21 },
];

export const technicalDebt = [
  { sprint: "Sprint 1", projA: 14, projB: 11 },
  { sprint: "Sprint 2", projA: 17, projB: 15 },
  { sprint: "Sprint 3", projA: 21, projB: 19 },
  { sprint: "Sprint 4", projA: 19, projB: 22 },
  { sprint: "Sprint 5", projA: 16, projB: 20 },
  { sprint: "Sprint 6", projA: 12, projB: 17 },
];

export const memberConclusions = [
  {
    member: teamMembers[0],
    conclusion: "Como Tech Lead, la arquitectura de Leoneta con autenticación institucional y el motor de coincidencias de rutas representaron retos técnicos significativos. La tasa de defectos bajó un 67% gracias a revisiones de código rigurosas. En Changarritos, la integración del catálogo centralizado de ventas se estabilizó a partir del Sprint 4. Recomiendo invertir en pruebas de integración end-to-end para ambos proyectos.",
  },
  {
    member: teamMembers[1],
    conclusion: "El desarrollo frontend de Leoneta requirió un UX cuidadoso para la publicación y búsqueda de viajes con mapas y horarios. En Changarritos, el diseño del marketplace universitario priorizó la simplicidad para los vendedores. La adopción de un design system compartido aceleró el desarrollo un 90%. Sugiero priorizar la reducción de deuda técnica en componentes de UI reutilizables.",
  },
  {
    member: teamMembers[2],
    conclusion: "El backend de Leoneta fue desafiante: motor de coincidencias conductor-pasajero, sistema de calificaciones y comunicación segura sin exponer datos personales. En Changarritos, la gestión de inventario y pedidos requirió transacciones robustas. Los pipelines CI/CD redujeron el Lead Time de 19 a 5 días. El siguiente paso es monitoreo en tiempo real.",
  },
  {
    member: teamMembers[3],
    conclusion: "La cobertura de pruebas creció de 28% a 79% en Leoneta, enfocándonos en el flujo de emparejamiento de rutas y validación de credenciales institucionales. En Changarritos alcanzamos 71%, cubriendo transacciones de venta y gestión de catálogo. Los tests automatizados detectaron el 75% de defectos antes de producción. Sugiero agregar pruebas de rendimiento para el motor de coincidencias.",
  },
  {
    member: teamMembers[4],
    conclusion: "La predictibilidad mejoró de 58% a 92% en Leoneta, reflejando mejor planificación del MVP: registro institucional, perfiles, publicación de viajes y motor de coincidencias. En Changarritos pasamos de 55% a 87%. La comunicación entre ambos equipos fue clave para compartir patrones y evitar duplicación de esfuerzos.",
  },
  {
    member: teamMembers[5],
    conclusion: "La infraestructura para Leoneta requirió configuración de servicios de geolocalización, envío de notificaciones y almacenamiento seguro de datos estudiantiles. En Changarritos, la escalabilidad para manejar picos de ventas universitarias fue prioritaria. Los pipelines automatizados redujeron tiempos de deployment en un 72%. Recomiendo invertir en observabilidad y alertas proactivas.",
  },
];
