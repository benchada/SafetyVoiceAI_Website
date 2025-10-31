"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../media/Frame 1171275945.png";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Smooth scroll and set active section
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();

    // If not on home page, navigate to home page with hash
    if (pathname !== "/") {
      window.location.href = `/${target}`;
      return;
    }

    // If on home page, smooth scroll to section
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  // Detect scroll position for section highlighting
  useEffect(() => {
    // Only run scroll detection on home page
    if (pathname !== "/") return;

    const sections = ["#features", "#contact"];
    const detectActiveSection = () => {
      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Check which section is currently in view
      let found = false;
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is considered active if its top is near or above the viewport center
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }

      // If no section is in view but we've scrolled past the top
      if (!found && window.scrollY >= 100) {
        // Check if we're before the first section
        const firstSection = document.querySelector(sections[0]);
        if (firstSection && firstSection.getBoundingClientRect().top > 150) {
          setActiveSection("");
        }
      }
    };

    detectActiveSection(); // Run on mount
    window.addEventListener("scroll", detectActiveSection);
    return () => window.removeEventListener("scroll", detectActiveSection);
  }, [pathname]);

  return (
    <header
      className={`absolute w-full py-1 lg:py-5 border-b border-b-[#C0C0C0] top-0 z-10 backdrop-blur ${
        pathname === "/about" ? "bg-white" : "bg-[#F4F9F6] lg:bg-transparent"
      }`}
    >
      <div className="mx-auto 2xl:max-w-[73%] px-4 sm:px-6 lg:px-8">
        <nav
          className="h-16 flex items-center justify-between"
          aria-label="Primary"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Safety Voice AI"
          >
            <span className="inline-flex items-center justify-center">
              <Image src={logo} alt="Logo" className="w-auto h-10 sm:h-12" />
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[20px] font-medium">
            <Link
              href="/"
              className={`relative pb-1 transition-colors ${
                pathname === "/"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Home
              {pathname === "/" && (
                <hr className="h-[3px] rounded-full opacity-[70%] translate-y-1 border-0 bg-secondary" />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative pb-1 transition-colors ${
                pathname === "/about"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              About us
              {pathname === "/about" && (
                <hr className="h-[3px] rounded-full opacity-[70%] translate-y-1 border-0 bg-secondary" />
              )}
            </Link>

            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "#features")}
              className={`relative pb-1 cursor-pointer transition-colors ${
                activeSection === "#features"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Key Features
              {activeSection === "#features" && (
                <hr className="h-[3px] rounded-full opacity-[70%] translate-y-1 border-0 bg-secondary" />
              )}
            </a>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className={`relative pb-1 cursor-pointer transition-colors ${
                activeSection === "#contact"
                  ? "text-secondary"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Contact Us
              {activeSection === "#contact" && (
                <hr className="h-[3px] rounded-full opacity-[70%] translate-y-1 border-0 bg-secondary" />
              )}
            </a>
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button size="sm">Request a Demo</Button>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent transition"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-9 h-9 text-primary" />
              ) : (
                <Menu className="w-9 h-9 text-primary" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 flex flex-col items-start gap-4 text-lg font-medium bg-background py-4 px-2 rounded-lg">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`w-full ${
                pathname === "/"
                  ? "text-secondary"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={`w-full ${
                pathname === "/about"
                  ? "text-secondary"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              About us
            </Link>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "#features")}
              className={`w-full ${
                activeSection === "#features"
                  ? "text-secondary"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Key Features
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className={`w-full ${
                activeSection === "#contact"
                  ? "text-secondary"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Contact Us
            </a>
            <Button size="sm" className="w-full mt-2">
              Request a Demo
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
