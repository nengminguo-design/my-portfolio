/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import KnowledgeBase from './pages/KnowledgeBase';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background-light text-slate-900 font-display">
        <Header />
        <main className="flex-1 flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/knowledge" element={<KnowledgeBase />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
