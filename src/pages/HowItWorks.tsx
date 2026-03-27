import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { FileText, Search, Scale, Award, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-white" />,
      title: "Step 1: Submit Your Case Details",
      description: "Fill out our secure online form or message us on WhatsApp. Upload your OWCP denial letter and any relevant medical evidence. It's 100% confidential.",
      color: "bg-primary"
    },
    {
      icon: <Search className="w-10 h-10 text-white" />,
      title: "Step 2: We Review Your Denial Letter",
      description: "Within 24 hours, our specialists analyze the exact reasons for your denial. We identify the missing medical evidence or procedural errors that caused the rejection.",
      color: "bg-secondary"
    },
    {
      icon: <Scale className="w-10 h-10 text-white" />,
      title: "Step 3: Strategic Appeal Filed with ECAB",
      description: "We build a comprehensive legal and medical argument. We ensure your appeal is filed correctly, on time, and directly addresses the board's strict criteria.",
      color: "bg-primary"
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: "Step 4: Award/Grant Secured",
      description: "We fight for the reversal of your denial, securing your entitled compensation, medical benefits, or schedule award grants.",
      color: "bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            The Process: How We Win Your Appeal
          </h1>
          <p className="text-xl text-gray-600">
            Navigating the Employees' Compensation Appeals Board (ECAB) is daunting. We simplify the process and handle the heavy lifting so you can focus on recovery.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0"></div>

          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className={`flex-1 w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Icon Marker */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-xl border-4 border-white z-10 relative`}>
                    {step.icon}
                  </div>
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 rounded-full ${step.color} opacity-20 animate-ping`}></div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Ready to start Step 1?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg h-14 px-8 shadow-lg w-full sm:w-auto">
                Upload My Denial Letter
              </Button>
            </Link>
            <Link to="/eligibility">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-bold text-lg h-14 px-8 w-full sm:w-auto flex items-center justify-center gap-2">
                Check Eligibility First <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
