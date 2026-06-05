import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";

const products = [
  { type: "KOTA STONE", name: "Kota Blue Stone", hindi: "कोटा ब्लू स्टोन", price: "₹32/sq ft" },
  { type: "KOTA STONE", name: "Kota Brown Stone", hindi: "कोटा ब्राउन स्टोन", price: "₹28/sq ft" },
  { type: "ADHESIVE", name: "Tile Adhesive — White", hindi: "टाइल एडेसिव", price: "₹480/bag" },
  { type: "GROUT", name: "Tile Grout — White", hindi: "टाइल ग्राउट", price: "₹320/kg" },
  { type: "ROOFING", name: "Khaprail Roofing Tile", hindi: "खपरैल", price: "₹18/piece" },
  { type: "ROOFING", name: "Chaker Roofing Tile", hindi: "चाकर", price: "₹22/piece" },
  { type: "CP FITTINGS", name: "Jaquar CP Fittings Set", hindi: "जेकुआर सीपी", price: "₹8,200/set" },
  { type: "ADHESIVE", name: "Epoxy Grout Premium", hindi: "एपॉक्सी ग्राउट", price: "₹850/kg" },
];

export default function KotaAndMore() {
  const [enquiryProduct, setEnquiryProduct] = useState("");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <section className="relative min-h-[50vh] flex flex-col justify-center px-4 py-20 bg-[linear-gradient(135deg,_#1a140a_0%,_#3d2b1a_50%,_#1a140a_100%)]">
        <div className="container mx-auto">
          <Link href="/" className="text-white/70 hover:text-white text-sm font-medium tracking-wider uppercase mb-8 inline-block">
            ← Back to Home
          </Link>
          <span className="block text-[var(--gold)] font-sans uppercase tracking-[0.3em] font-bold mb-4">कोटा व अन्य</span>
          <h1 className="font-serif text-6xl text-white font-bold mb-4">Kota & More</h1>
          <p className="text-white/70 text-xl font-light max-w-2xl">
            Kota stone, tile adhesives, grout, roofing tiles and more — everything your project needs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.name}
                category="kota-and-more"
                size={p.type}
                name={p.name}
                nameHindi={p.hindi}
                price={p.price}
                onEnquiry={setEnquiryProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal 
        isOpen={!!enquiryProduct} 
        onClose={() => setEnquiryProduct("")} 
        productName={enquiryProduct} 
      />
    </motion.div>
  );
}
