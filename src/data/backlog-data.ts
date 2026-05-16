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

/**
 * Plan 8 semanas (Semana 1 … Semana 8), todas las tareas en estado completado.
 * Leoneta: requerimientos 1.1–29.1 del sistema carpooling (trazabilidad MC/INT/AT en títulos donde aplica).
 * Asignaciones repartidas entre los 6 integrantes (incl. apoyos cruzados a Leoneta desde Faed).
 */
export const backlogTasks: BacklogTask[] = [
  // ——— Leoneta · Semana 1 ———
  { id: "L-001", title: "Req 1.1 Registro solo correo @alumnos.udg.mx + validación dominio (MC_Registro_001)", sprint: "Semana 1", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Autenticación" },
  { id: "L-002", title: "Req 2.1 Login: habilitar botón solo con correo y contraseña válidos (NT_Login_Busqueda_01, MC_Login_002)", sprint: "Semana 1", project: "leoneta", status: "done", priority: "critical", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "Autenticación" },
  { id: "L-003", title: "Req 11.1 Seguridad visual: password y datos personales no en claro", sprint: "Semana 1", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 2, category: "Frontend", epic: "No funcional" },
  { id: "L-004", title: "Esquema DB y contratos API usuarios/rides/solicitudes", sprint: "Semana 1", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 3, category: "Backend", epic: "Fundamentos" },
  { id: "L-005", title: "Plan de pruebas Semana 1 + trazabilidad a tests del spec", sprint: "Semana 1", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 2, category: "QA", epic: "Calidad" },
  { id: "L-006", title: "Arquitectura y riesgos Semana 1 (DoD, entornos) — base del hilo de gobierno técnico (continúa en Sem. 2–3)", sprint: "Semana 1", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Análisis", epic: "Fundamentos" },
  { id: "L-061", title: "Kick-off con equipo: objetivos por semana, roles y acuerdos de trabajo en tablero (Tech Lead)", sprint: "Semana 1", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 1, category: "Análisis", epic: "Fundamentos" },

  // ——— Leoneta · Semana 2 ———
  { id: "L-007", title: "Req 27.1 Publicar viaje (origen, destino, horario, asientos, precio) y visibilidad en búsqueda", sprint: "Semana 2", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Rides" },
  { id: "L-008", title: "Req 3.1 Búsqueda: habilitar Buscar con Origen, Destino y Horario completos", sprint: "Semana 2", project: "leoneta", status: "done", priority: "critical", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "Búsqueda" },
  { id: "L-009", title: "Req 6.1 Resultados de búsqueda + flujo Buscar → Resultados (INT_Busqueda_Resultados_02, AT_BUSQUEDA_007)", sprint: "Semana 2", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Full Stack", epic: "Búsqueda" },
  { id: "L-010", title: "API listados y filtros server-side base", sprint: "Semana 2", project: "leoneta", status: "done", priority: "high", assignee: "Emanuel Cavazos", storyPoints: 3, category: "Backend", epic: "Búsqueda" },
  { id: "L-011", title: "Casos MC smoke registro/login + datos de prueba", sprint: "Semana 2", project: "leoneta", status: "done", priority: "medium", assignee: "Braulio Jimenez", storyPoints: 2, category: "QA", epic: "Calidad" },
  { id: "L-053", title: "Continuación Sem. 1: revisiones de diseño API, contratos y lineamientos de integración para el equipo", sprint: "Semana 2", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Análisis", epic: "Fundamentos" },
  { id: "L-054", title: "Comité de seguimiento semanal: avance, riesgos y desbloqueo de impedimentos (Tech Lead)", sprint: "Semana 2", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Análisis", epic: "Fundamentos" },

  // ——— Leoneta · Semana 3 ———
  { id: "L-012", title: "Req 4.1 Filtros (género, calificación, precio) sin recargar página (MC_Filtros_004)", sprint: "Semana 3", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 4, category: "Frontend", epic: "Búsqueda" },
  { id: "L-013", title: "Req 5.1 Rating estrellas 1–5 con feedback visual (MC_Calificacion_005)", sprint: "Semana 3", project: "leoneta", status: "done", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "Confianza" },
  { id: "L-014", title: "Motor matching origen/destino/horario + estados ride en API", sprint: "Semana 3", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Rides" },
  { id: "L-015", title: "Req 12.1 Navegación: rutas y enlaces sin errores (revisión completa)", sprint: "Semana 3", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA", epic: "No funcional" },
  { id: "L-016", title: "Req 6.1 INT Resultados → Solicitud preparación (INT_Resultados_Solicitud_03)", sprint: "Semana 3", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 2, category: "QA", epic: "Calidad" },
  { id: "L-017", title: "Peer review UX filtros y estrellas (apoyo)", sprint: "Semana 3", project: "leoneta", status: "done", priority: "low", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "Calidad" },
  { id: "L-055", title: "Continuación Sem. 2: alineación de DoD y criterios de aceptación con QA (Req 4.1–6.1)", sprint: "Semana 3", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Análisis", epic: "Calidad" },
  { id: "L-056", title: "Plan de integración Fase 2 (Req 7+) y matriz de dependencias backend–frontend", sprint: "Semana 3", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Análisis", epic: "Solicitud" },

  // ——— Leoneta · Semana 4 ———
  { id: "L-018", title: "Req 7.1 Solicitar viaje: modal o confirmación (INT_Resultados_Solicitud_03)", sprint: "Semana 4", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 3, category: "Full Stack", epic: "Solicitud" },
  { id: "L-019", title: "Req 8.1 Estado Aceptado + asientos visibles (INT_Solicitud_Aceptar_Notificacion_04, AT_Aceptacion_004)", sprint: "Semana 4", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 4, category: "Backend", epic: "Solicitud" },
  { id: "L-020", title: "Req 9.1 Notificación visual: «Tu solicitud fue aceptada»", sprint: "Semana 4", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 2, category: "Frontend", epic: "Solicitud" },
  { id: "L-021", title: "Req 10.1 Mapa con marcadores origen y destino", sprint: "Semana 4", project: "leoneta", status: "done", priority: "high", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend", epic: "Mapa" },
  { id: "L-022", title: "Req 15.1 Manejo de errores: campos vacíos y pérdida de conexión simulada", sprint: "Semana 4", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "No funcional" },
  { id: "L-023", title: "Sincronización de estados entre pantallas (continuación alineación Sem. 2–3; coord. flujo Sem. 4)", sprint: "Semana 4", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Integración", epic: "Solicitud" },
  { id: "L-024", title: "Validación Req 8.1/9.1 en dispositivo (checklist)", sprint: "Semana 4", project: "leoneta", status: "done", priority: "medium", assignee: "Braulio Jimenez", storyPoints: 2, category: "QA", epic: "Calidad" },
  { id: "L-062", title: "Continuación Sem. 3: sesión de alineación Req 7.1–10.1 con equipo (mapa, modal, notificación)", sprint: "Semana 4", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Integración", epic: "Solicitud" },

  // ——— Leoneta · Semana 5 ———
  { id: "L-025", title: "Req 16.1 Perfil: ver/editar nombre, foto, descripción (MC_Perfil_019) + persistencia API", sprint: "Semana 5", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Perfil" },
  { id: "L-026", title: "Req 16.1 UI Mi Perfil y reflejo inmediato de cambios", sprint: "Semana 5", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 4, category: "Frontend", epic: "Perfil" },
  { id: "L-027", title: "Req 17.1 Historial de calificaciones en perfil + lista vacía (MC_Perfil_020)", sprint: "Semana 5", project: "leoneta", status: "done", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 4, category: "Full Stack", epic: "Perfil" },
  { id: "L-028", title: "Req 18.1 Chat tiempo real simulado conductor–pasajero (INT_Chat_Solicitud_06, AT_Chat_003)", sprint: "Semana 5", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Chat" },
  { id: "L-029", title: "Req 18.1 UI chat: scroll automático y timestamp", sprint: "Semana 5", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend", epic: "Chat" },
  { id: "L-030", title: "Req 14.1 Preparación E2E Login → Buscar → Solicitar → Calificar (matriz)", sprint: "Semana 5", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA", epic: "Calidad" },
  { id: "L-031", title: "Dashboard métricas internas — arranque (continúa iteración y demo en Sem. 6)", sprint: "Semana 5", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Métricas", epic: "Métricas" },
  { id: "L-063", title: "Comité técnico Sem. 5: estado Req 14–23, chat, rutinas e integración E2E (Tech Lead)", sprint: "Semana 5", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Análisis", epic: "Calidad" },

  // ——— Leoneta · Semana 6 ———
  { id: "L-032", title: "Req 19.1 Chat: indicador leído/no leído; input deshabilitado si cancelado/completado (MC_Chat_021)", sprint: "Semana 6", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 4, category: "Frontend", epic: "Chat" },
  { id: "L-033", title: "Req 20.1 Tras completar viaje: pantalla calificación + comentario opcional una sola vez (MC_Calificacion_022, AT_Calificacion_006)", sprint: "Semana 6", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 4, category: "Full Stack", epic: "Calificación" },
  { id: "L-034", title: "Req 20.1 API y reglas de negocio calificación post-viaje", sprint: "Semana 6", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 3, category: "Backend", epic: "Calificación" },
  { id: "L-035", title: "Req 21.1 Rutinas recurrentes + listado Mis Rutinas (mock JSON)", sprint: "Semana 6", project: "leoneta", status: "done", priority: "medium", assignee: "Franco Aldrete", storyPoints: 4, category: "Backend", epic: "Rutinas" },
  { id: "L-036", title: "Req 22.1 Aviso solapamiento de horarios entre rutinas", sprint: "Semana 6", project: "leoneta", status: "done", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 3, category: "Full Stack", epic: "Rutinas" },
  { id: "L-037", title: "Req 23.1 Mis Viajes: próximos, en curso, completados + orden cronológico (INT_Viaje_Calificacion_05)", sprint: "Semana 6", project: "leoneta", status: "done", priority: "critical", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend", epic: "Historial" },
  { id: "L-038", title: "INT_Viaje_Calificacion_05 ejecución y evidencias", sprint: "Semana 6", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA", epic: "Calidad" },
  { id: "L-039", title: "Datos demo y seeds para suites INT (apoyo)", sprint: "Semana 6", project: "leoneta", status: "done", priority: "medium", assignee: "Faed Velasco", storyPoints: 2, category: "Backend", epic: "Calidad" },
  { id: "L-057", title: "Continuación Sem. 5: dashboard métricas — iteración con feedback docentes y preparación de demo", sprint: "Semana 6", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Métricas", epic: "Métricas" },
  { id: "L-058", title: "Plan de cierre Sem. 7–8: hitos, dependencias, riesgos residuales y responsables (Tech Lead)", sprint: "Semana 6", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Análisis", epic: "Cierre" },

  // ——— Leoneta · Semana 7 ———
  { id: "L-040", title: "Req 24.1 Detalle de viaje + botón Calificar si aplica (AT_Detalle_005)", sprint: "Semana 7", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 4, category: "Frontend", epic: "Historial" },
  { id: "L-041", title: "Req 25.1 Cancelación Pendiente/Aceptado + liberar asiento (MC_Cancelacion_023, INT_Cancelacion_Estado_07, AT_CANCELACION_002)", sprint: "Semana 7", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend", epic: "Solicitud" },
  { id: "L-042", title: "Req 25.1 UI cancelación y contador asientos", sprint: "Semana 7", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 3, category: "Frontend", epic: "Solicitud" },
  { id: "L-043", title: "Req 26.1 Panel conductor: lista solicitudes aceptar/rechazar (INT_Conductor_Pasajero_08)", sprint: "Semana 7", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Full Stack", epic: "Conductor" },
  { id: "L-044", title: "Req 13.1 Diseño responsivo móvil/desktop (pantallas críticas)", sprint: "Semana 7", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 4, category: "Frontend", epic: "No funcional" },
  { id: "L-045", title: "Req 28.1 Accesibilidad: teclado + ARIA mínimo (revisión con dev)", sprint: "Semana 7", project: "leoneta", status: "done", priority: "medium", assignee: "Braulio Jimenez", storyPoints: 4, category: "QA", epic: "No funcional" },
  { id: "L-059", title: "Continuación Sem. 6: coordinación de cierre — sync panel conductor, cancelación y alcance Sem. 8", sprint: "Semana 7", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 4, category: "Integración", epic: "Cierre" },
  { id: "L-060", title: "Revisión conjunta seguridad y errores (Req 11.1 y 15.1) antes del freeze de código", sprint: "Semana 7", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Análisis", epic: "No funcional" },

  // ——— Leoneta · Semana 8 ———
  { id: "L-046", title: "Req 29.1 Rendimiento: Buscar Viaje y Mis Viajes <2 s con mock y red simulada", sprint: "Semana 8", project: "leoneta", status: "done", priority: "high", assignee: "Franco Aldrete", storyPoints: 4, category: "Backend", epic: "No funcional" },
  { id: "L-047", title: "Req 29.1 Medición frontend + ajustes de carga", sprint: "Semana 8", project: "leoneta", status: "done", priority: "high", assignee: "Emanuel Cavazos", storyPoints: 3, category: "Frontend", epic: "No funcional" },
  { id: "L-048", title: "Test Report final + registro de defectos cierre", sprint: "Semana 8", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA", epic: "Cierre" },
  { id: "L-049", title: "Continuación Sem. 5–7: análisis de métricas de calidad y preparación de la presentación final", sprint: "Semana 8", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Métricas", epic: "Cierre" },
  { id: "L-050", title: "Continuación Sem. 7: documentación técnica y manual de usuario (cierre con equipo)", sprint: "Semana 8", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Documentación", epic: "Cierre" },
  { id: "L-051", title: "Req 14.1 AT_Flujo_001 + INT_Viaje_Calificacion_05 cierre evidencias", sprint: "Semana 8", project: "leoneta", status: "done", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA", epic: "Cierre" },
  { id: "L-052", title: "Smoke cruzado rendimiento/vistas (apoyo Req 29.1)", sprint: "Semana 8", project: "leoneta", status: "done", priority: "low", assignee: "Faed Velasco", storyPoints: 2, category: "QA", epic: "Cierre" },

  // ——— Changarritos · 8 semanas (producto paralelo, Faed + apoyos puntuales) ———
  { id: "C-001", title: "Semana 1: requerimientos, KPIs y Test Plan Changarritos", sprint: "Semana 1", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Documentación", epic: "Preparatorio" },
  { id: "C-002", title: "Semana 2: autenticación y perfil base del marketplace", sprint: "Semana 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 8, category: "Full Stack", epic: "Auth" },
  { id: "C-003", title: "Semana 3: CRUD productos + validaciones", sprint: "Semana 3", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 8, category: "Full Stack", epic: "Catálogo" },
  { id: "C-004", title: "Semana 4: catálogo, filtros, buscador y detalle", sprint: "Semana 4", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 10, category: "Frontend", epic: "Catálogo" },
  { id: "C-005", title: "Semana 4: revisión de integración con APIs Leoneta (apoyo Luis Felipe)", sprint: "Semana 4", project: "changarritos", status: "done", priority: "low", assignee: "Luis Felipe Avila", storyPoints: 1, category: "Análisis", epic: "Preparatorio" },
  { id: "C-006", title: "Semana 5: notificaciones y favoritos", sprint: "Semana 5", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 8, category: "Full Stack", epic: "Engagement" },
  { id: "C-007", title: "Semana 6: dashboard métricas + batería de pruebas", sprint: "Semana 6", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 8, category: "QA", epic: "Métricas" },
  { id: "C-008", title: "Semana 7: correcciones y rendimiento", sprint: "Semana 7", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 8, category: "Bug Fix", epic: "Estabilización" },
  { id: "C-009", title: "Semana 8: Test Report, documentación y validación final", sprint: "Semana 8", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 6, category: "Documentación", epic: "Cierre" },
];

export const sprintList = ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6", "Semana 7", "Semana 8"];

export const categories = [...new Set(backlogTasks.map((t) => t.category))];
