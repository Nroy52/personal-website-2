import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index.jsx";
import Vision from "@/pages/Vision.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<div className="min-h-screen flex items-center justify-center text-foreground">Auth Page</div>} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </BrowserRouter>
  );
}

