import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/tiles", label: "Tiles" },
    { href: "/granite", label: "Granite" },
    { href: "/marble", label: "Marble" },
    { href: "/sanitary", label: "Sanitary" },
    { href: "/kota-and-more", label: "Kota & More" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Shri Kailash Marble & Tiles" className="h-12 w-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold leading-none text-foreground">
              Shri Kailash
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Marble & Tiles
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary py-7 -mb-[2px]" : "text-foreground"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/ /g, "-")}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/calculator">
            <Button variant="outline" className="rounded-full border-border font-medium gap-2" data-testid="button-calculator">
              <Calculator className="h-4 w-4" /> Calculator
            </Button>
          </Link>
          <a href="tel:9451582588">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium" data-testid="button-call-cta">
              <PhoneCall className="mr-2 h-4 w-4" /> Call 9451582588
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 pb-6 absolute w-full shadow-lg">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <a href="tel:9451582588" className="block">
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white" size="lg">
                  <PhoneCall className="mr-2 h-5 w-5" /> Call 9451582588
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
