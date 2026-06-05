import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";

const products = [
  { brand: "KAJARIA", size: "600×600 MM", name: "Marble Glaze 2x2 Vitrified", hindi: "मार्बल ग्लेज़ टाइल", price: "₹45/sq ft", tags: ["2X2", "FLOOR TILES"] },
  { brand: "ORIENTBELL", size: "600×1200 MM", name: "Onyx Beige 2x4 Glossy", hindi: "ओनिक्स बेज", price: "₹78/sq ft", tags: ["2X4", "WALL TILES"] },
  { brand: "SOMANY", size: "200×1200 MM", name: "Wooden Plank Tile", hindi: "वुडन प्लैंक", price: "₹65/sq ft", tags: ["2X4", "FLOOR TILES"] },
  { brand: "RAK", size: "600×600 MM", name: "Carrara White 2x2", hindi: "कैरारा व्हाइट", price: "₹55/sq ft", tags: ["2X2", "WALL TILES"] },
  { brand: "NILCORE", size: "600×1200 MM", name: "Statuario Wall Tile 2x4", hindi: "स्टैचुअरियो वॉल", price: "₹95/sq ft", tags: ["2X4", "WALL TILES"] },
  { brand: "PRAYAG", size: "600×600 MM", name: "Matte Grey Plain 2x2", hindi: "मैट ग्रे", price: "₹42/sq ft", tags: ["2X2", "FLOOR TILES"] },
];

const filters = ["ALL", "2X2", "2X4", "WALL TILES", "FLOOR TILES"];

export default function Tiles() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [enquiryProduct, setEnquiryProduct] = useState("");

  const filteredProducts = activeFilter === "ALL" 
    ? products 
    : products.filter(p => p.tags.includes(activeFilter));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <section className="relative min-h-[50vh] flex flex-col justify-center px-4 py-20 bg-[linear-gradient(135deg,_#1a2a3a_0%,_#2d4a6b_50%,_#1a2a3a_100%)]">
        <div className="container mx-auto">
          <Link href="/" className="text-white/70 hover:text-white text-sm font-medium tracking-wider uppercase mb-8 inline-block">
            ← Back to Home
          </Link>
          <span className="block text-[var(--gold)] font-sans uppercase tracking-[0.3em] font-bold mb-4">टाइल्स</span>
          <h1 className="font-serif text-6xl text-white font-bold mb-4">Tiles</h1>
          <p className="text-white/70 text-xl font-light max-w-2xl">
            Premium 2x2 and 2x4 vitrified tiles in glossy, matte and wooden finishes.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-colors ${
                  activeFilter === f 
                    ? "bg-primary text-white" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                data-testid={`filter-btn-${f.toLowerCase().replace(/ /g, '-')}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.name}
                category="tiles"
                brand={p.brand}
                size={p.size}
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
