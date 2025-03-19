
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blessing from "./pages/Blessing";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blessing" element={<Blessing />} />
            <Route path="/culture" element={<Navigate to="/blessing" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/charity" element={<Index />} />
            <Route path="/categories/health" element={<Index />} />
            <Route path="/categories/lucky" element={<Index />} />
            <Route path="/categories/bracelets" element={<Index />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/gift" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
