import { BarChart3, GitCompare, FileText, Users, LayoutDashboard } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Resumen", url: "/", icon: LayoutDashboard },
  { title: "Métricas", url: "/metrics", icon: BarChart3 },
  { title: "Comparativo", url: "/comparative", icon: GitCompare },
  { title: "Análisis de Cierre", url: "/analysis", icon: FileText },
  { title: "Conclusiones", url: "/conclusions", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          {!collapsed && (
            <div className="flex items-center gap-2 mb-1">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-foreground">SW Metrics</h2>
                <p className="text-[10px] text-muted-foreground">Dashboard v1.0</p>
              </div>
            </div>
          )}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className="hover:bg-accent" activeClassName="bg-accent text-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="rounded-lg bg-secondary p-3">
              <p className="text-xs font-semibold text-foreground mb-1">Equipo</p>
              <p className="text-[10px] text-muted-foreground">6 integrantes · 2 proyectos</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
