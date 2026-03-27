import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-primary font-serif font-bold text-xl">
                FA
              </div>
              <span className="font-serif font-bold text-2xl text-white">
                Federal Appeals
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We help federal employees navigate the Department of Labor appeals board to secure their entitled grants and benefits.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="https://wa.me/14422842478" className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                +1 (442) 284-2478
              </a>
              <a href="mailto:jefferylawson353@gmail.com" className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                jefferylawson353@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                Nationwide Assistance
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/eligibility" className="text-gray-300 hover:text-white transition-colors">Eligibility Quiz</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-6 text-secondary">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">ECAB Appeals</li>
              <li className="text-gray-300">OWCP Denial Review</li>
              <li className="text-gray-300">Schedule Awards</li>
              <li className="text-gray-300">Reconsideration Requests</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Federal Appeals. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-800 rounded-lg text-xs text-gray-400 leading-relaxed">
            <strong>Disclaimer:</strong> This website is for informational purposes only. We are a private consultancy/firm and are not affiliated with, endorsed by, or representing the U.S. Department of Labor, OWCP, FECA, or ECAB. Prior results do not guarantee a similar outcome. Hiring a representative does not guarantee approval of a grant or appeal.
          </div>
        </div>
      </div>
    </footer>
  );
}
