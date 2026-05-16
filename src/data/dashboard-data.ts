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

/** Umbrales en banda (p. ej. predictibilidad 90–110 %). Si existe, prevalece sobre `thresholds` en el semáforo. */
export interface BandTraffic {
  greenMin: number;
  greenMax: number;
  yellowLowMin: number;
  yellowHighMax: number;
}

export interface MetricData {
  name: string;
  key: string;
  unit: string;
  description: string;
  /** Fórmula o método de cálculo (referencia metodológica). */
  formula: string;
  /** Objetivo ideal en lenguaje de negocio. */
  idealGoal: string;
  /** Herramientas habituales para medir o apoyar la métrica. */
  tools: string;
  target: number;
  thresholds: { green: number; yellow: number };
  invertThreshold?: boolean;
  bandTraffic?: BandTraffic;
  history: { sprint: string; projA: number; projB: number }[];
}

/** Plan de 8 sprints de 2 semanas cada uno (eje S1–S8 en gráficos); misma escala para Leoneta (projA) y Changarritos (projB). */
export const planSummary = {
  totalSprints: 8,
  sprintCadenceWeeks: 2,
  /** Texto corto para copy en UI (cadencia del sprint). */
  sprintCadenceNote: "cada sprint = 2 semanas",
  /** Equivalente en calendario (8 × 2 semanas). */
  totalCalendarWeeks: 16,
  /** Plan cerrado en el último sprint reportado (S8). */
  activeSprintNumber: 8,
  activeSprintLabel: "S8",
} as const;

// Leoneta: 5 ingenieros (projA). Changarritos: 1 (projB). Serie S1–S8 (8 sprints de 2 semanas).
export const metrics: MetricData[] = [
  {
    name: "Tasa de defectos (Defect Density)",
    key: "defect-density",
    unit: "defectos/KLOC",
    description:
      "Cantidad de defectos encontrados en relación al tamaño del producto o módulo entregado (p. ej. por mil líneas de código).",
    formula: "Defectos totales ÷ Tamaño del software (KLOC, story points u otra unidad de tamaño acordada).",
    idealGoal: "Lo más baja posible; referencia habitual < 1 defecto/KLOC.",
    tools: "Jira, Bugzilla, SonarQube, Azure DevOps.",
    target: 1,
    thresholds: { green: 1, yellow: 3 },
    invertThreshold: true,
    history: [
      { sprint: "S1", projA: 5.8, projB: 4.2 },
      { sprint: "S2", projA: 4.6, projB: 3.5 },
      { sprint: "S3", projA: 3.4, projB: 2.8 },
      { sprint: "S4", projA: 2.4, projB: 1.9 },
      { sprint: "S5", projA: 2.0, projB: 1.6 },
      { sprint: "S6", projA: 1.6, projB: 1.3 },
      { sprint: "S7", projA: 1.2, projB: 1.0 },
      { sprint: "S8", projA: 0.85, projB: 0.75 },
    ],
  },
  {
    name: "Cobertura de pruebas (%)",
    key: "test-coverage",
    unit: "%",
    description:
      "Porcentaje del código fuente ejecutado al menos una vez durante pruebas manuales.",
    formula: "(Líneas de código cubiertas ÷ Total de líneas de código) × 100.",
    idealGoal: "≥ 80 % de cobertura de pruebas.",
    tools: "Jest, JUnit, PyTest, JaCoCo, SonarQube, Cobertura.",
    target: 80,
    thresholds: { green: 80, yellow: 65 },
    history: [
      { sprint: "S1", projA: 12, projB: 18 },
      { sprint: "S2", projA: 28, projB: 38 },
      { sprint: "S3", projA: 52, projB: 62 },
      { sprint: "S4", projA: 78, projB: 84 },
      { sprint: "S5", projA: 80, projB: 86 },
      { sprint: "S6", projA: 82, projB: 87 },
      { sprint: "S7", projA: 84, projB: 88 },
      { sprint: "S8", projA: 86, projB: 90 },
    ],
  },
  {
    name: "CSAT (Customer Satisfaction Score)",
    key: "csat",
    unit: "%",
    description:
      "Satisfacción percibida tras una entrega o demo, como porcentaje de respuestas positivas. En este proyecto la encuesta se aplicó a 17 amigos de la carrera (muestra pequeña pero homogénea y cercana al contexto académico).",
    formula: "(Respuestas positivas ÷ Total de respuestas) × 100. Muestra: N = 17 (compañeros de la carrera).",
    idealGoal: "≥ 85 % de satisfacción (con N = 17, interpretar tendencia más que precisión estadística fina).",
    tools: "Encuesta breve (p. ej. Google Forms) a 17 compañeros de la carrera tras cada hito o release demo (al cierre de cada sprint de 2 semanas).",
    target: 85,
    thresholds: { green: 85, yellow: 75 },
    history: [
      { sprint: "S1", projA: 0, projB: 0 },
      { sprint: "S2", projA: 58, projB: 62 },
      { sprint: "S3", projA: 72, projB: 74 },
      { sprint: "S4", projA: 82, projB: 84 },
      { sprint: "S5", projA: 84, projB: 86 },
      { sprint: "S6", projA: 86, projB: 88 },
      { sprint: "S7", projA: 87, projB: 89 },
      { sprint: "S8", projA: 88, projB: 90 },
    ],
  },
  {
    name: "Velocidad media del equipo",
    key: "velocity",
    unit: "pts/sprint",
    description:
      "Promedio de story points completados por sprint (cada sprint = 2 semanas); refleja productividad y capacidad del equipo en la unidad de trabajo acordada.",
    formula: "Σ Story points completados ÷ Número de sprints (media por sprint en esta serie; sprint de 2 semanas).",
    idealGoal: "Consistente en el tiempo o con tendencia al alza.",
    tools: "Jira, Azure Boards, Trello, ClickUp.",
    target: 30,
    thresholds: { green: 25, yellow: 15 },
    history: [
      { sprint: "S1", projA: 24, projB: 40 },
      { sprint: "S2", projA: 28, projB: 46 },
      { sprint: "S3", projA: 30, projB: 50 },
      { sprint: "S4", projA: 32, projB: 54 },
      { sprint: "S5", projA: 54, projB: 55 },
      { sprint: "S6", projA: 55, projB: 55 },
      { sprint: "S7", projA: 56, projB: 56 },
      { sprint: "S8", projA: 57, projB: 56 },
    ],
  },
  {
    name: "Predictibilidad (% de compromiso cumplido)",
    key: "predictability",
    unit: "%",
    description:
      "Grado en que el equipo cumple los compromisos asumidos en cada sprint (cada sprint = 2 semanas) o release respecto al alcance planificado.",
    formula: "(Story points completados a tiempo ÷ Story points comprometidos) × 100.",
    idealGoal: "Entre 90 % y 110 % de cumplimiento (compromiso realista y entrega alineada).",
    tools: "Jira, Azure DevOps, Rally, VersionOne.",
    target: 100,
    thresholds: { green: 90, yellow: 80 },
    bandTraffic: { greenMin: 90, greenMax: 110, yellowLowMin: 80, yellowHighMax: 120 },
    history: [
      { sprint: "S1", projA: 72, projB: 78 },
      { sprint: "S2", projA: 78, projB: 82 },
      { sprint: "S3", projA: 84, projB: 88 },
      { sprint: "S4", projA: 87, projB: 91 },
      { sprint: "S5", projA: 92, projB: 94 },
      { sprint: "S6", projA: 94, projB: 96 },
      { sprint: "S7", projA: 96, projB: 98 },
      { sprint: "S8", projA: 98, projB: 100 },
    ],
  },
  {
    name: "Lead Time (tiempo total de entrega)",
    key: "lead-time",
    unit: "días",
    description:
      "Tiempo promedio desde la creación de una tarea o historia de usuario hasta su entrega en producción.",
    formula: "Fecha de entrega en producción − Fecha de creación de la tarea (promedio del conjunto).",
    idealGoal: "Lo más corto posible; mejora continua reduciendo esperas y retrabajo.",
    tools: "Jira, GitLab, Azure DevOps, Trello, LinearB.",
    target: 5,
    thresholds: { green: 7, yellow: 14 },
    invertThreshold: true,
    history: [
      { sprint: "S1", projA: 16, projB: 11 },
      { sprint: "S2", projA: 12, projB: 8.5 },
      { sprint: "S3", projA: 8.5, projB: 6.2 },
      { sprint: "S4", projA: 6.2, projB: 4.8 },
      { sprint: "S5", projA: 5.8, projB: 4.4 },
      { sprint: "S6", projA: 5.4, projB: 4.0 },
      { sprint: "S7", projA: 5.1, projB: 3.7 },
      { sprint: "S8", projA: 4.8, projB: 3.4 },
    ],
  },
];

