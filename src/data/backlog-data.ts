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
}

export const backlogTasks: BacklogTask[] = [
  // ========================
  // LEONETA — Sprint 1
  // ========================
  { id: "L-001", title: "Diseño de wireframes de pantallas principales", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "critical", assignee: "Alberto Vera", storyPoints: 3, category: "Diseño" },
  { id: "L-002", title: "Configuración del proyecto React + Vite + Tailwind", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "critical", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Infraestructura" },
  { id: "L-003", title: "Maquetación de pantalla de registro de usuario", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend" },
  { id: "L-004", title: "Maquetación de pantalla de login", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend" },
  { id: "L-005", title: "Definición del esquema de base de datos (usuarios, viajes)", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend" },
  { id: "L-006", title: "Configuración inicial del repositorio y CI/CD", sprint: "Sprint 1", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Infraestructura" },

  // LEONETA — Sprint 2
  { id: "L-007", title: "Pantalla de búsqueda de viajes con filtros (origen, destino, hora)", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "critical", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend" },
  { id: "L-008", title: "Componente de tarjeta de viaje disponible", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend" },
  { id: "L-009", title: "Flujo de publicación de viaje (formulario conductor)", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend" },
  { id: "L-010", title: "Diseño del esquema de solicitudes y estados del ride", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "high", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend" },
  { id: "L-011", title: "Creación de datos mock para viajes y usuarios", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 3, category: "Frontend" },
  { id: "L-012", title: "Pruebas modulares MC_Registro y MC_Login", sprint: "Sprint 2", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA" },

  // LEONETA — Sprint 3
  { id: "L-013", title: "Pantalla de perfil de usuario con datos y foto", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "high", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend" },
  { id: "L-014", title: "Sistema de calificaciones y reseñas (UI)", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "high", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend" },
  { id: "L-015", title: "Navegación principal y layout responsive", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend" },
  { id: "L-016", title: "Pruebas modulares MC_Busqueda, MC_Publicacion, MC_Perfil", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA" },
  { id: "L-017", title: "Documentación de arquitectura del sistema", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Documentación" },
  { id: "L-018", title: "Diseño de endpoints REST para API de viajes", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "high", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend" },
  { id: "L-019", title: "Maquetación del historial de viajes del usuario", sprint: "Sprint 3", project: "leoneta", status: "done", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend" },

  // LEONETA — Sprint 4
  { id: "L-020", title: "Integración de flujo solicitud de ride (mock)", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend" },
  { id: "L-021", title: "Pantalla de notificaciones (UI estática)", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend" },
  { id: "L-022", title: "Pruebas de integración INT_Login_Busqueda, INT_Busqueda_Solicitud, INT_Publicar_Ver", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA" },
  { id: "L-023", title: "Prueba INT_Solicitud_Aceptar_Notificacion — FALLIDA", sprint: "Sprint 4", project: "leoneta", status: "blocked", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA" },
  { id: "L-024", title: "Prueba INT_Viaje_Calificacion — FALLIDA", sprint: "Sprint 4", project: "leoneta", status: "blocked", priority: "critical", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA" },
  { id: "L-025", title: "Configuración inicial de NestJS para backend", sprint: "Sprint 4", project: "leoneta", status: "in-progress", priority: "critical", assignee: "Franco Aldrete", storyPoints: 8, category: "Backend" },
  { id: "L-026", title: "Diseño de pantalla de verificación institucional", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "medium", assignee: "Alberto Vera", storyPoints: 3, category: "Frontend" },
  { id: "L-027", title: "Definición de reglas de negocio para estados del ride", sprint: "Sprint 4", project: "leoneta", status: "done", priority: "high", assignee: "Luis Felipe Avila", storyPoints: 2, category: "Documentación" },

  // LEONETA — Sprint 5
  { id: "L-028", title: "Pruebas de sistema SYS_Registro_Publicar_Solicitar", sprint: "Sprint 5", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA" },
  { id: "L-029", title: "Prueba SYS_RESPONSIVE_013 — FALLIDA (<400px)", sprint: "Sprint 5", project: "leoneta", status: "blocked", priority: "high", assignee: "Braulio Jimenez", storyPoints: 3, category: "QA" },
  { id: "L-030", title: "Pruebas SYS_Performance, SYS_Navegacion, SYS_Datos", sprint: "Sprint 5", project: "leoneta", status: "done", priority: "high", assignee: "Braulio Jimenez", storyPoints: 5, category: "QA" },
  { id: "L-031", title: "Implementación de store global con Zustand", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "critical", assignee: "Emanuel Cavazos", storyPoints: 8, category: "Frontend" },
  { id: "L-032", title: "Endpoint de autenticación con correo institucional UDG", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "critical", assignee: "Franco Aldrete", storyPoints: 8, category: "Backend" },
  { id: "L-033", title: "Endpoint CRUD de viajes (crear, listar, detalle)", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "critical", assignee: "Franco Aldrete", storyPoints: 8, category: "Backend" },
  { id: "L-034", title: "Refactor de componentes para consumir API real", sprint: "Sprint 5", project: "leoneta", status: "todo", priority: "high", assignee: "Alberto Vera", storyPoints: 5, category: "Frontend" },

  // LEONETA — Sprint 6
  { id: "L-035", title: "Endpoint de solicitudes de ride y aceptación", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "critical", assignee: "Franco Aldrete", storyPoints: 8, category: "Backend" },
  { id: "L-036", title: "Endpoint de calificaciones y reseñas", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "high", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend" },
  { id: "L-037", title: "Sistema de notificaciones push (diseño)", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend" },
  { id: "L-038", title: "Fix responsive: campo Destino en pantallas <400px", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "high", assignee: "Alberto Vera", storyPoints: 2, category: "Frontend" },
  { id: "L-039", title: "Módulo de reportes y seguridad (diseño)", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "medium", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Documentación" },
  { id: "L-040", title: "Actualización de asientos disponibles al aceptar pasajero", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "critical", assignee: "Franco Aldrete", storyPoints: 5, category: "Backend" },
  { id: "L-041", title: "Investigación de módulo IA para recomendación de rutas", sprint: "Sprint 6", project: "leoneta", status: "todo", priority: "low", assignee: "Luis Felipe Avila", storyPoints: 3, category: "Investigación" },
  { id: "L-042", title: "Reducción de deuda técnica: refactor de componentes legacy", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "medium", assignee: "Emanuel Cavazos", storyPoints: 5, category: "Frontend" },
  { id: "L-043", title: "Documentación de pruebas y resultados finales", sprint: "Sprint 6", project: "leoneta", status: "done", priority: "medium", assignee: "Braulio Jimenez", storyPoints: 3, category: "Documentación" },

  // ========================
  // CHANGARRITOS — Sprint 1
  // ========================
  { id: "C-001", title: "Diseño de wireframes y flujo de navegación", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 3, category: "Diseño" },
  { id: "C-002", title: "Configuración del proyecto y stack tecnológico", sprint: "Sprint 1", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Infraestructura" },

  // CHANGARRITOS — Sprint 2
  { id: "C-003", title: "Pantalla de catálogo de productos", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 5, category: "Frontend" },
  { id: "C-004", title: "Sistema de registro y login de vendedores", sprint: "Sprint 2", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Full Stack" },

  // CHANGARRITOS — Sprint 3
  { id: "C-005", title: "Módulo de publicación de productos con imágenes", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack" },
  { id: "C-006", title: "Filtros de búsqueda por categoría, precio y ubicación", sprint: "Sprint 3", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },

  // CHANGARRITOS — Sprint 4
  { id: "C-007", title: "Perfil de vendedor con listado de productos", sprint: "Sprint 4", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },
  { id: "C-008", title: "Pruebas modulares de catálogo y publicación", sprint: "Sprint 4", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "QA" },

  // CHANGARRITOS — Sprint 5
  { id: "C-009", title: "Pruebas de integración y sistema completas", sprint: "Sprint 5", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 3, category: "QA" },
  { id: "C-010", title: "Bug fix: error en módulo de filtros de búsqueda", sprint: "Sprint 5", project: "changarritos", status: "done", priority: "critical", assignee: "Faed Velasco", storyPoints: 2, category: "Bug Fix" },
  { id: "C-011", title: "Optimización de rendimiento y carga de imágenes", sprint: "Sprint 5", project: "changarritos", status: "done", priority: "medium", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },

  // CHANGARRITOS — Sprint 6
  { id: "C-012", title: "Sistema de mensajería entre comprador y vendedor", sprint: "Sprint 6", project: "changarritos", status: "done", priority: "high", assignee: "Faed Velasco", storyPoints: 5, category: "Full Stack" },
  { id: "C-013", title: "Panel de administración de productos del vendedor", sprint: "Sprint 6", project: "changarritos", status: "done", priority: "medium", assignee: "Faed Velasco", storyPoints: 3, category: "Frontend" },
  { id: "C-014", title: "Reducción de deuda técnica y refactor de código", sprint: "Sprint 6", project: "changarritos", status: "done", priority: "medium", assignee: "Faed Velasco", storyPoints: 3, category: "Infraestructura" },
];

export const sprintList = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6"];

export const categories = [...new Set(backlogTasks.map(t => t.category))];
