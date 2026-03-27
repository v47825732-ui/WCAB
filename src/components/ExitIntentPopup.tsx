import { useState, useEffect } from "react";
import { X, FileText, CheckCircle } from "lucide-react";
import { Button } from "./Button";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Show after 15 seconds if not triggered by exit intent
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 15000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, send this to a CRM/backend
      console.log("Email captured:", email);
      setIsSubmitted(true);
      setTimeout(() => setIsOpen(false), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-300"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-primary p-6 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl"></div>
          
          <FileText className="w-12 h-12 mx-auto mb-4 text-secondary" />
          <h2 className="font-serif text-2xl font-bold mb-2">Wait! Don't Miss Your Deadline</h2>
          <p className="text-gray-200 text-sm">Stop the clock on your appeal deadline.</p>
        </div>

        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Checklist Sent!</h3>
              <p className="text-gray-600">Check your inbox for the 3-page ECAB Checklist.</p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                Get the 3-page ECAB Checklist instantly.
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold py-6 text-lg">
                  Send Me The Checklist
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
