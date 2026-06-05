import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";

const products = [
  { origin: "INDIAN", type: "SLAB", name: "Makrana White Marble", hindi: "मकराना व्हाइट", price: "₹180/sq ft" },
  { origin: "ITALIAN", type: "SLAB", name: "Statuario Marble", hindi: "स्टैचुअरियो", price: "₹450/sq ft" },
  { origin: "INDIAN", type: "SLAB", name: "Rainforest Brown Marble", hindi: "रेनफॉरेस्ट ब्राउन", price: "₹220/sq ft" },
  { origin: "INDIAN", type: "SLAB", name: "Katni Brown Marble", hindi: "कटनी ब्राउन", price: "₹95/sq ft" },
  { origin: "IMPORTED", type: "SLAB", name: "Emperador Dark Marble", hindi: "एम्परेडोर डार्क", price: "₹380/sq ft" },
];

export default function Marble() {
  const [enquiryProduct, setEnquiryProduct] = useState("");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <section className="relative min-h-[50vh] flex flex-col justify-center px-4 py-20 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(135deg,_#e8e0d8_0%,_#c8b8a8_50%,_#a89880_100%)]">
        <div className="container mx-auto relative z-10">
          <Link href="/" className="text-white/70 hover:text-white text-sm font-medium tracking-wider uppercase mb-8 inline-block">
            ← Back to Home
          </Link>
          <span className="block text-[var(--gold)] font-sans uppercase tracking-[0.3em] font-bold mb-4">मार्बल</span>
          <h1 className="font-serif text-6xl text-white font-bold mb-4">Marble</h1>
          <p className="text-white/90 text-xl font-light max-w-2xl">
            Italian and Indian marble slabs — from pristine white Makrana to warm Emperador.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.name}
                category="marble"
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
