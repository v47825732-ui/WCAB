import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, FileText, HelpCircle } from "lucide-react";

export function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the difference between OWCP and ECAB?",
      answer: "The Office of Workers' Compensation Programs (OWCP) is the agency that initially processes and decides your claim. If OWCP denies your claim, the Employees' Compensation Appeals Board (ECAB) is the separate, independent appellate body within the Department of Labor that reviews OWCP's decisions."
    },
    {
      question: "How long do I have to file an ECAB appeal?",
      answer: "You strictly have 180 days from the date of the OWCP final decision to file an appeal with ECAB. Missing this deadline generally means you lose your right to appeal to the Board."
    },
    {
      question: "Can I submit new medical evidence to ECAB?",
      answer: "No. ECAB's review is limited to the evidence that was in the case record at the time OWCP made its final decision. If you have new evidence, you must request Reconsideration from OWCP instead of appealing to ECAB."
    },
    {
      question: "What is a Schedule Award?",
      answer: "A Schedule Award is a monetary grant paid to a federal employee for the permanent loss (or loss of use) of certain body parts or functions due to a work-related injury, even if they have returned to work."
    }
  ];

  const glossary = [
    {
      term: "Schedule Award",
      definition: "Compensation for permanent impairment of specific body parts (e.g., arm, leg, hearing) resulting from a work injury."
    },
    {
      term: "Impartial Medical Examination (IME)",
      definition: "An exam by a board-certified physician selected by OWCP to resolve a conflict in medical opinion between your doctor and the OWCP's second opinion doctor."
    },
    {
      term: "Reconsideration",
      definition: "A request to OWCP to review a denied claim based on new legal arguments or new, relevant medical evidence not previously considered."
    },
    {
      term: "Causal Relationship",
      definition: "The medical connection between your diagnosed condition and the specific work event or employment factors you claim caused it."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Federal Appeal Resources
          </h1>
          <p className="text-xl text-gray-600">
            Understand your rights, the terminology, and the appeal process.
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-serif font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg text-gray-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Glossary */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-serif font-bold text-primary">Key Terms Glossary</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glossary.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl text-primary mb-3">{item.term}</h3>
                <p className="text-gray-600 leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Preview */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-serif font-bold text-primary">Latest Articles</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary/5 p-8 flex items-center justify-center">
              <FileText className="w-24 h-24 text-primary/20" />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Must Read</div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Top 3 Reasons Federal Claims Are Denied
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Discover the most common pitfalls federal employees face when filing an OWCP claim. From insufficient medical rationale to missed deadlines, learn what the claims examiners are looking for and how to avoid these critical mistakes.
              </p>
              <a href="#" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
                Read Full Article <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
