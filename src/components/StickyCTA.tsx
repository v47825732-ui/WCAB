import { Phone } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden flex justify-center items-center gap-4">
      <a 
        href="https://wa.me/14422842478" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-md font-bold text-sm shadow-md hover:bg-[#128C7E] transition-colors"
      >
        <Phone className="w-5 h-5" />
        WhatsApp Us
      </a>
      <a 
        href="tel:+14422842478"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-md font-bold text-sm shadow-md hover:bg-primary/90 transition-colors"
      >
        Call Now
      </a>
    </div>
  );
}
