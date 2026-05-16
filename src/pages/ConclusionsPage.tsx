import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/data/dashboard-data";
import { backlogTasks, sprintList, type BacklogTask, type TaskStatus } from "@/data/backlog-data";
import { User, FolderKanban } from "lucide-react";

/** Clave `assignee` del backlog → índice en `teamMembers` (mismo orden que la barra lateral). */
const ASSIGNEE_ORDER: { backlogAssignee: string; memberIndex: number }[] = [
  { backlogAssignee: "Luis Felipe Avila", memberIndex: 0 },
  { backlogAssignee: "Alberto Vera", memberIndex: 1 },
  { backlogAssignee: "Franco Aldrete", memberIndex: 2 },
  { backlogAssignee: "Braulio Jimenez", memberIndex: 3 },
  { backlogAssignee: "Emanuel Cavazos", memberIndex: 4 },
  { backlogAssignee: "Faed Velasco", memberIndex: 5 },
];

const statusLabel: Record<TaskStatus, string> = {
  done: "Hecho",
  "in-progress": "En curso",
  blocked: "Bloqueado",
  todo: "Pendiente",
};

const statusBadgeClass: Record<TaskStatus, string> = {
  done: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30",
  "in-progress": "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30",
  blocked: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30",
  todo: "bg-muted text-muted-foreground border-border",
};

function buildActivitiesByMember(tasks: BacklogTask[]) {
  return ASSIGNEE_ORDER.map(({ backlogAssignee, memberIndex }) => {
    const mine = tasks.filter((t) => t.assignee === backlogAssignee);
    const bySprint = sprintList.map((sprint) => ({
      sprint,
      tasks: mine.filter((t) => t.sprint === sprint),
    }));
    return { member: teamMembers[memberIndex], backlogAssignee, bySprint };
  });
}

export default function ConclusionsPage() {
  const rows = useMemo(() => buildActivitiesByMember(backlogTasks), []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Estado actual de los proyectos</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Plan de <span className="text-foreground font-medium">8 semanas</span> (Semana 1–8) con backlog alineado a los{" "}
          <span className="text-foreground font-medium">29 requerimientos</span> de Leoneta,{" "}
          <span className="text-foreground font-medium">todas las tareas en Completado</span>. Abajo, el detalle por integrante y por semana según el backlog.
        </p>
      </div>

      <Card className="border-border bg-accent/40">
        <CardContent className="pt-4 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <FolderKanban className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold">Resumen por producto</p>
          </div>
          <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed list-disc pl-5">
            <li>
              <span className="text-foreground font-medium">Leoneta:</span> Semanas 1–4 cubrieron registro, login, búsqueda, filtros, resultados, solicitud, estado, notificación, mapa y manejo de errores (Req 1.1–15.1 y 27.1). Semanas 5–8 cerraron perfil, chat, calificación, rutinas, historial, detalle, cancelación, panel conductor, responsive, accesibilidad, rendimiento y paquete QA/E2E/documentación (Req 16.1–29.1 y 14.1).
            </li>
            <li>
              <span className="text-foreground font-medium">Changarritos:</span> Semanas 1–8 completadas en paralelo (preparación, auth, CRUD, catálogo, notificaciones, métricas, estabilización y cierre), con apoyo puntual de Luis Felipe en Semana 4.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-sm font-semibold text-foreground mb-3">Estado del equipo — actividades por semana</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {rows.map(({ member, bySprint }) => (
            <Card key={member.id} className="border-border bg-card">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{member.projects.join(" · ")}</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-border pt-3">
                  {bySprint.map(({ sprint, tasks }) => (
                    <div key={sprint}>
                      <p className="text-xs font-semibold text-foreground mb-1.5">{sprint}</p>
                      {tasks.length === 0 ? (
                        <p className="text-xs text-muted-foreground pl-2 border-l-2 border-muted">Sin tareas asignadas en el backlog.</p>
                      ) : (
                        <ul className="space-y-1.5 pl-2 border-l-2 border-primary/40">
                          {tasks.map((t) => (
                            <li key={t.id} className="text-xs text-muted-foreground leading-snug">
                              <span className="font-mono text-[10px] text-foreground/80 mr-1">{t.id}</span>
                              <span className="text-foreground/90">{t.title}</span>
                              <span className="text-muted-foreground"> · {t.storyPoints} pt</span>
                              <span className="mx-1">·</span>
                              <Badge variant="outline" className="text-[10px] px-1 py-0 h-5 font-normal align-middle">
                                {t.project === "leoneta" ? "Leoneta" : "Changarritos"}
                              </Badge>
                              <span className="mx-1">·</span>
                              <Badge variant="outline" className={`text-[10px] px-1 py-0 h-5 font-normal align-middle ${statusBadgeClass[t.status]}`}>
                                {statusLabel[t.status]}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
