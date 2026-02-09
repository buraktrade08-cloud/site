import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Exhibitions from "@/pages/Exhibitions";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" expand={false} richColors />
        <Router>
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route path={ROUTE_PATHS.GALLERY} element={<Gallery />} />
              <Route path={ROUTE_PATHS.EXHIBITIONS} element={<Exhibitions />} />
              <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
              <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
              {/* Catch-all route to Home as a fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;