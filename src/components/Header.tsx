"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Close from "./icons/Close";
import Hamburger from "./icons/Hamburger";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass text-gray-950 backdrop-blur-md bg-white/25"
          : "bg-transparent text-gray-50 hover:text-gray-200"
      } `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 ">
          {/* Logo */}
          <Link href="/" className="text-2xl lg:text-3xl font-bold">
            KATA VISUAL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium ${
                  isScrolled ? "hover:text-gray-50" : "hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className={`hidden lg:block text-gray-50 px-8 py-2 rounded-full font-medium ${
              isScrolled ? "btn-glass-dark" : "btn-glass"
            }`}
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer lg:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <Hamburger width={24} height={24} />
            ) : (
              <Close width={24} height={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass rounded-lg mt-2 p-4 backdrop-blur-md bg-white/25 border border-white/18 mb-10">
            <nav className="flex flex-col text-center space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium hover:text-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={` btn-glass-dark text-gray-50 px-8 py-2 rounded-full font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
