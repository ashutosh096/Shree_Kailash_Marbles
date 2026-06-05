export default function BrandMarquee() {
  const brands = [
    "JOHNSON", "ORIENTBELL", "KAJARIA", "RAK", "NILCORE", 
    "ASIAN", "SOMANY", "HINDWARE", "CERA", "JAQUAR", 
    "SAINT-GOBAIN", "PRAYAG"
  ];

  return (
    <section className="py-12 bg-white overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted Brands We Carry
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden w-full whitespace-nowrap">
        <div className="animate-marquee flex items-center space-x-12 px-6">
          {brands.map((brand, i) => (
            <span key={i} className="text-2xl md:text-3xl font-bold tracking-widest text-muted-foreground/40 font-sans">
              {brand}
            </span>
          ))}
          {/* Duplicate for infinite loop */}
          {brands.map((brand, i) => (
            <span key={`dup-${i}`} className="text-2xl md:text-3xl font-bold tracking-widest text-muted-foreground/40 font-sans">
              {brand}
            </span>
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}} />
      </div>
    </section>
  );
}
