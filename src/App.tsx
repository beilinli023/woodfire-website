
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
import Culture from "./pages/Culture";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import About from "./pages/About";
import Charity from "./pages/Charity";
import CharityProjects from "./pages/CharityProjects";
import CharityProjectDetail from "./pages/CharityProjectDetail";

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
            <Route path="/culture" element={<Culture />} />
            <Route path="/culture/:category" element={<ArticleList />} />
            <Route path="/culture/:category/:articleId" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/charity/projects" element={<CharityProjects />} />
            <Route path="/charity/projects/:id" element={<CharityProjectDetail />} />
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
