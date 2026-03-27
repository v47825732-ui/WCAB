import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { CheckCircle, XCircle, ArrowRight, AlertTriangle } from "lucide-react";

export function Eligibility() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    setTimeout(() => {
      if (step < 4) {
        setStep(step + 1);
      } else {
        setStep(5); // Results
      }
    }, 300);
  };

  const isEligible = 
    answers.q1 === "yes" && 
    answers.q2 === "yes" && 
    answers.q3 === "yes";

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Am I Eligible for an ECAB Appeal?
          </h1>
          <p className="text-xl text-gray-600">
            Take this 60-second quiz to see if you qualify for our federal workers' compensation appeal services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Progress Bar */}
          <div className="bg-gray-100 h-2 w-full">
            <div 
              className="bg-secondary h-full transition-all duration-500 ease-in-out"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>

          <div className="p-8 md:p-12">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
                  Are you a current or former Federal Employee?
                </h2>
                <p className="text-gray-500 text-center mb-8">(e.g., USPS, TSA, VA, DoD, etc.)</p>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleAnswer("q1", "yes")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    Yes, I am a federal employee
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                  <button 
                    onClick={() => handleAnswer("q1", "no")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    No, I am a state/private employee
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
                  Have you received a formal denial letter from OWCP?
                </h2>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleAnswer("q2", "yes")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    Yes, my claim was denied
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                  <button 
                    onClick={() => handleAnswer("q2", "no")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    No, I haven't received a decision yet
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
                  Was your denial letter issued within the last 180 days?
                </h2>
                <div className="bg-yellow-50 border-l-4 border-secondary p-4 mb-8 rounded-r-md">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                      ECAB has a strict 180-day deadline from the date of the OWCP decision to file an appeal.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleAnswer("q3", "yes")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    Yes, it's within 180 days
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                  <button 
                    onClick={() => handleAnswer("q3", "no")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    No, it's been more than 180 days
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                  <button 
                    onClick={() => handleAnswer("q3", "unsure")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    I'm not sure
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
                  Do you have medical evidence supporting your injury?
                </h2>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleAnswer("q4", "yes")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    Yes, I have medical records
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                  <button 
                    onClick={() => handleAnswer("q4", "no")}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-gray-700 flex items-center justify-between group"
                  >
                    No, I need help gathering records
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-in fade-in zoom-in-95 duration-500 text-center">
                {isEligible ? (
                  <>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                      You Are Likely Eligible!
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      Based on your answers, you meet the criteria for an ECAB appeal. Time is critical. Upload your denial letter now for a free, confidential review by our specialists.
                    </p>
                    <Link to="/contact">
                      <Button size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold text-xl h-16 px-10 shadow-xl mb-4">
                        Upload Denial Letter Now
                      </Button>
                    </Link>
                    <a href="https://wa.me/14422842478" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 font-bold text-lg h-14">
                        Message Us on WhatsApp
                      </Button>
                    </a>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertTriangle className="w-10 h-10 text-yellow-600" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                      Let's Review Your Case
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      Your situation might be complex, but you still have options. We need to review your specific details to determine the best path forward.
                    </p>
                    <Link to="/contact">
                      <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-xl h-16 px-10 shadow-xl mb-4">
                        Get Free Case Review
                      </Button>
                    </Link>
                    <button 
                      onClick={() => { setStep(1); setAnswers({}); }}
                      className="text-primary font-medium hover:underline"
                    >
                      Retake Quiz
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
