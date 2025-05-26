import React, { useState, useEffect } from 'react';
import { Shield, Zap, Globe, Eye, Lock, Power, Smartphone, Fingerprint, Cpu, Menu, X, ArrowRight, Star, Check, PlayCircle, ChevronDown, ChevronRight } from 'lucide-react';

// ShadowVPN Logo Component - uses actual logo.png from public folder
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

// ALL Coin Logo Component - uses actual all-coin.png from public folder
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

function FeatureCard({ title, desc, icon: Icon, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`text-center p-6 lg:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{desc}</p>
    </div>
  );
}

function FeatureDropdowns() {
  const [openSection, setOpenSection] = useState(null);

  const featureCategories = [
    {
      id: 'security',
      title: 'Advanced Security Features',
      icon: Shield,
      features: [
        { name: 'Military-Grade Encryption', desc: 'AES-256 and ChaCha20 encryption protocols protect your data with unbreakable security.' },
        { name: 'Kill Switch Protection', desc: 'Automatically disconnects your internet if VPN connection drops, preventing data leaks.' },
        { name: 'DNS Leak Protection', desc: 'Ensures your DNS requests are routed through our secure servers, not your ISP.' },
        { name: 'Split Tunneling', desc: 'Choose which apps use the VPN while others connect directly to the internet.' }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Anonymity',
      icon: Eye,
      features: [
        { name: 'Zero-Logs Policy', desc: 'We never track, store, or share your browsing history, connection logs, or metadata.' },
        { name: 'Shadow Mode', desc: 'Disguised app interface that looks like a calculator or other innocent app.' },
        { name: 'Anonymous Sign-up', desc: 'Create accounts without personal information using cryptocurrency payments.' },
        { name: 'Multi-Hop Connections', desc: 'Route traffic through multiple servers for maximum anonymity.' }
      ]
    },
    {
      id: 'performance',
      title: 'Speed & Performance',
      icon: Zap,
      features: [
        { name: '1-Tap Connection', desc: 'Connect to the fastest server instantly with our intelligent server selection.' },
        { name: 'WireGuard Protocol', desc: 'Next-generation VPN protocol offering superior speed and security.' },
        { name: 'Global Server Network', desc: 'High-speed servers in 60+ countries for optimal performance worldwide.' },
        { name: 'Bandwidth Unlimited', desc: 'No data caps or speed throttling on any of our plans.' }
      ]
    },
    {
      id: 'convenience',
      title: 'Convenience & Control',
      icon: Smartphone,
      features: [
        { name: 'Multi-Device Support', desc: 'Protect up to 10 devices simultaneously with one account.' },
        { name: 'Biometric Lock', desc: 'Secure app access with Face ID, Touch ID, or fingerprint authentication.' },
        { name: 'Auto-Connect', desc: 'Automatically connects to VPN on untrusted networks for seamless protection.' },
        { name: 'Smart Recommendations', desc: 'AI-powered server suggestions based on your location and needs.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Features',
      icon: Cpu,
      features: [
        { name: 'Built-in Ad Blocker', desc: 'Block ads, trackers, and malicious websites at the VPN level.' },
        { name: 'Threat Protection', desc: 'Real-time malware and phishing protection for safer browsing.' },
        { name: 'Quantum-Ready Encryption', desc: 'Future-proof security protocols resistant to quantum computing attacks.' },
        { name: 'Dedicated IP Option', desc: 'Get your own private IP address for enhanced security and reliability.' }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4 text-white">Complete Feature Overview</h3>
        <p className="text-gray-400 text-lg">Explore all the powerful features that make ShadowVPN your ultimate privacy solution.</p>
      </div>

      <div className="space-y-4">
        {featureCategories.map((category) => {
          const IconComponent = category.icon;
          const isOpen = openSection === category.id;
          
          return (
            <div key={category.id} className="bg-gray-900/30 rounded-xl border border-gray-800 overflow-hidden">
              <button
                onClick={() => toggleSection(category.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                    <p className="text-gray-400 text-sm">{category.features.length} features</p>
                  </div>
                </div>
                <div className="text-gray-400 flex-shrink-0">
                  {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 border-t border-gray-800">
                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    {category.features.map((feature, index) => (
                      <div key={index}>
                        <h5 className="font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                          {feature.name}
                        </h5>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PricingCard({ plan, price, originalPrice, period, features, isPopular = false, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 ${isPopular ? 'ring-2 ring-blue-500 scale-105' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          isPopular 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
            : 'bg-white text-gray-900 hover:bg-gray-100'
        }`}>
          Get Started
        </button>
      </div>
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

      {/* Header */}
      <header className="relative z-50 w-full border-b border-gray-800/50 backdrop-blur-xl">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <ShadowLogo size="w-12 h-12" />
              <span className="text-2xl font-bold tracking-tight">ShadowVPN</span>
            </div>

            {/* Desktop Navigation - FIXED */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#features" className="text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-200 font-medium px-6 py-3 rounded-lg">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-200 font-medium px-6 py-3 rounded-lg">
                Pricing
              </a>
              <a href="#apps" className="text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-200 font-medium px-6 py-3 rounded-lg">
                Apps
              </a>
              <a href="#support" className="text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-200 font-medium px-6 py-3 rounded-lg">
                Support
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get ShadowVPN
              </button>
            </div>

            {/* Mobile menu button */}
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
                <div className="pt-4 space-y-3 border-t border-gray-800 mt-4">
                  <button className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 py-3 px-4 rounded-lg transition-colors">
                    Sign In
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300">
                    Get ShadowVPN
                  </button>
                </div>
              </div>
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

      {/* Features Section */}
      <section id="features" className="relative z-10 w-full py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ShadowVPN</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect balance of security, speed, and simplicity with our cutting-edge VPN technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
            <FeatureCard 
              title="Unbreakable Security" 
              desc="AES-256 military-grade encryption ensures your data stays protected from any threat, anywhere in the world."
              icon={Lock}
              delay={200}
            />
            <FeatureCard 
              title="Lightning Speed" 
              desc="Our optimized servers deliver blazing-fast connections without compromising your privacy or security."
              icon={Zap}
              delay={400}
            />
            <FeatureCard 
              title="True Privacy" 
              desc="Strict no-logs policy means we never track, store, or share your online activities. Ever."
              icon={Eye}
              delay={600}
            />
          </div>

          <FeatureDropdowns />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 w-full py-32 bg-gray-900/20">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">plan</span>
            </h2>
            <p className="text-xl text-gray-400">
              All plans include our premium features with a 30-day money-back guarantee.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                plan="1 Month"
                price="12.99"
                period="month"
                features={[
                  "Connect up to 6 devices",
                  "60+ server locations",
                  "24/7 customer support",
                  "Kill switch protection",
                  "No activity logs"
                ]}
                delay={200}
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
                isPopular={true}
                delay={400}
              />
              <PricingCard
                plan="2 Years"
                price="3.99"
                originalPrice="12.99"
                period="month"
                features={[
                  "Connect up to 6 devices",
                  "60+ server locations",
                  "24/7 VIP support",
                  "Advanced kill switch",
                  "No activity logs",
                  "Threat protection",
                  "Save 69%"
                ]}
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Section */}
      <section className="relative z-10 w-full py-32">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 rounded-3xl p-16 border border-gray-800">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Powered by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blockchain</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                ShadowVPN is integrating with the <strong className="text-cyan-400">ALL Ecosystem</strong> to bring you decentralized identity, smart contracts, and cryptocurrency payments for the ultimate privacy experience.
              </p>
              <div className="inline-flex items-center gap-3 bg-cyan-500/10 text-cyan-400 px-6 py-3 rounded-full border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Coming Q4 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-gray-800 bg-gray-950/50 py-16">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <ShadowLogo size="w-8 h-8" />
                <span className="text-xl font-bold">ShadowVPN</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your privacy, our mission. Browse the web without leaving a trace.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Features</a>
                <a href="#" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors">Apps</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block hover:text-white transition-colors">Status</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 ShadowVPN. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <ALLLogo size="w-6 h-6" />
              <span className="text-cyan-400 font-semibold">Powered by ALL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}