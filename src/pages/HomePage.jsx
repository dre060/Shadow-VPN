import React, { useState } from 'react';
import { Shield, Zap, Globe, Eye, Lock, Smartphone, Cpu, ArrowRight, Check, PlayCircle, ChevronDown, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

export default function HomePage() {
  const [openFeature, setOpenFeature] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Advanced Security Features",
      count: "4 features",
      items: ["Military-grade AES-256 encryption", "Multi-hop VPN connections", "DNS leak protection", "Automatic kill switch"]
    },
    {
      icon: Eye,
      title: "Privacy & Anonymity", 
      count: "3 features",
      items: ["No-logs policy", "Anonymous browsing", "IP masking"]
    },
    {
      icon: Zap,
      title: "Speed & Performance",
      count: "4 features", 
      items: ["Lightning-fast connections", "Unlimited bandwidth", "Optimized servers", "Smart routing"]
    },
    {
      icon: Smartphone,
      title: "Convenience & Control",
      count: "4 features",
      items: ["Cross-platform apps", "One-click connect", "Auto-connect", "Custom settings"]
    },
    {
      icon: Cpu,
      title: "Advanced Features",
      count: "4 features",
      items: ["Split tunneling", "Ad blocker", "Malware protection", "Stealth mode"]
    }
  ];

  const pricingPlans = [
    {
      name: "1 Month",
      price: "$12.99",
      originalPrice: null,
      period: "/month",
      popular: false,
      features: [
        "Connect up to 6 devices",
        "60+ server locations", 
        "24/7 customer support",
        "Kill switch protection",
        "No activity logs"
      ]
    },
    {
      name: "1 Year", 
      price: "$4.99",
      originalPrice: "$12.99",
      period: "/month",
      popular: true,
      features: [
        "Connect up to 6 devices",
        "60+ server locations",
        "24/7 priority support", 
        "Advanced kill switch",
        "No activity logs",
        "Threat protection",
        "Save 62%"
      ]
    },
    {
      name: "2 Years",
      price: "$3.99", 
      originalPrice: "$12.99",
      period: "/month",
      popular: false,
      features: [
        "Connect up to 6 devices",
        "60+ server locations",
        "24/7 VIP support",
        "Advanced kill switch", 
        "No activity logs",
        "Threat protection",
        "Save 69%"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Browse. Vanish.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Repeat.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Military-grade privacy meets lightning-fast speed. Your digital freedom starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all">
              Get ShadowVPN Free <ArrowRight size={20} />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all">
              <PlayCircle size={20} /> Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Lock className="text-blue-400" size={24} />
              <span className="text-gray-300">Military-grade encryption</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Globe className="text-green-400" size={24} />
              <span className="text-gray-300">60+ countries</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Eye className="text-purple-400" size={24} />
              <span className="text-gray-300">Zero logs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why choose{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                ShadowVPN?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect balance of security, speed, and simplicity with our cutting-edge VPN technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unbreakable Security</h3>
              <p className="text-gray-300">
                AES-256 military-grade encryption protects your data from hackers, ISPs, and government surveillance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Speed</h3>
              <p className="text-gray-300">
                Our optimized servers deliver blazing-fast connections without compromising your security or privacy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">True Privacy</h3>
              <p className="text-gray-300">
                Strict no-logs policy means we never track, store, or share your online activity. Your privacy is guaranteed.
              </p>
            </div>
          </div>

          {/* Feature Expandables */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Explore all the powerful features that make ShadowVPN your ultimate privacy solution.
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isOpen = openFeature === index;
                
                return (
                  <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFeature(isOpen ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="text-blue-400" size={24} />
                        <div className="text-left">
                          <h4 className="font-semibold text-lg">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.count}</p>
                        </div>
                      </div>
                      {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4 border-t border-gray-700 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {feature.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2">
                              <Check className="text-green-400 flex-shrink-0" size={16} />
                              <span className="text-gray-300">{item}</span>
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
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                plan
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              All plans include all features with a 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500' 
                    : 'bg-gray-800 border border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <span className="text-gray-400 line-through text-lg">
                        {plan.originalPrice}/month
                      </span>
                    )}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="text-green-400 flex-shrink-0" size={16} />
                      <span className={feature.includes('Save') ? 'text-green-400 font-medium' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}