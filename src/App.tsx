import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import MetricsPage from "./pages/MetricsPage";
import ComparativePage from "./pages/ComparativePage";
import AnalysisPage from "./pages/AnalysisPage";
import ConclusionsPage from "./pages/ConclusionsPage";
import BacklogPage from "./pages/BacklogPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-12 flex items-center border-b border-border px-4">
                <SidebarTrigger />
              </header>
              <main className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/metrics" element={<MetricsPage />} />
                  <Route path="/comparative" element={<ComparativePage />} />
                  <Route path="/analysis" element={<AnalysisPage />} />
                  <Route path="/conclusions" element={<ConclusionsPage />} />
                  <Route path="/backlog" element={<BacklogPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
