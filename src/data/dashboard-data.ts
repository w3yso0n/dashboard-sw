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

// Leoneta: S0–S7 (8 sprints). Changarritos: S0–S8 (9 sprints). Misma serie temporal; S8 solo aplica a Changarritos (projA repetido S7).
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
      { sprint: "S3", projA: 4.0, projB: 3.2 },
      { sprint: "S4", projA: 2.7, projB: 2.1 },
      { sprint: "S5", projA: 2.7, projB: 2.1 },
      { sprint: "S6", projA: 2.7, projB: 2.1 },
      { sprint: "S7", projA: 2.7, projB: 2.1 },
      { sprint: "S8", projA: 2.7, projB: 2.1 },
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
      { sprint: "S3", projA: 64, projB: 71 },
      { sprint: "S4", projA: 78, projB: 84 },
      { sprint: "S5", projA: 78, projB: 84 },
      { sprint: "S6", projA: 78, projB: 84 },
      { sprint: "S7", projA: 78, projB: 84 },
      { sprint: "S8", projA: 78, projB: 84 },
    ],
  },
  {
    name: "CSAT",
    key: "csat",
    unit: "/5",
    description: "Customer Satisfaction Score — pendiente de medición hasta uso real de la app",
    target: 4.5,
    thresholds: { green: 4.0, yellow: 3.0 },
    history: [
      { sprint: "S0", projA: 0, projB: 0 },
      { sprint: "S1", projA: 2.8, projB: 3.0 },
      { sprint: "S2", projA: 3.0, projB: 3.3 },
      { sprint: "S3", projA: 3.7, projB: 3.8 },
      { sprint: "S4", projA: 4.25, projB: 4.35 },
      { sprint: "S5", projA: 4.25, projB: 4.35 },
      { sprint: "S6", projA: 4.25, projB: 4.35 },
      { sprint: "S7", projA: 4.25, projB: 4.35 },
      { sprint: "S8", projA: 4.25, projB: 4.35 },
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
      { sprint: "S0", projA: 21, projB: 4 },
      { sprint: "S1", projA: 31, projB: 6 },
      { sprint: "S2", projA: 38, projB: 8 },
      { sprint: "S3", projA: 40, projB: 10 },
      { sprint: "S4", projA: 44, projB: 26 },
      { sprint: "S5", projA: 44, projB: 26 },
      { sprint: "S6", projA: 44, projB: 26 },
      { sprint: "S7", projA: 44, projB: 26 },
      { sprint: "S8", projA: 44, projB: 26 },
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
      { sprint: "S3", projA: 83, projB: 84 },
      { sprint: "S4", projA: 87, projB: 89 },
      { sprint: "S5", projA: 87, projB: 89 },
      { sprint: "S6", projA: 87, projB: 89 },
      { sprint: "S7", projA: 87, projB: 89 },
      { sprint: "S8", projA: 87, projB: 89 },
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
      { sprint: "S3", projA: 9.5, projB: 7 },
      { sprint: "S4", projA: 6.2, projB: 4.8 },
      { sprint: "S5", projA: 6.2, projB: 4.8 },
      { sprint: "S6", projA: 6.2, projB: 4.8 },
      { sprint: "S7", projA: 6.2, projB: 4.8 },
      { sprint: "S8", projA: 6.2, projB: 4.8 },
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

/** Indica si el valor cumple la meta numérica declarada (distinta del “semáforo” por umbrales). */
export function meetsTarget(metric: MetricData, value: number): boolean {
  if (metric.invertThreshold) return value <= metric.target;
  return value >= metric.target;
}

/** Texto junto al semáforo: distingue “en la meta” de “en zona verde pero sin llegar al objetivo”. */
export function getTrafficLabel(metric: MetricData, value: number): string {
  const status = getTrafficStatus(metric, value);
  if (status === "red") return "Requiere atención";
  if (status === "yellow") return "A mejorar";
  if (meetsTarget(metric, value)) return "En la meta";
  return "En rango; meta pendiente";
}

// Comparative data — Leoneta: 5 ingenieros, Changarritos: 1 ingeniero
export const resourceConsumption = [
  { sprint: "S0", projA: 44, projB: 14, cardsA: 4, cardsB: 1 },
  { sprint: "S1", projA: 66, projB: 40, cardsA: 6, cardsB: 2 },
  { sprint: "S2", projA: 70, projB: 42, cardsA: 6, cardsB: 2 },
  { sprint: "S3", projA: 68, projB: 38, cardsA: 6, cardsB: 2 },
  { sprint: "S4", projA: 72, projB: 46, cardsA: 6, cardsB: 2 },
  { sprint: "S5", projA: 72, projB: 46, cardsA: 6, cardsB: 2 },
  { sprint: "S6", projA: 74, projB: 48, cardsA: 6, cardsB: 2 },
  { sprint: "S7", projA: 74, projB: 50, cardsA: 6, cardsB: 2 },
  { sprint: "S8", projA: 74, projB: 50, cardsA: 6, cardsB: 2 },
];

export const technicalDebt = [
  { sprint: "S0", projA: 0, projB: 0 },
  { sprint: "S1", projA: 9, projB: 4 },
  { sprint: "S2", projA: 11, projB: 5 },
  { sprint: "S3", projA: 7, projB: 6 },
  { sprint: "S4", projA: 4, projB: 6 },
  { sprint: "S5", projA: 4, projB: 6 },
  { sprint: "S6", projA: 3, projB: 5 },
  { sprint: "S7", projA: 3, projB: 5 },
  { sprint: "S8", projA: 3, projB: 5 },
];

export const memberConclusions = [
  {
    member: teamMembers[0],
    conclusion: "Como Tech Lead de Leoneta, coordiné la arquitectura del carpooling para CUCEI. Llevamos cerrados los Sprints 0–3 con un flujo general funcional (login, búsqueda, publicación conectados al backend). Estamos en Sprint 4: faltan detalles de UX, notificaciones y flujos avanzados; las pruebas formales (Sprint 5), correcciones y cierre (Sprints 6–7) están por delante. La predictibilidad ya está en rango saludable (~87–89%) y el Lead Time se acerca al objetivo; priorizamos terminar Sprint 4 antes de comprometer métricas de cierre.",
  },
  {
    member: teamMembers[1],
    conclusion: "Integré el frontend con la API en Sprint 3 y el flujo básico ya recorre login → buscar → solicitar. En Sprint 4 sigo con sincronización entre pantallas, feedback visual y notificaciones; aún no hay pulido completo ni suite de pruebas modulares al 100%. Pendientes: transiciones, responsive fino y validación con QA en el siguiente sprint.",
  },
  {
    member: teamMembers[2],
    conclusion: "El backend (Sprints 1–2) cubre API REST, matching, estados del ride y auth institucional. El producto no está al 100%: en Sprint 4 seguimos con calificaciones, validación de conductores y reportes; bugs conocidos (alertas, transición a Completado, asientos) están planeados para corregir en Sprint 6 tras las pruebas de Sprint 5.",
  },
  {
    member: teamMembers[3],
    conclusion: "Aún no ejecutamos la batería completa de pruebas de Sprint 5: las suites MC, INT y SYS y la validación end-to-end quedan pendientes. En el backlog están los casos de integración (solicitud/notificaciones, viaje hasta Completado) y el Test Report final para Sprint 7. Mi foco ahora es preparar criterios y datos de prueba alineados con lo que termine Sprint 4.",
  },
  {
    member: teamMembers[4],
    conclusion: "Participé en el motor de coincidencias (Sprint 2) y ahora en Sprint 4 en sincronización de estados y flujos de solicitud. Notificaciones en tiempo real y refinamiento del matching siguen abiertos; la cobertura de pruebas subió de forma sostenida y roza la meta de cierre; consolidaremos el salto final con la batería de QA de Sprint 5.",
  },
  {
    member: teamMembers[5],
    conclusion: "En Changarritos (plan 9 sprints, 0–8) cerré S0 con Test Plan y KPIs; S1 autenticación; S2 CRUD de productos; S3 catálogo con filtros, buscador y detalle. Estoy en Sprint 4: WhatsApp, chatbot IA y recomendaciones, con QA de respuestas y errores de IA. Pendientes S5 (notificaciones y favoritos), S6 (dashboard y batería de pruebas), S7 (bugs y rendimiento) y S8 (Test Report, documentación y validación final).",
  },
];
