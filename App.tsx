
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ServicesOverview from './pages/services/ServicesOverview';
import ServiceDetail from './pages/services/ServiceDetail';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-[#E91E63]/10 selection:text-[#E91E63]">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Portfolio routes */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/projects" element={<Portfolio />} />
            <Route path="/portfolio/case-studies" element={<Portfolio />} />
            
            <Route path="/contact" element={<Contact />} />
            
            {/* Services routes */}
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
