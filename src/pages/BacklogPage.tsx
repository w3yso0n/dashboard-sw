import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { backlogTasks, sprintList, type TaskStatus, type TaskPriority } from "@/data/backlog-data";
import { CheckCircle2, Clock, AlertTriangle, Circle, ListTodo } from "lucide-react";

const statusConfig: Record<TaskStatus, { label: string; icon: typeof CheckCircle2; className: string }> = {
  done: { label: "Completado", icon: CheckCircle2, className: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30" },
  "in-progress": { label: "En progreso", icon: Clock, className: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30" },
  blocked: { label: "Bloqueado", icon: AlertTriangle, className: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30" },
  todo: { label: "Pendiente", icon: Circle, className: "bg-muted text-muted-foreground border-border" },
};

const priorityConfig: Record<TaskPriority, { label: string; className: string }> = {
  critical: { label: "Crítica", className: "bg-red-500/15 text-red-700 dark:text-red-400" },
  high: { label: "Alta", className: "bg-orange-500/15 text-orange-700 dark:text-orange-400" },
  medium: { label: "Media", className: "bg-blue-500/15 text-blue-700 dark:text-blue-400" },
  low: { label: "Baja", className: "bg-muted text-muted-foreground" },
};

const CURRENT_SPRINT = "Sprint 4";

export default function BacklogPage() {
  const [selectedSprint, setSelectedSprint] = useState<string>(CURRENT_SPRINT);
  const [selectedProject, setSelectedProject] = useState<string>("leoneta");

  const filtered = backlogTasks.filter((t) => {
    if (t.project !== selectedProject) return false;
    if (selectedSprint !== "all" && t.sprint !== selectedSprint) return false;
    return true;
  });

  const totalPoints = filtered.reduce((s, t) => s + t.storyPoints, 0);
  const donePoints = filtered.filter((t) => t.status === "done").reduce((s, t) => s + t.storyPoints, 0);
  const blockedCount = filtered.filter((t) => t.status === "blocked").length;
  const todoCount = filtered.filter((t) => t.status === "todo").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Backlog de Actividades</h1>
        <p className="text-sm text-muted-foreground mt-1">
          <span className="text-foreground font-medium">{CURRENT_SPRINT} en curso</span>
          {" · "}Leoneta: Sprints 0–3 cerrados a nivel funcional; 4 en curso; 5–7 planificados. Changarritos: plan de 9 sprints (0–8); 0–3 cerrados; 4 en curso; 5–8 planificados. Usa el filtro para ver cada sprint.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Tabs value={selectedProject} onValueChange={setSelectedProject}>
          <TabsList>
            <TabsTrigger value="leoneta">Leoneta</TabsTrigger>
            <TabsTrigger value="changarritos">Changarritos</TabsTrigger>
          </TabsList>
        </Tabs>
        <Select value={selectedSprint} onValueChange={setSelectedSprint}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Sprint" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los sprints</SelectItem>
            {sprintList.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card>
          <CardContent className="pt-4 pb-3 px-4">
            <p className="text-xs text-muted-foreground">Total tareas</p>
            <p className="text-2xl font-bold text-foreground">{filtered.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 pb-3 px-4">
            <p className="text-xs text-muted-foreground">Story Points</p>
            <p className="text-2xl font-bold text-foreground">{donePoints}<span className="text-sm font-normal text-muted-foreground">/{totalPoints}</span></p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 pb-3 px-4">
            <p className="text-xs text-muted-foreground">Bloqueadas</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">{blockedCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 pb-3 px-4">
            <p className="text-xs text-muted-foreground">Pendientes</p>
            <p className="text-2xl font-bold text-foreground">{todoCount}</p>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2 flex-wrap">
            <ListTodo className="h-4 w-4" />
            {selectedProject === "leoneta" ? "Leoneta" : "Changarritos"} — {selectedSprint === "all" ? "Todos los Sprints" : selectedSprint}
            {selectedSprint === CURRENT_SPRINT && (
              <Badge variant="secondary" className="text-xs font-normal">Sprint actual</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[70px]">ID</TableHead>
                <TableHead>Tarea</TableHead>
                <TableHead className="hidden md:table-cell">Sprint</TableHead>
                <TableHead className="hidden sm:table-cell">Categoría</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="hidden md:table-cell">Prioridad</TableHead>
                <TableHead className="hidden lg:table-cell">Asignado</TableHead>
                <TableHead className="text-right w-[50px]">SP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((task) => {
                const sc = statusConfig[task.status];
                const pc = priorityConfig[task.priority];
                const StatusIcon = sc.icon;
                return (
                  <TableRow key={task.id}>
                    <TableCell className="font-mono text-xs text-muted-foreground">{task.id}</TableCell>
                    <TableCell className="font-medium text-sm max-w-[300px]">{task.title}</TableCell>
                    <TableCell className="hidden md:table-cell text-xs text-muted-foreground">{task.sprint}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant="outline" className="text-xs">{task.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs gap-1 ${sc.className}`}>
                        <StatusIcon className="h-3 w-3" />
                        <span className="hidden sm:inline">{sc.label}</span>
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="secondary" className={`text-xs ${pc.className}`}>{pc.label}</Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-xs text-muted-foreground">{task.assignee}</TableCell>
                    <TableCell className="text-right font-mono text-sm">{task.storyPoints}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
