import { MessageSquare } from "lucide-react";

export interface ProductCardProps {
  brand?: string;
  size?: string;
  name: string;
  nameHindi?: string;
  price: string;
  category: "tiles" | "granite" | "marble" | "sanitary" | "kota-and-more";
  onEnquiry: (productName: string) => void;
}

export default function ProductCard({
  brand,
  size,
  name,
  nameHindi,
  price,
  category,
  onEnquiry,
}: ProductCardProps) {
  
  const getGradient = (cat: string) => {
    switch (cat) {
      case "tiles": return "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)";
      case "granite": return "linear-gradient(135deg, #334155 0%, #0f172a 100%), radial-gradient(circle, #475569 20%, transparent 20%)";
      case "marble": return "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)";
      case "sanitary": return "linear-gradient(135deg, #f1f5f9 0%, #bae6fd 100%)";
      default: return "linear-gradient(135deg, #d6d3d1 0%, #78716c 100%)";
    }
  };

  const isPerSqFt = category !== "sanitary" && !price.includes("/");

  return (
    <div 
      className="group bg-white rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
      data-testid={`card-product-${name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div 
        className="w-full aspect-square relative p-3"
        style={{ background: getGradient(category) }}
      >
        {brand && (
          <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            {brand}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1 relative">
        {size && (
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {size}
          </div>
        )}
        
        <h3 className="font-serif text-xl font-semibold leading-tight text-foreground mb-1">
          {name}
        </h3>
        
        {nameHindi && (
          <p className="text-sm text-muted-foreground mb-4">
            {nameHindi}
          </p>
        )}
        
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <span className="text-xs text-muted-foreground block mb-0.5">Starting at</span>
            <span className="font-serif text-2xl font-bold text-primary">
              {price}
            </span>
          </div>
          
          <button
            onClick={() => onEnquiry(name)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-white transition-colors hover:bg-primary"
            aria-label="Enquire"
            data-testid={`button-enquiry-${name.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
