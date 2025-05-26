import React, { useState, useEffect } from 'react';
import {
  Shield, Zap, Globe, Eye, Lock, Smartphone, Cpu,
  Menu, X, ArrowRight, Star, Check, PlayCircle, ChevronDown, ChevronRight
} from 'lucide-react';

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
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-purple-950/20"></div>

      {/* Header */}
      <header className="relative z-50 w-full border-b border-gray-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ShadowLogo size="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight">ShadowVPN</span>
          </div>

          <nav className="hidden lg:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#support" className="text-gray-300 hover:text-white transition">Support</a>
          </nav>

          <div className="hidden lg:flex space-x-4">
            <button className="text-gray-300 hover:text-white transition">Sign In</button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg text-white font-semibold shadow-md hover:shadow-xl transition">Get ShadowVPN</button>
          </div>

          <button className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${isVisible ? 'animate-fade-in' : ''}`}>Browse. Vanish.<br /><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Repeat.</span></h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Military-grade privacy meets lightning-fast speed. Your digital freedom starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition flex items-center gap-2">
              Get ShadowVPN Free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white border border-gray-600 px-5 py-3 rounded-xl hover:bg-gray-800/30 transition">
              <PlayCircle className="w-5 h-5" /> Watch Demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Military-grade encryption
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" /> 60+ Countries
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-400" /> Zero Logs
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">plan</span>
            </h2>
            <p className="text-xl text-gray-400">
              All plans include our premium features with a 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-gray-800 bg-gray-950/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 text-gray-400 mb-4 md:mb-0">
            <ALLLogo size="w-6 h-6" />
            <span className="text-cyan-400 font-semibold">Powered by ALL</span>
          </div>
          <p className="text-sm text-gray-500">&copy; 2025 ShadowVPN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
