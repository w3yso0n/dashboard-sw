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
  // LEONETA — Sprint 4 (UX + Flujos completos) — EN CURSO
  // 2026-03-13 → 2026-03-23
  // Funcionalidad general (S0–S3) lista; aquí faltan detalles y pulido.
  // ========================
  { id: "L-020", title: "Sincronización de flujos entre pantallas (estados del ride en tiempo real)", sprint: "Sprint 4", project: "leoneta", status: "in-progress", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 8, category: "Frontend", epic: "Interacción usuario" },
  { id: "L-021", title: "Sistema de notificaciones básicas (solicitud recibida, ride aceptado)", sprint: "Sprint 4", project: "leoneta", status: "todo", priority: "high", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend", epic: "Interacción usuario" },
  { id: "L-022", title: "Flujo de solicitar unirse a ride + aceptación/rechazo", sprint: "Sprint 4", project: "leoneta", status: "in-progress", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Full Stack", epic: "Interacción usuario" },
  { id: "L-023", title: "Mejoras de UX: feedback visual, loading states, transiciones", sprint: "Sprint 4", project: "leoneta", status: "todo", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "Interacción usuario" },
  { id: "L-024", title: "Sistema de calificaciones y reseñas (UI + backend)", sprint: "Sprint 4", project: "leoneta", status: "todo", priority: "high", assignee: "Franco Aldrete", storyPoints: 5, category: "Full Stack", epic: "Confianza" },
  { id: "L-025", title: "Validación de conductores (licencia, verificación)", sprint: "Sprint 4", project: "leoneta", status: "todo", priority: "medium", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Confianza" },

  // ========================
  // LEONETA — Sprint 5 (Testing & QA) — PLANIFICADO
  // ========================
  { id: "L-026", title: "Pruebas modulares: MC_Registro, MC_Login, MC_Busqueda, MC_Publicacion, MC_Perfil", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 8, category: "QA", epic: "Calidad" },
  { id: "L-027", title: "Pruebas de integración: INT_Login_Busqueda, INT_Busqueda_Solicitud, INT_Publicar_Ver", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA", epic: "Calidad" },
  { id: "L-028", title: "Pruebas de integración: solicitud, aceptación y notificaciones", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA", epic: "Calidad" },
  { id: "L-029", title: "Pruebas de integración: viaje completo y calificación hasta Completado", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA", epic: "Calidad" },
  { id: "L-030", title: "Suite de pruebas de sistema (SYS) y registro formal de defectos", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "high", assignee: "Braulio Jimenez", storyPoints: 2, category: "QA", epic: "Calidad" },
  { id: "L-031", title: "Implementación del dashboard de métricas internas", sprint: "Sprint 5", project: "leoneta", status: "in-progress", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 5, category: "Métricas", epic: "Métricas" },
  { id: "L-032", title: "Reportes de usuarios (funcionalidad de reporte)", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "medium", assignee: "Franco Aldrete", storyPoints: 3, category: "Backend", epic: "Confianza" },

  // ========================
  // LEONETA — Sprint 6 (Correcciones) — PLANIFICADO
  // ========================
  { id: "L-033", title: "Corrección de bug: alerta de aceptación de ride no se dispara", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Bug Fix", epic: "Calidad" },
  { id: "L-034", title: "Corrección de bug: transición de estado a Completado no funciona", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Bug Fix", epic: "Calidad" },
  { id: "L-035", title: "Fix responsive: campo Destino se desborda en pantallas <400px", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "high", assignee: "Alberto Vera", storyPoints: 2, category: "Bug Fix", epic: "Calidad" },
  { id: "L-036", title: "Ajustes de rendimiento: lazy loading y optimización de queries", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend", epic: "Integración" },
  { id: "L-037", title: "Reducción de deuda técnica: refactor de componentes y servicios", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Infraestructura", epic: "Calidad" },
  { id: "L-038", title: "Actualización de asientos disponibles al aceptar pasajero", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "critical", assignee: "Franco Aldrete", storyPoints: 3, category: "Bug Fix", epic: "Calidad" },

  // ========================
  // LEONETA — Sprint 7 (Cierre) — PLANIFICADO
  // ========================
  { id: "L-039", title: "Elaboración del Test Report final", sprint: "Sprint 7", project: "leoneta", status: "todo", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "Documentación", epic: "Cierre" },
  { id: "L-040", title: "Análisis final de métricas de calidad (defectos, cobertura, velocidad)", sprint: "Sprint 7", project: "leoneta", status: "todo", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Métricas", epic: "Cierre" },
  { id: "L-041", title: "Validación final del sistema end-to-end", sprint: "Sprint 7", project: "leoneta", status: "todo", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA", epic: "Cierre" },
  { id: "L-042", title: "Documentación técnica y manual de usuario", sprint: "Sprint 7", project: "leoneta", status: "todo", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Documentación", epic: "Cierre" },
  { id: "L-043", title: "Presentación final del proyecto", sprint: "Sprint 7", project: "leoneta", status: "todo", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Documentación", epic: "Cierre" },

  // ========================
  // CHANGARRITOS — Sprint 0 (Preparatorio) — Objetivo: base del proyecto y QA
  // Entregable: Test Plan + KPIs definidos
  // ========================
  { id: "C-001", title: "Análisis de requerimientos", sprint: "Sprint 0", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Análisis", epic: "Preparatorio" },
  { id: "C-002", title: "Definición de métricas (KPIs)", sprint: "Sprint 0", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Documentación", epic: "Preparatorio" },
  { id: "C-003", title: "Creación del Test Plan", sprint: "Sprint 0", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "QA", epic: "Preparatorio" },

  // CHANGARRITOS — Sprint 1 — Autenticación — Sistema base funcional
  // Entregable: usuarios pueden acceder al sistema
  // ========================
  { id: "C-004", title: "Registro de usuarios", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack", epic: "Autenticación" },
  { id: "C-005", title: "Login", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Full Stack", epic: "Autenticación" },
  { id: "C-006", title: "Perfil básico", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend", epic: "Autenticación" },
  { id: "C-007", title: "QA: casos de prueba de login y registro", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "Autenticación" },

  // CHANGARRITOS — Sprint 2 — Publicación — CRUD funcional
  // Entregable: publicaciones funcionales
  // ========================
  { id: "C-008", title: "Crear producto", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack", epic: "Publicación" },
  { id: "C-009", title: "Editar producto", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Full Stack", epic: "Publicación" },
  { id: "C-010", title: "Eliminar producto", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Full Stack", epic: "Publicación" },
  { id: "C-011", title: "QA: validación de datos (publicación)", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "Publicación" },
  { id: "C-012", title: "QA: pruebas negativas (publicación)", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "Publicación" },

  // CHANGARRITOS — Sprint 3 — Catálogo — Navegación del sistema
  // Entregable: flujo completo de exploración
  // ========================
  { id: "C-013", title: "Catálogo de productos", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Frontend", epic: "Catálogo" },
  { id: "C-014", title: "Filtros de listado", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend", epic: "Catálogo" },
  { id: "C-015", title: "Buscador", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend", epic: "Catálogo" },
  { id: "C-016", title: "Detalle de producto", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend", epic: "Catálogo" },
  { id: "C-017", title: "QA: pruebas de integración (exploración)", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "QA", epic: "Catálogo" },

  // CHANGARRITOS — Sprint 4 — Contacto + Chatbot IA — EN CURSO
  // Entregable: chat funcional + IA integrada
  // ========================
  { id: "C-018", title: "Contacto vía WhatsApp", sprint: "Sprint 4", project: "changarritos", status: "in-progress", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack", epic: "IA y contacto" },
  { id: "C-019", title: "Chatbot IA", sprint: "Sprint 4", project: "changarritos", status: "todo", priority: "critical", assignee: "Faed Velasco", storyPoints: 8, category: "IA", epic: "IA y contacto" },
  { id: "C-020", title: "Recomendaciones (productos / IA)", sprint: "Sprint 4", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 5, category: "IA", epic: "IA y contacto" },
  { id: "C-021", title: "QA: validación de respuestas (chatbot)", sprint: "Sprint 4", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "QA", epic: "IA y contacto" },
  { id: "C-022", title: "QA: manejo de errores IA", sprint: "Sprint 4", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "IA y contacto" },

  // CHANGARRITOS — Sprint 5 — Notificaciones + Favoritos — Engagement
  // Entregable: sistema interactivo completo
  // ========================
  { id: "C-023", title: "Notificaciones", sprint: "Sprint 5", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack", epic: "Engagement" },
  { id: "C-024", title: "Favoritos", sprint: "Sprint 5", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Full Stack", epic: "Engagement" },
  { id: "C-025", title: "QA: pruebas de eventos (notif. / favoritos)", sprint: "Sprint 5", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "QA", epic: "Engagement" },
  { id: "C-026", title: "QA: regresión", sprint: "Sprint 5", project: "changarritos", status: "todo", priority: "medium", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "Engagement" },

  // CHANGARRITOS — Sprint 6 — Métricas + QA — Validación y análisis
  // Entregable: métricas reales
  // ========================
  { id: "C-027", title: "Dashboard de métricas", sprint: "Sprint 6", project: "changarritos", status: "todo", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Métricas", epic: "Métricas y QA" },
  { id: "C-028", title: "Ejecución completa de pruebas", sprint: "Sprint 6", project: "changarritos", status: "todo", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "QA", epic: "Métricas y QA" },
  { id: "C-029", title: "Registro de bugs", sprint: "Sprint 6", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "Métricas y QA" },

  // CHANGARRITOS — Sprint 7 — Correcciones — Estabilizar
  // Entregable: sistema estable
  // ========================
  { id: "C-030", title: "Corrección de bugs", sprint: "Sprint 7", project: "changarritos", status: "todo", priority: "critical", assignee: "Faed Velasco", storyPoints: 8, category: "Bug Fix", epic: "Estabilización" },
  { id: "C-031", title: "Ajustes de rendimiento", sprint: "Sprint 7", project: "changarritos", status: "todo", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Infraestructura", epic: "Estabilización" },

  // CHANGARRITOS — Sprint 8 — Cierre — Entrega final
  // Entregable: proyecto completo
  // ========================
  { id: "C-032", title: "Test Report final", sprint: "Sprint 8", project: "changarritos", status: "todo", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Documentación", epic: "Cierre" },
  { id: "C-033", title: "Documentación (técnica y de usuario)", sprint: "Sprint 8", project: "changarritos", status: "todo", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Documentación", epic: "Cierre" },
  { id: "C-034", title: "Validación final del sistema", sprint: "Sprint 8", project: "changarritos", status: "todo", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "QA", epic: "Cierre" },
];

export const sprintList = ["Sprint 0", "Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6", "Sprint 7", "Sprint 8"];

export const categories = [...new Set(backlogTasks.map(t => t.category))];
