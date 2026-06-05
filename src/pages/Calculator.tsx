import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Calculator, RotateCcw, ArrowLeft, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MATERIALS: Record<string, { label: string; hindi: string; min: number; max: number; unit: string; tip: string }> = {
  tiles:   { label: "Tiles",       hindi: "टाइल्स",    min: 45,  max: 150,  unit: "sq ft", tip: "Wall & floor tiles, vitrified, ceramic" },
  marble:  { label: "Marble",      hindi: "मार्बल",    min: 80,  max: 350,  unit: "sq ft", tip: "Italian, Indian, imported marble slabs" },
  granite: { label: "Granite",     hindi: "ग्रेनाइट",  min: 60,  max: 200,  unit: "sq ft", tip: "Black galaxy, Kashmir white & more" },
  kota:    { label: "Kota Stone",  hindi: "कोटा स्टोन", min: 25, max: 60,   unit: "sq ft", tip: "Natural stone for flooring & steps" },
};

const ROOMS = [
  { label: "Living Room",  l: "18", w: "14" },
  { label: "Bedroom",      l: "12", w: "12" },
  { label: "Kitchen",      l: "10", w: "8"  },
  { label: "Bathroom",     l: "6",  w: "5"  },
];

export default function CalculatorPage() {
  const [length,   setLength]   = useState("");
  const [width,    setWidth]    = useState("");
  const [material, setMaterial] = useState("tiles");
  const [result,   setResult]   = useState<null | { area: number; withWaste: number; minCost: number; maxCost: number }>(null);
  const [showRooms, setShowRooms] = useState(false);

  function calculate() {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!l || !w || l <= 0 || w <= 0) return;
    const area      = l * w;
    const withWaste = Math.ceil(area * 1.1);
    const rate      = MATERIALS[material];
    setResult({ area, withWaste, minCost: withWaste * rate.min, maxCost: withWaste * rate.max });
  }

  function reset() { setLength(""); setWidth(""); setResult(null); }

  function applyRoom(l: string, w: string) { setLength(l); setWidth(w); setResult(null); setShowRooms(false); }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0d0505]">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,_#2a1a0a_0%,_#0d0505_60%)]" />
        <motion.div className="absolute top-16 right-16 w-80 h-80 rounded-full bg-[#c8a97a]/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }} />

        <div className="container mx-auto relative z-10 max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm uppercase tracking-wider font-sans mb-10 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={1} className="block text-[#c8a97a] font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Free Tool
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={2} className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
            Project <span className="text-[#c8a97a] italic">Calculator</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3} className="text-white/50 font-light text-lg max-w-lg">
            Enter your room dimensions to instantly estimate material quantity and cost — no registration needed.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">

            {/* Material selector */}
            <div className="mb-8">
              <p className="text-[#c8a97a] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Select Material</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Object.entries(MATERIALS).map(([key, val]) => (
                  <motion.button key={key} whileTap={{ scale: 0.97 }}
                    onClick={() => { setMaterial(key); setResult(null); }}
                    className={`rounded-xl p-4 text-left transition-all border ${
                      material === key
                        ? "bg-[#8B1A1A] border-[#8B1A1A] shadow-lg shadow-[#8B1A1A]/30"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}>
                    <p className={`font-semibold text-sm ${material === key ? "text-white" : "text-white/80"}`}>{val.label}</p>
                    <p className={`text-xs mt-0.5 ${material === key ? "text-white/70" : "text-white/30"}`}>{val.hindi}</p>
                  </motion.button>
                ))}
              </div>
              <p className="text-white/30 text-xs mt-2">{MATERIALS[material].tip}</p>
            </div>

            {/* Quick room presets */}
            <div className="mb-8">
              <p className="text-[#c8a97a] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">Quick Presets</p>
              <div className="flex flex-wrap gap-2">
                {ROOMS.map(room => (
                  <motion.button key={room.label} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => applyRoom(room.l, room.w)}
                    className="bg-white/5 border border-white/10 hover:border-[#c8a97a]/40 text-white/70 hover:text-white rounded-full px-4 py-2 text-xs font-medium transition-all">
                    {room.label} ({room.l}×{room.w} ft)
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              {[
                { label: "Room Length (ft)", value: length, set: setLength },
                { label: "Room Width (ft)",  value: width,  set: setWidth  },
              ].map(({ label, value, set }) => (
                <div key={label} className="relative">
                  <input type="number" min="1" value={value}
                    onChange={e => { set(e.target.value); setResult(null); }}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#c8a97a] focus:shadow-[0_0_0_3px_rgba(200,169,122,0.15)] rounded-xl px-4 pt-6 pb-3 text-white outline-none transition-all duration-300"
                  />
                  <label className="absolute left-4 top-2 text-[11px] text-[#c8a97a] uppercase tracking-[0.15em] font-semibold pointer-events-none">
                    {label}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-8">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                onClick={calculate}
                className="flex-1 bg-gradient-to-r from-[#8B1A1A] to-[#b52525] text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#8B1A1A]/30">
                <Calculator className="w-4 h-4" /> Calculate Estimate
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                onClick={reset}
                className="px-5 bg-white/5 border border-white/10 text-white/60 hover:text-white rounded-xl transition-colors">
                <RotateCcw className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Result */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-[#c8a97a]/30 rounded-xl p-6 bg-[#c8a97a]/5"
                >
                  <p className="text-[#c8a97a] text-[11px] uppercase tracking-widest font-semibold mb-5">Your Estimate</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                    {[
                      { label: "Room Area",              value: `${result.area.toFixed(1)} sq ft` },
                      { label: "Qty Needed (+ 10% waste)", value: `${result.withWaste} sq ft` },
                      { label: "Estimated Cost",         value: `₹${result.minCost.toLocaleString()} – ₹${result.maxCost.toLocaleString()}` },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white/5 rounded-xl p-4">
                        <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">{label}</p>
                        <p className="text-white font-semibold text-xl leading-tight">{value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/30 text-xs mb-5">* Prices are approximate and vary by brand & finish. Visit our showroom or WhatsApp us for exact rates.</p>
                  <a href="https://wa.me/919451582588" target="_blank" rel="noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      className="w-full bg-[#25D366] hover:bg-[#20b858] text-black rounded-xl py-3 font-semibold text-sm transition-colors">
                      Get Exact Quote on WhatsApp →
                    </motion.button>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* How it works */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Pick your material", desc: "Tiles, marble, granite, or kota stone" },
              { step: "2", title: "Enter room size",    desc: "Length × width in feet" },
              { step: "3", title: "Get instant quote",  desc: "Quantity + cost estimate in seconds" },
            ].map(item => (
              <div key={item.step} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <div className="w-8 h-8 rounded-full bg-[#8B1A1A]/40 text-[#c8a97a] font-bold text-sm flex items-center justify-center mx-auto mb-3">{item.step}</div>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
