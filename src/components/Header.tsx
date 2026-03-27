import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Eligibility", path: "/eligibility" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-serif font-bold text-xl">
                FA
              </div>
              <span className="font-serif font-bold text-xl text-primary hidden sm:block">
                Federal Appeals
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/14422842478" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                Free Case Review
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3 flex flex-col gap-2">
              <a href="https://wa.me/14422842478" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full justify-center border-primary text-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full">
                <Button className="w-full justify-center bg-secondary text-primary font-semibold">
                  Free Case Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
