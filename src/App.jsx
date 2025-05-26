import React, { useState, useEffect } from 'react';
import {
  Shield, Zap, Globe, Eye, Lock, Smartphone, Cpu,
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

function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <div className="text-center p-6">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
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
      <header className="border-b border-gray-800/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <ShadowLogo size="w-10 h-10" />
            <span className="text-xl font-bold">ShadowVPN</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-sm text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white">Pricing</a>
            <a href="#support" className="text-sm text-gray-300 hover:text-white">Support</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="text-sm text-gray-300 hover:text-white">Sign In</button>
            <button className="text-sm px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-purple-700">Get ShadowVPN</button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
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

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ShadowVPN</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the perfect balance of security, speed, and simplicity with our cutting-edge VPN technology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Unbreakable Security" icon={Lock} desc="AES-256 military-grade encryption ensures your data stays protected from any threat, anywhere in the world." />
          <FeatureCard title="Lightning Speed" icon={Zap} desc="Our optimized servers deliver blazing-fast connections without compromising your privacy or security." />
          <FeatureCard title="True Privacy" icon={Eye} desc="Strict no-logs policy means we never track, store, or share your online activities. Ever." />
        </div>
      </section>

      <section className="py-10 bg-gray-900/20 border-t border-gray-800">
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

      <footer className="py-12 px-4 bg-gray-950/50 border-t border-gray-800 text-center text-sm text-gray-500">
        <div className="flex justify-center items-center gap-2">
          <ALLLogo size="w-5 h-5" /> <span>Powered by ALL</span>
        </div>
        <p className="mt-2">&copy; 2025 ShadowVPN. All rights reserved.</p>
      </footer>
    </div>
  );
}
