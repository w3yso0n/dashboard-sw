// Team members
export const teamMembers = [
  { id: 1, name: "Luis Avila", role: "Tech Lead", projects: ["Leoneta"] },
  { id: 2, name: "Alberto Vera", role: "Frontend Dev", projects: ["Leoneta"] },
  { id: 3, name: "Franco Aldrete", role: "Backend Dev", projects: ["Leoneta"] },
  { id: 4, name: "Braulio Jimenez", role: "QA Engineer", projects: ["Leoneta"] },
  { id: 5, name: "Emmanuel Woo", role: "Full Stack Dev", projects: ["Leoneta"] },
  { id: 6, name: "Faed Velasco", role: "Full Stack Dev", projects: ["Changarritos"] },
];

export const projects = [
  { id: "leoneta", name: "Leoneta", color: "hsl(142, 60%, 50%)", members: 5 },
  { id: "changarritos", name: "Changarritos", color: "hsl(199, 89%, 48%)", members: 1 },
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
      { sprint: "Sprint 1", projA: 5.8, projB: 4.5 },
      { sprint: "Sprint 2", projA: 4.9, projB: 3.8 },
      { sprint: "Sprint 3", projA: 4.1, projB: 3.2 },
      { sprint: "Sprint 4", projA: 3.3, projB: 2.7 },
      { sprint: "Sprint 5", projA: 2.6, projB: 2.2 },
      { sprint: "Sprint 6", projA: 1.9, projB: 1.8 },
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
      { sprint: "Sprint 1", projA: 28, projB: 35 },
      { sprint: "Sprint 2", projA: 40, projB: 45 },
      { sprint: "Sprint 3", projA: 52, projB: 54 },
      { sprint: "Sprint 4", projA: 63, projB: 62 },
      { sprint: "Sprint 5", projA: 72, projB: 70 },
      { sprint: "Sprint 6", projA: 79, projB: 76 },
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
      { sprint: "Sprint 1", projA: 3.1, projB: 3.4 },
      { sprint: "Sprint 2", projA: 3.4, projB: 3.6 },
      { sprint: "Sprint 3", projA: 3.7, projB: 3.8 },
      { sprint: "Sprint 4", projA: 4.0, projB: 4.0 },
      { sprint: "Sprint 5", projA: 4.3, projB: 4.2 },
      { sprint: "Sprint 6", projA: 4.5, projB: 4.4 },
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
      { sprint: "Sprint 1", projA: 20, projB: 5 },
      { sprint: "Sprint 2", projA: 26, projB: 7 },
      { sprint: "Sprint 3", projA: 31, projB: 8 },
      { sprint: "Sprint 4", projA: 35, projB: 9 },
      { sprint: "Sprint 5", projA: 39, projB: 10 },
      { sprint: "Sprint 6", projA: 43, projB: 11 },
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
      { sprint: "Sprint 1", projA: 58, projB: 65 },
      { sprint: "Sprint 2", projA: 65, projB: 70 },
      { sprint: "Sprint 3", projA: 73, projB: 76 },
      { sprint: "Sprint 4", projA: 80, projB: 82 },
      { sprint: "Sprint 5", projA: 86, projB: 87 },
      { sprint: "Sprint 6", projA: 92, projB: 90 },
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
      { sprint: "Sprint 1", projA: 19, projB: 12 },
      { sprint: "Sprint 2", projA: 16, projB: 10 },
      { sprint: "Sprint 3", projA: 13, projB: 8 },
      { sprint: "Sprint 4", projA: 10, projB: 7 },
      { sprint: "Sprint 5", projA: 7, projB: 6 },
      { sprint: "Sprint 6", projA: 5, projB: 5 },
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

// Comparative data — Leoneta: 5 ingenieros, Changarritos: 1 ingeniero
export const resourceConsumption = [
  { sprint: "Sprint 1", projA: 175, projB: 38, cardsA: 11, cardsB: 4 },
  { sprint: "Sprint 2", projA: 190, projB: 40, cardsA: 14, cardsB: 5 },
  { sprint: "Sprint 3", projA: 205, projB: 42, cardsA: 17, cardsB: 6 },
  { sprint: "Sprint 4", projA: 198, projB: 40, cardsA: 19, cardsB: 6 },
  { sprint: "Sprint 5", projA: 210, projB: 42, cardsA: 21, cardsB: 7 },
  { sprint: "Sprint 6", projA: 218, projB: 44, cardsA: 24, cardsB: 8 },
];

export const technicalDebt = [
  { sprint: "Sprint 1", projA: 14, projB: 5 },
  { sprint: "Sprint 2", projA: 17, projB: 7 },
  { sprint: "Sprint 3", projA: 21, projB: 8 },
  { sprint: "Sprint 4", projA: 19, projB: 9 },
  { sprint: "Sprint 5", projA: 16, projB: 8 },
  { sprint: "Sprint 6", projA: 12, projB: 6 },
];

export const memberConclusions = [
  {
    member: teamMembers[0],
    conclusion: "Como Tech Lead de Leoneta, la arquitectura del motor de coincidencias conductor-pasajero y la autenticación institucional fueron los retos principales. Con un equipo de 5 personas, logramos reducir la tasa de defectos un 67% y alcanzar 92% de predictibilidad. La coordinación del equipo fue clave para mantener la velocidad en 43 pts/sprint. Recomiendo invertir en pruebas de integración end-to-end del flujo de emparejamiento.",
  },
  {
    member: teamMembers[1],
    conclusion: "En Leoneta, el desarrollo frontend del flujo de publicación y búsqueda de viajes con mapas, horarios y sistema de calificaciones requirió un UX cuidadoso. La adopción de un design system aceleró la velocidad del equipo un 115% desde el Sprint 1. Sugiero reducir la deuda técnica en los componentes de mapa y formularios de viaje para facilitar futuras integraciones.",
  },
  {
    member: teamMembers[2],
    conclusion: "El backend de Leoneta fue desafiante: motor de coincidencias de rutas, sistema de calificaciones, comunicación segura sin exponer datos personales y validación de credenciales institucionales. Los pipelines CI/CD redujeron el Lead Time de 19 a 5 días. El siguiente paso es implementar monitoreo en tiempo real y optimizar las queries del motor de emparejamiento.",
  },
  {
    member: teamMembers[3],
    conclusion: "La cobertura de pruebas en Leoneta creció de 28% a 79%, enfocándonos en el flujo de emparejamiento de rutas y validación de credenciales institucionales. Los tests automatizados detectaron el 75% de defectos antes de producción. Sugiero agregar pruebas de rendimiento para el motor de coincidencias y tests de seguridad para la autenticación.",
  },
  {
    member: teamMembers[4],
    conclusion: "En Leoneta, la predictibilidad mejoró de 58% a 92%, reflejando mejor planificación del MVP: registro institucional, perfiles, publicación de viajes y motor de coincidencias. Trabajar en un equipo de 5 permitió especialización por módulo. Propongo sesiones de refinamiento más frecuentes y documentación técnica para las futuras fases del proyecto.",
  },
  {
    member: teamMembers[5],
    conclusion: "Como única integrante de Changarritos, asumí todos los roles: frontend, backend, QA y deployment. El proyecto alcanzó 76% de cobertura de pruebas, 90% de predictibilidad y un Lead Time de 5 días. Trabajar sola permitió agilidad en decisiones pero requirió disciplina estricta. La deuda técnica se mantuvo controlada (6 ítems). Recomiendo incorporar al menos un integrante más para acelerar el desarrollo del marketplace universitario.",
  },
];
