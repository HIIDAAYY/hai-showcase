import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import DemoChat from './components/DemoChat';
import Features from './components/Features';
import UseCases from './components/UseCases';
import ImpactStats from './components/ImpactStats';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-yellow-200">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 font-black text-2xl text-gray-900 tracking-tight">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-gray-900 text-lg shadow-sm transform -rotate-3">H</div>
              HAI
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
              <a href="#features" className="hover:text-yellow-600 transition-colors">Features</a>
              <a href="#use-cases" className="hover:text-yellow-600 transition-colors">Use Cases</a>
              <a href="#impact" className="hover:text-yellow-600 transition-colors">Impact</a>
              <a href="#demo" className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                Try Live Demo
              </a>
            </div>

            <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col items-center gap-4 animate-fade-in-down">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Features</a>
            <a href="#use-cases" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Use Cases</a>
            <a href="#impact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Impact</a>
            <a href="#demo" onClick={() => setIsMenuOpen(false)} className="text-yellow-600 font-bold">Try Live Demo</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-yellow-50">
        {/* Background blobs to simulate the yellow/orange vibe */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-yellow-300/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-bold mb-6 border border-gray-100 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              Now powered by Gemini 2.5 Flash
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-none">
              Say <span className="text-yellow-500 inline-block transform hover:rotate-6 transition-transform cursor-default">HAI</span> to<br/>
              Better Support
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
              Your new friendly AI assistant. Handle thousands of inquiries instantly, 24/7. Friendly, smart, and always ready to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#demo" className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-200 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                Start Free Trial <ArrowRight size={20} />
              </a>
              <a href="#features" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-yellow-400 transition-all flex items-center justify-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Features />

      {/* Demo Section (The Core) */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[3rem] p-6 md:p-16 text-white relative overflow-hidden shadow-2xl">
             {/* Abstract tech pattern overlay */}
             <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Try HAI Live</h2>
                    <p className="text-gray-400 text-lg">
                        Meet your new best friend in customer support. <br/>
                        Configured for <span className="text-yellow-400 font-bold">Lumina Aesthetic Clinic</span>.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-5 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-colors">
                      <h4 className="font-bold text-yellow-400 mb-1 text-sm uppercase tracking-wider">Product Knowledge</h4>
                      <p className="text-gray-300 font-medium">"What facial treatments do you have?"</p>
                    </div>
                    <div className="p-5 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-colors">
                       <h4 className="font-bold text-yellow-400 mb-1 text-sm uppercase tracking-wider">Real-Time Data</h4>
                       <p className="text-gray-300 font-medium">"Where is my order #ORD123?"</p>
                    </div>
                    <div className="p-5 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-colors">
                       <h4 className="font-bold text-yellow-400 mb-1 text-sm uppercase tracking-wider">Empathy Engine</h4>
                       <p className="text-gray-300 font-medium">"I am very angry with your service!"</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <DemoChat />
                </div>
             </div>
          </div>
        </div>
      </section>

      <UseCases />
      <div id="impact">
        <ImpactStats />
      </div>
      
      <section className="py-24 bg-yellow-400 text-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to HAI?</h2>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">Join 500+ businesses automating their support with the friendliest AI on the market.</p>
          <button className="px-12 py-5 bg-gray-900 text-white rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all shadow-xl">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;