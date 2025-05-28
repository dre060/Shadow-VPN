import React, { useState, useEffect } from 'react';
import { Shield, Zap, Globe, Eye, Lock, Smartphone, Fingerprint, Cpu, Menu, X, ArrowRight, Star, Check, PlayCircle, ChevronDown, ChevronRight } from 'lucide-react';

// Logo Components
function ShadowLogo({ size = "w-8 h-8" }) {
  return (
    <div className={`${size} flex items-center justify-center flex-shrink-0`}>
      <img 
        src="/logo.png" 
        alt="ShadowVPN Logo" 
        className={`${size} object-contain drop-shadow-lg`}
      />
    </div>
  );
}

function ALLLogo({ size = "w-4 h-4" }) {
  return (
    <div className={`${size} flex items-center justify-center flex-shrink-0`}>
      <img 
        src="/all-coin.png" 
        alt="ALL Coin Logo" 
        className={`${size} object-contain drop-shadow-lg`}
      />
    </div>
  );
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-purple-950/20"></div>

      {/* Header with CSS Class Navigation */}
      <header className="relative z-50 w-full border-b border-gray-800/50 backdrop-blur-xl">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <ShadowLogo size="w-12 h-12" />
              <span className="text-2xl font-bold tracking-tight">ShadowVPN</span>
            </div>

            {/* Navigation using CSS classes */}
            <nav className="hidden lg:block">
              <ul className="navigation-fix">
                <li>
                  <a href="#features" className="nav-item">Features</a>
                </li>
                <li>
                  <a href="#pricing" className="nav-item">Pricing</a>
                </li>
                <li>
                  <a href="#apps" className="nav-item">Apps</a>
                </li>
                <li>
                  <a href="#support" className="nav-item">Support</a>
                </li>
              </ul>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get ShadowVPN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white p-3 hover:bg-gray-800/30 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl rounded-b-2xl">
              <nav>
                <div className="space-y-2">
                  <a href="#features" className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors py-3 px-4 rounded-lg">
                    Features
                  </a>
                  <a href="#pricing" className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors py-3 px-4 rounded-lg">
                    Pricing
                  </a>
                  <a href="#apps" className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors py-3 px-4 rounded-lg">
                    Apps
                  </a>
                  <a href="#support" className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors py-3 px-4 rounded-lg">
                    Support
                  </a>
                </div>
                <div className="pt-4 space-y-3 border-t border-gray-800 mt-4">
                  <button className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg transition-colors">
                    Sign In
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300">
                    Get ShadowVPN
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full py-20 lg:py-28">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
                Browse. Vanish.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Repeat.
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-4xl mx-auto px-4">
                Military-grade privacy meets lightning-fast speed. Your digital freedom starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 hover:scale-105">
                  Get ShadowVPN Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors px-8 py-4 rounded-xl border border-gray-600 hover:border-gray-400 hover:bg-gray-800/30">
                  <PlayCircle className="w-6 h-6" />
                  <span className="font-medium text-lg">Watch Demo</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-gray-500 px-4">
                <div className="flex items-center gap-3 bg-gray-900/30 px-4 py-3 rounded-full border border-gray-800">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">Military-grade encryption</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/30 px-4 py-3 rounded-full border border-gray-800">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">60+ countries</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/30 px-4 py-3 rounded-full border border-gray-800">
                  <Eye className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Zero logs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple test section to confirm layout works */}
      <section className="relative z-10 w-full py-20 text-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Navigation Test
          </h2>
          <p className="text-xl text-gray-400">
            If you can see "Features | Pricing | Apps | Support" properly spaced in the header above, the navigation is working!
          </p>
        </div>
      </section>
    </div>
  );
}