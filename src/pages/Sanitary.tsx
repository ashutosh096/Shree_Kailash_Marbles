import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";

const products = [
  { brand: "HINDWARE", type: "EWC", name: "Hindware Rimless EWC", hindi: "हिंडवेयर रिमलेस", price: "₹8,500" },
  { brand: "CERA", type: "BASIN", name: "Cera Wash Basin Round", hindi: "सेरा वॉश बेसिन", price: "₹3,200" },
  { brand: "JAQUAR", type: "FAUCET", name: "Jaquar Single Lever Faucet", hindi: "जेकुआर सिंगल लीवर", price: "₹4,800" },
  { brand: "HINDWARE", type: "SHOWER", name: "Hindware Rain Shower", hindi: "हिंडवेयर रेन शावर", price: "₹6,500" },
  { brand: "CERA", type: "BATH", name: "Cera Bathtub Freestanding", hindi: "सेरा बाथटब", price: "₹45,000" },
  { brand: "JAQUAR", type: "SENSOR", name: "Jaquar Sensor Faucet", hindi: "जेकुआर सेंसर", price: "₹12,000" },
];

export default function Sanitary() {
  const [enquiryProduct, setEnquiryProduct] = useState("");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background">
      <section className="relative min-h-[50vh] flex flex-col justify-center px-4 py-20 bg-[linear-gradient(135deg,_#0a1a2a_0%,_#1a3a5a_50%,_#0a1a2a_100%)]">
        <div className="container mx-auto">
          <Link href="/" className="text-white/70 hover:text-white text-sm font-medium tracking-wider uppercase mb-8 inline-block">
            ← Back to Home
          </Link>
          <span className="block text-[var(--gold)] font-sans uppercase tracking-[0.3em] font-bold mb-4">सैनिटरी</span>
          <h1 className="font-serif text-6xl text-white font-bold mb-4">Sanitary</h1>
          <p className="text-white/70 text-xl font-light max-w-2xl">
            Premium bathroom fittings — Hindware, Cera, Jaquar, and more.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.name}
                category="sanitary"
                brand={p.brand}
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
