/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Eligibility } from "./pages/Eligibility";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
        <ExitIntentPopup />
      </div>
    </Router>
  );
}
