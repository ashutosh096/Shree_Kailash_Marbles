import { Link } from "wouter";

export default function Footer() {
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
    <footer className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-white text-xl font-bold text-[#111111]">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold leading-none text-white">
                  Shri Kailash
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Marble & Tiles
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              Decades of trusted service in Kanpur. Fixed & reasonable prices with complete solutions for your home.
            </p>
            <div className="text-sm text-white/70">
              <p>📍 Awas Vikas-3, Panki-Kalyanpur Road, Kanpur-17</p>
              <p className="mt-1">📍 H.O.: 220 Nankari, IIT, Kanpur-16</p>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--gold)] mb-6">Catalog</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--gold)] mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-white/80">
              <p><span className="text-white font-medium">Sanjeev:</span> <a href="tel:9451582588" className="hover:text-white">9451582588</a></p>
              <p><span className="text-white font-medium">Rajiv:</span> <a href="tel:7499783925" className="hover:text-white">7499783925</a></p>
              <p><span className="text-white font-medium">Office:</span> <a href="tel:8840784729" className="hover:text-white">8840784729</a></p>
              <div className="pt-2 border-t border-white/10 mt-4">
                <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
                <p className="mt-1">Sunday: 10:00 AM – 5:00 PM</p>
              </div>
              <div className="pt-4">
                <a href="https://wa.me/919451582588" target="_blank" rel="noreferrer" className="inline-block px-6 py-2 bg-[#25D366] text-black font-semibold rounded-full hover:bg-[#20b858] transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Shri Kailash Marble & Tiles · Kanpur, India</p>
        </div>
      </div>
    </footer>
  );
}
