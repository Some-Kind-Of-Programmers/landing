import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary-600 flex items-center justify-center text-white">
                <span className="font-mono font-bold text-lg">{"{}"}</span>
              </div>
              <span className="text-lg font-semibold text-gray-800">SKOP</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-primary-600" 
              onClick={() => handleNavClick("about")}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-primary-600" 
              onClick={() => handleNavClick("features")}
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-primary-600" 
              onClick={() => handleNavClick("community")}
            >
              Community
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-primary-600" 
              onClick={() => handleNavClick("faq")}
            >
              FAQ
            </Button>
            <Button asChild>
              <a href="https://t.me/some_kind_of_programmers" target="_blank" rel="noopener noreferrer">
                Join Now
              </a>
            </Button>
          </div>
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-600 hover:text-primary-600 hover:bg-gray-50" 
              onClick={() => handleNavClick("about")}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-600 hover:text-primary-600 hover:bg-gray-50" 
              onClick={() => handleNavClick("features")}
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-600 hover:text-primary-600 hover:bg-gray-50" 
              onClick={() => handleNavClick("community")}
            >
              Community
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-600 hover:text-primary-600 hover:bg-gray-50" 
              onClick={() => handleNavClick("faq")}
            >
              FAQ
            </Button>
            <Button className="w-full" asChild>
              <a href="https://t.me/some_kind_of_programmers" target="_blank" rel="noopener noreferrer">
                Join Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
