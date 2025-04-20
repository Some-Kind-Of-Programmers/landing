import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();
  
  // Handle hash links for smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Add a slight delay to ensure the DOM is fully loaded
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 80, // Offset for fixed header
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Add listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CommunitySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
