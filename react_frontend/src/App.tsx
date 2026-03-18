import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { OurWorkPage } from "./pages/OurWorkPage";
import { PricingPage } from "./pages/PricingPage";
import { ServicesPage } from "./pages/ServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/our-work" element={<OurWorkPage />} />
      <Route path="/request-quote" element={<PricingPage />} />
      <Route path="/pricing" element={<Navigate to="/request-quote" replace />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/case-studies" element={<CaseStudyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
