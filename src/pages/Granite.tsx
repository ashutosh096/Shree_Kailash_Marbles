import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";

const products = [
  { origin: "INDIAN", type: "SLAB", name: "Black Galaxy Granite", hindi: "ब्लैक गैलेक्सी", price: "₹120/sq ft" },
  { origin: "INDIAN", type: "SLAB", name: "Tan Brown Granite", hindi: "टैन ब्राउन", price: "₹95/sq ft" },
  { origin: "INDIAN", type: "SLAB", name: "Steel Grey Granite", hindi: "स्टील ग्रे", price: "₹85/sq ft" },
  { origin: "INDIAN", type: "SLAB", name: "Imperial Red Granite", hindi: "इम्पीरियल रेड", price: "₹110/sq ft" },
];

export default function Granite() {
  const [enquiryProduct, setEnquiryProduct] = useState("");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <section className="relative min-h-[50vh] flex flex-col justify-center px-4 py-20 bg-[linear-gradient(135deg,_#1a1a14_0%,_#2d2d1a_50%,_#1a1a0a_100%)]">
        <div className="container mx-auto">
          <Link href="/" className="text-white/70 hover:text-white text-sm font-medium tracking-wider uppercase mb-8 inline-block">
            ← Back to Home
          </Link>
          <span className="block text-[var(--gold)] font-sans uppercase tracking-[0.3em] font-bold mb-4">ग्रेनाइट</span>
          <h1 className="font-serif text-6xl text-white font-bold mb-4">Granite</h1>
          <p className="text-white/70 text-xl font-light max-w-2xl">
            Imported and Indian granite slabs for kitchen counters, flooring & cladding.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.name}
                category="granite"
                brand={p.origin}
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
