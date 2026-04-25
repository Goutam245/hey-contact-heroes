import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/site/Layout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Leistungen from "./pages/Leistungen.tsx";
import Branchen from "./pages/Branchen.tsx";
import UeberUns from "./pages/UeberUns.tsx";
import WarumHCH from "./pages/WarumHCH.tsx";
import Referenzen from "./pages/Referenzen.tsx";
import Karriere from "./pages/Karriere.tsx";
import Technologie from "./pages/Technologie.tsx";
import Insights from "./pages/Insights.tsx";
import Kontakt from "./pages/Kontakt.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/branchenloesungen" element={<Branchen />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/warum-hch" element={<WarumHCH />} />
            <Route path="/referenzen" element={<Referenzen />} />
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/technologie-ki" element={<Technologie />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
