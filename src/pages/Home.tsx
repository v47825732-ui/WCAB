import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ShieldAlert, CheckCircle2, FileText, Scale, Phone } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-bold tracking-wide uppercase mb-6 border border-secondary/30">
              <ShieldAlert className="w-4 h-4" />
              OWCP Denial Help
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Denied Federal Workers' Comp? Fight Your ECAB Appeal.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
              We help federal employees navigate the Department of Labor appeals board to secure their entitled grants and benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/eligibility" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg h-14 px-8 shadow-lg">
                  Check Eligibility
                </Button>
              </Link>
              <a href="https://wa.me/14422842478" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call/WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Assisting Federal Employees Nationwide With Claims Involving
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Logos represented by text/icons for now */}
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-gray-800">
              <Scale className="w-8 h-8" /> OWCP
            </div>
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-gray-800">
              <FileText className="w-8 h-8" /> FECA
            </div>
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-gray-800">
              <ShieldAlert className="w-8 h-8" /> ECAB
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            *We are a private firm not affiliated with the U.S. Government.
          </p>
        </div>
      </section>

      {/* The Problem/Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                The Stress of a Denial Ends Here.
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Receiving a denial letter from the Office of Workers' Compensation Programs (OWCP) is devastating. You're injured, unable to work, and now the system designed to protect you has turned its back.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                The Employees' Compensation Appeals Board (ECAB) process is complex, time-sensitive, and unforgiving of mistakes. Don't fight the federal government alone. Our specialists understand the exact criteria the board looks for to overturn a denial and secure your grant.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Strict 180-day deadline for ECAB appeals",
                  "Complex medical evidence requirements",
                  "Rigid formatting and legal arguments needed",
                  "One chance to get it right before the board"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/how-it-works">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-6 h-auto text-lg">
                  See How We Win Appeals
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
                alt="Federal employee reviewing documents" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Confidential Review</h4>
                    <p className="text-sm text-gray-500">100% Secure & Private</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Stop the Clock on Your Appeal Deadline
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Send us your denial letter today for a free, confidential analysis. We'll tell you exactly what went wrong and how to fix it.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-xl h-16 px-10 shadow-xl">
              Get Free Case Review
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
