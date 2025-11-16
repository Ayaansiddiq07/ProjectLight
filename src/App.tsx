import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Platform from "./pages/Platform";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");
    if (hasSeenLoading) {
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasSeenLoading", "true");
    setShowLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              {!showLoading && (
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vision" element={<Vision />} />
                    <Route path="/platform" element={<Platform />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </>
              )}
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
