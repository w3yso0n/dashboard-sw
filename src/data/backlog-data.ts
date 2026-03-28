export type TaskStatus = "done" | "in-progress" | "blocked" | "todo";
export type TaskPriority = "critical" | "high" | "medium" | "low";

export interface BacklogTask {
  id: string;
  title: string;
  sprint: string;
  project: "leoneta" | "changarritos";
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  storyPoints: number;
  category: string;
  epic?: string;
}

export const backlogTasks: BacklogTask[] = [
  // ========================
  // LEONETA — Sprint 0 (Preparatorio)
  // 2026-02-02 → 2026-02-06
  // ========================
  { id: "L-001", title: "Análisis del estado actual del proyecto", sprint: "Sprint 0", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Análisis", epic: "Cierre" },
  { id: "L-002", title: "Identificación de riesgos técnicos y organizacionales", sprint: "Sprint 0", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Análisis", epic: "Cierre" },
  { id: "L-003", title: "Definición de KPIs y métricas de calidad", sprint: "Sprint 0", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 3, category: "Documentación", epic: "Métricas" },
  { id: "L-004", title: "Documento de métricas y riesgos", sprint: "Sprint 0", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Documentación", epic: "Cierre" },

  // ========================
  // LEONETA — Sprint 1 (Backend Base)
  // 2026-02-09 → 2026-02-21
  // ========================
  { id: "L-005", title: "Diseño del esquema de base de datos (usuarios, viajes, solicitudes, calificaciones)", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Backend y lógica" },
  { id: "L-006", title: "Setup del proyecto backend (NestJS + PostgreSQL)", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 3, category: "Infraestructura", epic: "Backend y lógica" },
  { id: "L-007", title: "CRUD de usuarios (registro, perfil, actualización)", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Fundamentos del sistema" },
  { id: "L-008", title: "CRUD de rides (crear, listar, detalle, eliminar)", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Backend", epic: "Core de rides" },
  { id: "L-009", title: "Configuración de CI/CD y repositorio", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Infraestructura", epic: "Backend y lógica" },

  // ========================
  // LEONETA — Sprint 2 (Lógica Core)
  // 2026-02-22 → 2026-03-10
  // ========================
  { id: "L-010", title: "Implementación de API REST completa (usuarios, rides, solicitudes)", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 8, category: "Backend", epic: "Backend y lógica" },
  { id: "L-011", title: "Motor de coincidencias (matching básico origen-destino-horario)", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 8, category: "Backend", epic: "Core de rides" },
  { id: "L-012", title: "Manejo de estados del ride (pendiente, aceptado, completado, cancelado)", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Backend y lógica" },
  { id: "L-013", title: "Autenticación con correo institucional (@udg)", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "high", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Fundamentos del sistema" },
  { id: "L-014", title: "Validación de dominio institucional", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "high", assignee: "Emanuel Cavazos", storyPoints: 3, category: "Backend", epic: "Fundamentos del sistema" },

  // ========================
  // LEONETA — Sprint 3 (Frontend + Integración)
  // 2026-03-02 → 2026-03-16
  // ========================
  { id: "L-015", title: "Integración frontend ↔ backend (sustituir mocks por API real)", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "critical", assignee: "Alberto Vera", storyPoints: 8, category: "Integración", epic: "Integración" },
  { id: "L-016", title: "Sustitución de datos mock en flujo de login", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "critical", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "Integración" },
  { id: "L-017", title: "Sustitución de mocks en búsqueda y publicación de viajes", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend", epic: "Integración" },
  { id: "L-018", title: "Manejo de errores en la UI (timeout, 404, validaciones)", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend", epic: "Integración" },
  { id: "L-019", title: "Flujo completo funcional: login → buscar → solicitar", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 5, category: "Integración", epic: "Integración" },

  // ========================
  // LEONETA — Sprint 4 (UX + Flujos completos)
  // 2026-03-13 → 2026-03-23
  // ========================
  { id: "L-020", title: "Sincronización de flujos entre pantallas (estados del ride en tiempo real)", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 8, category: "Frontend", epic: "Interacción usuario" },
  { id: "L-021", title: "Sistema de notificaciones básicas (solicitud recibida, ride aceptado)", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend", epic: "Interacción usuario" },
  { id: "L-022", title: "Flujo de solicitar unirse a ride + aceptación/rechazo", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Full Stack", epic: "Interacción usuario" },
  { id: "L-023", title: "Mejoras de UX: feedback visual, loading states, transiciones", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "Interacción usuario" },
  { id: "L-024", title: "Sistema de calificaciones y reseñas (UI + backend)", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "high", assignee: "Franco Aldrete", storyPoints: 5, category: "Full Stack", epic: "Confianza" },
  { id: "L-025", title: "Validación de conductores (licencia, verificación)", sprint: "Sprint 4", project: "leoneta", status: "in-progress", priority: "medium", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Confianza" },

  // ========================
  // LEONETA — Sprint 5 (Testing & QA)
  // 2026-03-09 → 2026-04-20
  // ========================
  { id: "L-026", title: "Pruebas modulares: MC_Registro, MC_Login, MC_Busqueda, MC_Publicacion, MC_Perfil", sprint: "Sprint 5", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 8, category: "QA", epic: "Calidad" },
  { id: "L-027", title: "Pruebas de integración: INT_Login_Busqueda, INT_Busqueda_Solicitud, INT_Publicar_Ver", sprint: "Sprint 5", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA", epic: "Calidad" },
  { id: "L-028", title: "Prueba INT_Solicitud_Aceptar_Notificacion — FALLIDA (falta alerta de aceptación)", sprint: "Sprint 5", project: "leoneta", status: "blocked", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA", epic: "Calidad" },
  { id: "L-029", title: "Prueba INT_Viaje_Calificacion — FALLIDA (no existe transición a Completado)", sprint: "Sprint 5", project: "leoneta", status: "blocked", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA", epic: "Calidad" },
  { id: "L-030", title: "Registro de defectos encontrados en backlog", sprint: "Sprint 5", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 2, category: "QA", epic: "Calidad" },
  { id: "L-031", title: "Implementación del dashboard de métricas internas", sprint: "Sprint 5", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 5, category: "Métricas", epic: "Métricas" },
  { id: "L-032", title: "Reportes de usuarios (funcionalidad de reporte)", sprint: "Sprint 5", project: "leoneta", status: "in-progress", priority: "medium", assignee: "Franco Aldrete", storyPoints: 3, category: "Backend", epic: "Confianza" },

  // ========================
  // LEONETA — Sprint 6 (Correcciones)
  // 2026-04-06 → 2026-05-02
  // ========================
  { id: "L-033", title: "Corrección de bug: alerta de aceptación de ride no se dispara", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Bug Fix", epic: "Calidad" },
  { id: "L-034", title: "Corrección de bug: transición de estado a Completado no funciona", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Bug Fix", epic: "Calidad" },
  { id: "L-035", title: "Fix responsive: campo Destino se desborda en pantallas <400px", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 2, category: "Bug Fix", epic: "Calidad" },
  { id: "L-036", title: "Ajustes de rendimiento: lazy loading y optimización de queries", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend", epic: "Integración" },
  { id: "L-037", title: "Reducción de deuda técnica: refactor de componentes y servicios", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Infraestructura", epic: "Calidad" },
  { id: "L-038", title: "Actualización de asientos disponibles al aceptar pasajero", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 3, category: "Bug Fix", epic: "Calidad" },

  // ========================
  // LEONETA — Sprint 7 (Cierre)
  // 2026-05-02 → 2026-05-15
  // ========================
  { id: "L-039", title: "Elaboración del Test Report final", sprint: "Sprint 7", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "Documentación", epic: "Cierre" },
  { id: "L-040", title: "Análisis final de métricas de calidad (defectos, cobertura, velocidad)", sprint: "Sprint 7", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Métricas", epic: "Cierre" },
  { id: "L-041", title: "Validación final del sistema end-to-end", sprint: "Sprint 7", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA", epic: "Cierre" },
  { id: "L-042", title: "Documentación técnica y manual de usuario", sprint: "Sprint 7", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Documentación", epic: "Cierre" },
  { id: "L-043", title: "Presentación final del proyecto", sprint: "Sprint 7", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Documentación", epic: "Cierre" },

  // ========================
  // CHANGARRITOS — Sprint 0
  // ========================
  { id: "C-001", title: "Análisis del proyecto y definición de alcance", sprint: "Sprint 0", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Análisis" },
  { id: "C-002", title: "Definición de KPIs y métricas", sprint: "Sprint 0", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Documentación" },

  // CHANGARRITOS — Sprint 1
  { id: "C-003", title: "Diseño de wireframes y flujo de navegación", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Diseño" },
  { id: "C-004", title: "Configuración del proyecto y stack tecnológico", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Infraestructura" },

  // CHANGARRITOS — Sprint 2
  { id: "C-005", title: "Pantalla de catálogo de productos", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Frontend" },
  { id: "C-006", title: "Sistema de registro y login de vendedores", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack" },

  // CHANGARRITOS — Sprint 3
  { id: "C-007", title: "Módulo de publicación de productos con imágenes", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack" },
  { id: "C-008", title: "Filtros de búsqueda por categoría, precio y ubicación", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },

  // CHANGARRITOS — Sprint 4
  { id: "C-009", title: "Perfil de vendedor con listado de productos", sprint: "Sprint 4", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },
  { id: "C-010", title: "Pruebas modulares de catálogo y publicación", sprint: "Sprint 4", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "QA" },

  // CHANGARRITOS — Sprint 5
  { id: "C-011", title: "Pruebas de integración y sistema", sprint: "Sprint 5", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "QA" },
  { id: "C-012", title: "Bug fix: error en módulo de filtros de búsqueda", sprint: "Sprint 5", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Bug Fix" },
  { id: "C-013", title: "Optimización de rendimiento y carga de imágenes", sprint: "Sprint 5", project: "changarritos", status: "done", priority: "medium", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },

  // CHANGARRITOS — Sprint 6
  { id: "C-014", title: "Sistema de mensajería entre comprador y vendedor", sprint: "Sprint 6", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack" },
  { id: "C-015", title: "Panel de administración de productos", sprint: "Sprint 6", project: "changarritos", status: "done", priority: "medium", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },
  { id: "C-016", title: "Reducción de deuda técnica y refactor", sprint: "Sprint 6", project: "changarritos", status: "done", priority: "medium", assignee: "Faed Velasco", storyPoints: 3, category: "Infraestructura" },

  // CHANGARRITOS — Sprint 7
  { id: "C-017", title: "Test Report y documentación final", sprint: "Sprint 7", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Documentación" },
  { id: "C-018", title: "Validación final y presentación", sprint: "Sprint 7", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "QA" },
];

export const sprintList = ["Sprint 0", "Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6", "Sprint 7"];

export const categories = [...new Set(backlogTasks.map(t => t.category))];