/** Texto de meta para UI: bandas (p. ej. predictibilidad) o valor único + unidad. */
export function formatTargetLine(metric: MetricData): string {
  if (metric.bandTraffic) {
    return `${metric.bandTraffic.greenMin}–${metric.bandTraffic.greenMax} ${metric.unit}`;
  }
  return `${metric.target} ${metric.unit}`;
}

export function getTrafficStatus(metric: MetricData, value: number): TrafficStatus {
  if (metric.bandTraffic) {
    const b = metric.bandTraffic;
    if (value >= b.greenMin && value <= b.greenMax) return "green";
    if (value >= b.yellowLowMin && value < b.greenMin) return "yellow";
    if (value > b.greenMax && value <= b.yellowHighMax) return "yellow";
    return "red";
  }
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
  if (metric.bandTraffic) {
    return value >= metric.bandTraffic.greenMin && value <= metric.bandTraffic.greenMax;
  }
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

// Comparative data — S1–S4: Changarritos (1 pers.) con mayor ritmo de pts por sprint; S5–S8: ambos proyectos con “mismo punch” por sprint.
export const resourceConsumption = [
  { sprint: "S1", projA: 78, projB: 21, cardsA: 6, cardsB: 3 },
  { sprint: "S2", projA: 74, projB: 20, cardsA: 6, cardsB: 3 },
  { sprint: "S3", projA: 72, projB: 19, cardsA: 7, cardsB: 3 },
  { sprint: "S4", projA: 70, projB: 26, cardsA: 7, cardsB: 4 },
  { sprint: "S5", projA: 63, projB: 36, cardsA: 7, cardsB: 4 },
  { sprint: "S6", projA: 64, projB: 37, cardsA: 7, cardsB: 4 },
  { sprint: "S7", projA: 63, projB: 36, cardsA: 7, cardsB: 4 },
  { sprint: "S8", projA: 63, projB: 36, cardsA: 7, cardsB: 4 },
];

export const technicalDebt = [
  { sprint: "S1", projA: 12, projB: 4 },
  { sprint: "S2", projA: 11, projB: 5 },
  { sprint: "S3", projA: 9, projB: 5 },
  { sprint: "S4", projA: 7, projB: 6 },
  { sprint: "S5", projA: 6, projB: 5 },
  { sprint: "S6", projA: 5, projB: 5 },
  { sprint: "S7", projA: 4, projB: 4 },
  { sprint: "S8", projA: 3, projB: 4 },
];
