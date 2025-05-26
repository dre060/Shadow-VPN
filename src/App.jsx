import React, { useState, useEffect } from 'react';
import {
  Shield, Zap, Globe, Eye, Lock, Power, Smartphone, Fingerprint, Cpu,
  Menu, X, ArrowRight, Star, Check, PlayCircle, ChevronDown, ChevronRight
} from 'lucide-react';

function ShadowLogo({ size = "w-8 h-8" }) {
  return (
    <div className={`${size} flex items-center justify-center`}>
      <img src="/logo.png" alt="ShadowVPN Logo" className={`${size} object-contain`} />
    </div>
  );
}

function ALLLogo({ size = "w-4 h-4" }) {
  return (
    <div className={`${size} flex items-center justify-center`}>
      <img src="/all-coin.png" alt="ALL Coin Logo" className={`${size} object-contain`} />
    </div>
  );
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-purple-950/20"></div>

      {/* Hero Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          Browse. Vanish. <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Repeat.</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Military-grade privacy meets lightning-fast speed. Your digital freedom starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700">
            Get ShadowVPN Free
          </button>
          <button className="text-gray-300 hover:text-white flex items-center gap-2">
            <PlayCircle className="w-5 h-5" /> Watch Demo
          </button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 px-4 bg-gray-900/20 border-t border-gray-800 relative z-10">
        <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-400 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-400" /> 256-bit Encryption
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-purple-400" /> 60+ Countries
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-green-400" /> Zero Logs
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-950/50 border-t border-gray-800 text-center text-sm text-gray-500 relative z-10">
        <div className="flex justify-center items-center gap-2">
          <ALLLogo size="w-5 h-5" /> <span>Powered by ALL</span>
        </div>
        <p className="mt-2">&copy; 2025 ShadowVPN. All rights reserved.</p>
      </footer>
    </div>
  );
}
