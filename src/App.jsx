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

function PricingCard({ plan, price, originalPrice, period, features, isPopular = false }) {
  return (
    <div className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 ${isPopular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-white">{plan}</h3>
        <div className="mb-6">
          {originalPrice && (
            <div className="text-gray-400 line-through text-lg mb-2">${originalPrice}/{period}</div>
          )}
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-gray-400">/{period}</span>
          </div>
        </div>
        <div className="space-y-3 mb-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
          isPopular ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' : 'bg-white text-gray-900 hover:bg-gray-100'
        }`}>
          Get Started
        </button>
      </div>
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
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-purple-950/20"></div>

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
          <button className="lg:hidden text-gray-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

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

      <section id="pricing" className="relative z-10 py-32 bg-gray-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">plan</span></h2>
            <p className="text-xl text-gray-400">All plans include our premium features with a 30-day money-back guarantee.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              plan="1 Month"
              price="12.99"
              period="month"
              features={[
                "Connect up to 6 devices",
                "60+ server locations",
                "24/7 support",
                "Kill switch",
                "No activity logs"
              ]}
            />
            <PricingCard
              plan="1 Year"
              price="4.99"
              originalPrice="12.99"
              period="month"
              features={[
                "Connect up to 6 devices",
                "60+ server locations",
                "24/7 priority support",
                "Advanced kill switch",
                "No activity logs",
                "Threat protection",
                "Save 62%"
              ]}
              isPopular
            />
            <PricingCard
              plan="2 Years"
              price="3.99"
              originalPrice="12.99"
              period="month"
              features={[
                "Connect up to 6 devices",
                "60+ server locations",
                "VIP support",
                "Advanced kill switch",
                "No activity logs",
                "Threat protection",
                "Save 69%"
              ]}
            />
          </div>
        </div>
      </section>

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
