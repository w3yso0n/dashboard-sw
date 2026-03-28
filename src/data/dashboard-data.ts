// Team members
export const teamMembers = [
  { id: 1, name: "Luis Felipe Avila Leyva", role: "Tech Lead", projects: ["Leoneta"] },
  { id: 2, name: "Alberto Vera Ruiz", role: "Frontend Dev", projects: ["Leoneta"] },
  { id: 3, name: "Franco Alexandro Aldrete de la Mora", role: "Backend Dev", projects: ["Leoneta"] },
  { id: 4, name: "Braulio Jimenez Chavez", role: "QA Engineer", projects: ["Leoneta"] },
  { id: 5, name: "Emanuel Cavazos Woo", role: "Full Stack Dev", projects: ["Leoneta"] },
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

// Sprints 0-7 for both projects
// Leoneta: 5 engineers, Changarritos: 1 engineer
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
      { sprint: "S0", projA: 0, projB: 0 },
      { sprint: "S1", projA: 6.2, projB: 4.8 },
      { sprint: "S2", projA: 5.4, projB: 4.0 },
      { sprint: "S3", projA: 4.5, projB: 3.5 },
      { sprint: "S4", projA: 3.6, projB: 2.9 },
      { sprint: "S5", projA: 4.2, projB: 2.4 },
      { sprint: "S6", projA: 2.1, projB: 1.9 },
      { sprint: "S7", projA: 1.5, projB: 1.6 },
    ],
  },
  {
    name: "Cobertura de Pruebas",
    key: "test-coverage",
    unit: "%",
    description: "Porcentaje de código cubierto por pruebas",
    target: 80,
    thresholds: { green: 75, yellow: 50 },
    history: [
      { sprint: "S0", projA: 0, projB: 0 },
      { sprint: "S1", projA: 10, projB: 15 },
      { sprint: "S2", projA: 22, projB: 30 },
      { sprint: "S3", projA: 35, projB: 42 },
      { sprint: "S4", projA: 48, projB: 55 },
      { sprint: "S5", projA: 68, projB: 70 },
      { sprint: "S6", projA: 78, projB: 76 },
      { sprint: "S7", projA: 82, projB: 80 },
    ],
  },
  {
    name: "CSAT",
    key: "csat",
    unit: "/5",
    description: "Customer Satisfaction Score — satisfacción de usuarios universitarios (estimado)",
    target: 4.5,
    thresholds: { green: 4.0, yellow: 3.0 },
    history: [
      { sprint: "S0", projA: 0, projB: 0 },
      { sprint: "S1", projA: 2.8, projB: 3.0 },
      { sprint: "S2", projA: 3.0, projB: 3.3 },
      { sprint: "S3", projA: 3.4, projB: 3.5 },
      { sprint: "S4", projA: 3.8, projB: 3.8 },
      { sprint: "S5", projA: 4.0, projB: 4.0 },
      { sprint: "S6", projA: 4.3, projB: 4.3 },
      { sprint: "S7", projA: 4.5, projB: 4.4 },
    ],
  },
  {
    name: "Velocidad del Equipo",
    key: "velocity",
    unit: "pts/sprint",
    description: "Story points completados por sprint",
    target: 30,
    thresholds: { green: 25, yellow: 15 },
    history: [
      { sprint: "S0", projA: 10, projB: 4 },
      { sprint: "S1", projA: 20, projB: 5 },
      { sprint: "S2", projA: 29, projB: 10 },
      { sprint: "S3", projA: 26, projB: 8 },
      { sprint: "S4", projA: 31, projB: 6 },
      { sprint: "S5", projA: 29, projB: 8 },
      { sprint: "S6", projA: 23, projB: 11 },
      { sprint: "S7", projA: 18, projB: 5 },
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
      { sprint: "S0", projA: 100, projB: 100 },
      { sprint: "S1", projA: 70, projB: 75 },
      { sprint: "S2", projA: 76, projB: 80 },
      { sprint: "S3", projA: 82, projB: 82 },
      { sprint: "S4", projA: 85, projB: 85 },
      { sprint: "S5", projA: 80, projB: 88 },
      { sprint: "S6", projA: 92, projB: 90 },
      { sprint: "S7", projA: 95, projB: 95 },
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
      { sprint: "S0", projA: 3, projB: 2 },
      { sprint: "S1", projA: 18, projB: 10 },
      { sprint: "S2", projA: 14, projB: 8 },
      { sprint: "S3", projA: 11, projB: 7 },
      { sprint: "S4", projA: 9, projB: 6 },
      { sprint: "S5", projA: 8, projB: 5 },
      { sprint: "S6", projA: 5, projB: 4 },
      { sprint: "S7", projA: 4, projB: 3 },
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
  { sprint: "S0", projA: 50, projB: 10, cardsA: 4, cardsB: 2 },
  { sprint: "S1", projA: 175, projB: 35, cardsA: 5, cardsB: 2 },
  { sprint: "S2", projA: 200, projB: 42, cardsA: 5, cardsB: 2 },
  { sprint: "S3", projA: 195, projB: 38, cardsA: 5, cardsB: 2 },
  { sprint: "S4", projA: 210, projB: 35, cardsA: 6, cardsB: 2 },
  { sprint: "S5", projA: 220, projB: 40, cardsA: 7, cardsB: 3 },
  { sprint: "S6", projA: 200, projB: 44, cardsA: 6, cardsB: 3 },
  { sprint: "S7", projA: 150, projB: 25, cardsA: 5, cardsB: 2 },
];

export const technicalDebt = [
  { sprint: "S0", projA: 0, projB: 0 },
  { sprint: "S1", projA: 8, projB: 3 },
  { sprint: "S2", projA: 14, projB: 5 },
  { sprint: "S3", projA: 18, projB: 6 },
  { sprint: "S4", projA: 22, projB: 7 },
  { sprint: "S5", projA: 25, projB: 8 },
  { sprint: "S6", projA: 14, projB: 6 },
  { sprint: "S7", projA: 8, projB: 4 },
];

export const memberConclusions = [
  {
    member: teamMembers[0],
    conclusion: "Como Tech Lead de Leoneta, coordiné la arquitectura de la plataforma de carpooling universitario para CUCEI. A lo largo de 8 sprints (Sprint 0–7), el proyecto pasó de la fase preparatoria hasta el cierre con documentación completa. El backend con NestJS quedó funcional, la integración frontend-backend se completó en Sprint 3, y las correcciones críticas se resolvieron en Sprint 6. La predictibilidad mejoró de 70% a 95% y el Lead Time bajó de 18 a 4 días. Recomiendo continuar con la fase de seguridad avanzada e IA para recomendación de rutas en futuras iteraciones.",
  },
  {
    member: teamMembers[1],
    conclusion: "En Leoneta desarrollé el frontend y lideré la integración con el backend en Sprint 3, sustituyendo todos los mocks por llamadas reales a la API. Los flujos de login, búsqueda, publicación y perfil quedaron conectados al backend. En Sprint 6 corregí el bug responsive del campo Destino en pantallas <400px. Las pruebas modulares de mis componentes pasaron al 100% (5/5). Sugiero seguir mejorando la experiencia móvil y agregar animaciones de transición entre pantallas.",
  },
  {
    member: teamMembers[2],
    conclusion: "El backend de Leoneta se desarrolló entre Sprint 1 y Sprint 2, logrando una API REST completa con NestJS y PostgreSQL. Implementé el CRUD de usuarios y rides, el motor de coincidencias, los estados del ride y la autenticación institucional. En Sprint 6 corregí los bugs críticos de transición de estado a Completado y actualización de asientos. La deuda técnica se redujo de 25 a 8 ítems entre Sprint 5 y Sprint 7.",
  },
  {
    member: teamMembers[3],
    conclusion: "Ejecuté 15 casos de prueba en Leoneta durante Sprint 5: 5 modulares (MC), 5 de integración (INT) y 5 de sistema (SYS). Resultado: 12 aprobados y 3 fallidos (80% de éxito). Los fallos fueron: INT_Solicitud_Aceptar_Notificacion (falta alerta de aceptación), INT_Viaje_Calificacion (sin transición a Completado) y SYS_RESPONSIVE (desbordamiento <400px). Los 3 bugs se corrigieron en Sprint 6. En Sprint 7 realicé la validación final end-to-end y elaboré el Test Report.",
  },
  {
    member: teamMembers[4],
    conclusion: "En Leoneta trabajé en el backend del motor de coincidencias (Sprint 2), la sincronización de flujos en tiempo real (Sprint 4) y la corrección del bug de notificaciones en Sprint 6. La velocidad del equipo alcanzó su pico de 31 pts en Sprint 4, bajando naturalmente en Sprint 7 (cierre). La cobertura de pruebas subió de 0% a 82%. Propongo para el futuro implementar WebSockets para notificaciones en tiempo real y mejorar el matching con factores de reputación.",
  },
  {
    member: teamMembers[5],
    conclusion: "Como único integrante de Changarritos, asumí todos los roles: frontend, backend, QA y deployment. En 8 sprints el marketplace universitario alcanzó 80% de cobertura de pruebas, 95% de predictibilidad y un Lead Time de 3 días. Se identificó un único error en el módulo de filtros de búsqueda (Sprint 5), que fue corregido en el mismo sprint. Trabajar solo permitió agilidad en decisiones pero requirió disciplina estricta. La deuda técnica se mantuvo controlada (4 ítems al cierre).",
  },
];
