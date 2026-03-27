import { useState } from "react";
import { Button } from "../components/Button";
import { Phone, Mail, UploadCloud, CheckCircle2, ShieldAlert } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle file upload and form submission securely
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Free Denial Letter Analysis
          </h1>
          <p className="text-xl text-gray-600">
            Send us your OWCP denial letter. Our specialists will review it confidentially and tell you exactly what went wrong and how to fix it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  We Received Your Denial Letter
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  A specialist will review your case and text you within 2 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline" 
                  className="border-primary text-primary"
                >
                  Submit Another Document
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your injury and denial reason
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                  <UploadCloud className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-primary transition-colors" />
                  <p className="text-gray-900 font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm mb-4">Attach your SF-7, OWCP-957, or Denial Letter (PDF, JPG, PNG)</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-green-600 font-medium bg-green-50 py-2 px-4 rounded-full inline-flex mx-auto">
                    <ShieldAlert className="w-4 h-4" />
                    Secure, HIPAA-compliant upload
                  </div>
                  <input type="file" className="hidden" id="file-upload" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg h-14 shadow-lg">
                  Submit for Free Review
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy. Your information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                The fastest way to get help is to message us directly on WhatsApp. Our specialists are standing by to review your case.
              </p>
              
              <a 
                href="https://wa.me/14422842478" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:bg-[#128C7E] transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" />
                Message Us on WhatsApp
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Auto-reply: "Thanks for reaching out. Please reply with your name and the date of your denial letter so we can assist you immediately."
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                    <a href="tel:+14422842478" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">
                      +1 (442) 284-2478
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:jefferylawson353@gmail.com" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">
                      jefferylawson353@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
