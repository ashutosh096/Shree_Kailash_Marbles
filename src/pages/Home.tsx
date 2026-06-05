import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, MapPin, Clock, Star } from "lucide-react";
import BrandMarquee from "@/components/BrandMarquee";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CATEGORIES = [
  { title: "Tiles", hindi: "टाइल्स", link: "/tiles", color: "from-[#4a2c2c] to-[#6b3a3a]", num: "01", badge: "Bestseller" },
  { title: "Granite", hindi: "ग्रेनाइट", link: "/granite", color: "from-[#2c3a4a] to-[#3a4f66]", num: "02", badge: "Popular" },
  { title: "Marble", hindi: "मार्बल", link: "/marble", color: "from-[#3a3a2c] to-[#5a5a3a]", num: "03", badge: "Premium" },
  { title: "Sanitary", hindi: "सैनिटरी", link: "/sanitary", color: "from-[#2c4a3a] to-[#3a6650]", num: "04", badge: null },
  { title: "Kota & More", hindi: "कोटा व अन्य", link: "/kota-and-more", color: "from-[#3a2c4a] to-[#503a66]", num: "05", badge: "New Arrivals" },
];


export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY      = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_#2a1a0a_0%,_#1a0a0a_40%,_#0d0505_100%)] z-0 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.01)_2px,rgba(255,255,255,0.01)_4px)] before:pointer-events-none" />
        <motion.div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8B1A1A]/15 blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c8a97a]/10 blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 px-4 flex flex-col items-center gap-6 max-w-4xl mx-auto py-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-[11px] md:text-sm uppercase tracking-[0.3em] text-[var(--gold)] font-bold">
            Est. Decades of Trust · Kanpur
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-[84px] font-bold text-white leading-[1.05] mb-2">
            Shri Kailash<br /><span className="italic text-[#c8a97a]">Marble & Tiles</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-xl md:text-2xl text-[var(--gold)]/80">
            श्री कैलाश मार्बल एंड टाइल्स
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans text-lg md:text-xl text-white/60 font-light mt-2 max-w-2xl">
            दशकों से आपकी सेवा में तत्पर — Fixed & Reasonable Price with Complete Solution
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link href="/tiles">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-[#8B1A1A] hover:bg-[#7a1515] text-white rounded-full px-8 py-4 font-medium transition-colors shadow-lg shadow-[#8B1A1A]/40"
                data-testid="button-explore-catalog">
                EXPLORE CATALOG →
              </motion.button>
            </Link>
            <a href="https://wa.me/919451582588" target="_blank" rel="noreferrer">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto border-2 border-white/20 text-white rounded-full px-8 py-4 font-medium transition-all"
                data-testid="button-whatsapp-hero">
                ⊕ WHATSAPP US
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll</span>
          <motion.div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [0, 1, 0], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </section>

      <BrandMarquee />

      {/* ── Catalog with Bestseller Badges ── */}
      <section className="py-28 px-4 bg-background overflow-hidden">
        <div className="container mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-16">
            <motion.span variants={fadeUp} className="text-[11px] font-sans uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-4">
              Our Catalog
            </motion.span>
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                Curated for every<br /><span className="text-primary italic">corner of your home</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-md font-light text-lg">
                Tiles, Granite, Marble, Kota, Sanitary, Adhesive, CP Fittings, Khaprail & Chaker — all under one trusted roof.
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={cat.link}>
                  <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }}
                    className={`relative bg-gradient-to-br ${cat.color} p-6 rounded-2xl cursor-pointer h-full flex flex-col justify-between min-h-[180px] group shadow-md hover:shadow-xl transition-shadow duration-300`}>
                    {cat.badge && (
                      <span className="absolute top-3 right-3 bg-[#c8a97a] text-[#1a0a0a] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-current" /> {cat.badge}
                      </span>
                    )}
                    <span className="text-white/30 font-sans text-xs font-bold tracking-widest">{cat.num}</span>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-1">{cat.title}</h3>
                      <p className="text-white/50 text-sm">{cat.hindi}</p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <motion.div whileHover={{ x: 4 }}
                        className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/25 flex items-center justify-center transition-colors">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-28 px-4 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden flex items-center justify-center p-8 text-center bg-[linear-gradient(135deg,_#3d2b1f_0%,_#6b4c3b_40%,_#8b6045_70%,_#c8a07a_100%)] shadow-2xl">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <h3 className="font-serif text-4xl text-white italic opacity-90 mb-3">Est. Since 2010</h3>
                  <p className="text-white/60 font-light">Serving Kanpur with trust</p>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-[#8B1A1A] text-white rounded-2xl p-5 shadow-xl">
                <p className="font-serif text-3xl font-bold">15+</p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-1">Years Trusted</p>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.span variants={fadeUp} className="text-[11px] font-sans uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-4">About Us</motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-2">
                A name Kanpur trusts for<br /><span className="text-primary italic">marble & sanitary needs</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[var(--gold)] text-xl mb-8">दशकों से आपकी सेवा में तत्पर</motion.p>
              <motion.p variants={fadeUp} className="text-foreground/70 font-light text-lg mb-10 leading-relaxed">
                From premium Italian marble slabs to everyday tile adhesives, Shri Kailash Marble & Tiles brings your home a complete, honest catalog — backed by transparent pricing and decades of personal service.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-4">
                {["Fixed & Reasonable Pricing", "Complete Solution Under One Roof", "Decades of Trusted Service in Kanpur", "Genuine Brands Only — Kajaria, Orientbell, RAK & more"].map(point => (
                  <motion.li key={point} variants={fadeUp} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats — redesigned narrow cards ── */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { num: "15+",   label: "Years of Service",     icon: "🏆" },
              { num: "5000+", label: "Happy Customers",      icon: "😊" },
              { num: "500+",  label: "Products in Stock",    icon: "📦" },
              { num: "2",     label: "Showroom Locations",   icon: "📍" },
            ].map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} custom={i}
                whileHover={{ y: -4 }}
                className="bg-white border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <p className="font-serif text-4xl font-bold text-primary mb-1">{s.num}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider font-sans">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 px-4 bg-[#0d0505] overflow-hidden">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="block text-[#c8a97a] font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white">
              The <span className="text-[#c8a97a] italic">Shri Kailash</span> difference
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: "💰", title: "Fixed & Transparent Pricing",   desc: "No hidden charges. What you see is what you pay. Best rates in Kanpur, guaranteed." },
              { icon: "🏪", title: "500+ Products Under One Roof",   desc: "Tiles, marble, granite, sanitary, adhesives, CP fittings — no need to visit multiple shops." },
              { icon: "✅", title: "100% Genuine Branded Products",  desc: "Only authorised stock from Kajaria, Orientbell, RAK, Jaquar, Hindware & more." },
              { icon: "🎨", title: "Free Design Consultation",       desc: "Our experts help you choose the right material, size, and finish for every room." },
              { icon: "📦", title: "Bulk Discounts Available",       desc: "Special rates for builders, contractors, and large residential projects." },
              { icon: "🔧", title: "Expert Installation Support",    desc: "We connect you with trusted local fitters to ensure perfect installation." },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -4, borderColor: "rgba(200,169,122,0.4)" }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-white font-semibold font-sans text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Contact Teaser ── */}
      <section className="py-28 px-4 bg-[#0d0505] text-white overflow-hidden border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="block text-[#c8a97a] font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Get In Touch
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl font-bold mb-8">
              Get in touch with <span className="text-[var(--gold)] italic">our showroom</span>
            </motion.h2>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <MapPin className="w-5 h-5" />, text: "Awas Vikas-3, Panki-Kalyanpur Rd, Kanpur-17" },
                { icon: <Phone className="w-5 h-5" />, text: "9451582588 · 7499783925 · 8840784729" },
                { icon: <Clock className="w-5 h-5" />, text: "Mon–Sat 9AM–8PM · Sun 10AM–5PM" },
              ].map(item => (
                <motion.div key={item.text} variants={fadeUp}
                  className="flex flex-col items-center gap-3 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#c8a97a]/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#8B1A1A]/40 flex items-center justify-center text-[#c8a97a]">{item.icon}</div>
                  <p className="text-white/70 text-sm text-center leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919451582588" target="_blank" rel="noreferrer">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-black rounded-full px-8 py-4 font-semibold transition-colors">
                  CHAT ON WHATSAPP
                </motion.button>
              </a>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto border border-white/30 hover:border-[#c8a97a] text-white rounded-full px-8 py-4 font-medium transition-colors">
                  VISIT CONTACT PAGE
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="w-full h-[350px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570!2d80.2707!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3a1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAwas%20Vikas%203%2C%20Panki%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1000000000000"
              width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
