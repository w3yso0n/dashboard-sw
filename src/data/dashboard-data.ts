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
    conclusion: "Como Tech Lead de Leoneta, coordiné la arquitectura de la plataforma de carpooling universitario para CUCEI. El proyecto alcanza ~35% de avance global: el frontend demo está al 65–75% con flujos funcionales (registro, login, búsqueda, publicación de viajes, perfil y calificaciones) operando con datos mock. De 10 objetivos, 2 están completos y 6 sin iniciar. La prioridad inmediata es la implementación de API/BD con NestJS y el flujo real de solicitud/aceptación de rides. En pruebas ejecutamos 15 casos (sistema, modulares e integración) con 80% de éxito (12 aprobados, 3 fallidos). Recomiendo priorizar el backend y la gestión de estados del ride para desbloquear el 50% de funcionalidades pendientes.",
  },
  {
    member: teamMembers[1],
    conclusion: "En Leoneta desarrollé el frontend de los flujos principales: registro de usuario, búsqueda de viajes con filtros, publicación de viajes, perfil y sistema de calificaciones/valoraciones. Todos operan con datos mock en la demo. Las pruebas modulares (MC) de estos componentes pasaron al 100% (5/5 aprobados). El caso SYS_RESPONSIVE_013 falló porque en pantallas <400px el campo 'Destino' se desborda. Sugiero ajustar estilos responsive y preparar la integración frontend-backend sustituyendo mocks por llamadas reales con manejo de errores.",
  },
  {
    member: teamMembers[2],
    conclusion: "El backend de Leoneta está en etapa temprana (0–10%). Mi enfoque ha sido el diseño del esquema de base de datos (usuarios, viajes, solicitudes, calificaciones, reportes, auditoría) y la arquitectura de la API REST con NestJS. Los bugs principales identificados son: falta de estado global/persistente del ride, no se actualizan asientos al aceptar pasajeros, y no hay comunicación entre pantallas. Las pruebas de integración revelaron 2 de los 3 fallos (INT_Solicitud_Aceptar y INT_Viaje_Calificacion) por ausencia de backend real. El siguiente paso es implementar endpoints para login institucional, viajes, solicitudes y estados del ride.",
  },
  {
    member: teamMembers[3],
    conclusion: "Ejecuté 15 casos de prueba en Leoneta: 5 pruebas modulares (MC), 5 de integración (INT) y 5 de sistema (SYS). Resultado: 12 aprobados y 3 fallidos (80% de éxito). Los fallos fueron: INT_Solicitud_Aceptar_Notificacion_04 (falta estado del ride aceptado y alertas), INT_Viaje_Calificacion_05 (no existe transición a Completado ni flujo real de calificar), y SYS_RESPONSIVE_013 (desbordamiento del campo Destino en <400px). Los bugs críticos requieren un store global (Context/Redux/Zustand) y backend con BD para gestionar estados reales de los viajes.",
  },
  {
    member: teamMembers[4],
    conclusion: "En Leoneta, la predictibilidad mejoró de 58% a 92%, reflejando mejor planificación del MVP. De 12 módulos en el backlog, 6 están implementados en demo (50%) y 6 bloqueados por falta de backend/BD. Trabajar en un equipo de 5 permitió especialización por módulo. Las fases pendientes incluyen: Fase 2 (Backend + BD NestJS, 0–10%), Fase 3 (Seguridad/Verificación + Incentivos, 0–5%) y Fase 4 (IA + analítica, 0%). Propongo priorizar la conexión frontend-backend y definir reglas de verificación institucional (correo UDG, comprobante de pertenencia).",
  },
  {
    member: teamMembers[5],
    conclusion: "Como único integrante de Changarritos, asumí todos los roles: frontend, backend, QA y deployment. El proyecto de marketplace universitario alcanzó 76% de cobertura de pruebas, 90% de predictibilidad y un Lead Time de 5 días. Trabajar solo permitió agilidad en decisiones pero requirió disciplina estricta en testing automatizado y análisis estático. La deuda técnica se mantuvo controlada (6 ítems). Recomiendo incorporar al menos un integrante más para acelerar el desarrollo de la plataforma de centralización de ventas universitarias.",
  },
];
