import React from 'react';
import { Shield, Users, Globe, Award, Target, Heart, Zap, Lock, Quote } from 'lucide-react';
import Layout from '../components/Layout';

export default function AboutPage() {
  const stats = [
    { number: "1M+", label: "Users Protected", icon: Users },
    { number: "60+", label: "Server Locations", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: Zap },
    { number: "0", label: "Logs Stored", icon: Lock }
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Privacy isn't a luxury—it's a fundamental right. Every decision we make prioritizes your digital freedom and security."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Built for real people with real privacy needs. Simple, powerful, and accessible to everyone."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Combining industry-leading WireGuard encryption with next-generation blockchain technology for the future of privacy."
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Complete transparency about our practices, policies, and the cutting-edge technology that protects you."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Vision",
      description: "ShadowVPN was conceived as a response to growing digital surveillance and privacy violations."
    },
    {
      year: "2024",
      title: "Development Begins",
      description: "Building the foundation with WireGuard encryption and zero-log architecture."
    },
    {
      year: "2024",
      title: "ALL Ecosystem Partnership",
      description: "Strategic partnership announced for blockchain-based identity integration."
    },
    {
      year: "2025",
      title: "Public Launch",
      description: "ShadowVPN launches with military-grade encryption and global server network."
    },
    {
      year: "2025",
      title: "Blockchain Integration",
      description: "Full integration with ALL Ecosystem for decentralized privacy solutions."
    },
    {
      year: "Future",
      title: "Digital Sovereignty",
      description: "Pioneering the future where users have complete control over their digital identity."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ShadowVPN
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            <strong>ShadowVPN</strong> was founded with a single mission: to protect your digital life without compromise. 
            In an era where privacy is constantly under threat, ShadowVPN offers a powerful, secure, and easy-to-use 
            solution that shields your identity, hides your location, and unlocks global access — all while maintaining 
            the speed and freedom you deserve.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600/20 p-3 rounded-lg w-fit mx-auto mb-4">
                    <StatIcon className="text-blue-400" size={32} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300">
              <strong>Browse. Vanish. Repeat.</strong>
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Unlike traditional VPNs, ShadowVPN is built for the next generation of internet users. We combine 
              industry-leading <strong>WireGuard encryption</strong> with a sleek, intuitive interface and 
              future-ready features like blockchain-based identity integration, decentralized access nodes, 
              and advanced zero-log infrastructure.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're a digital nomad, a security-conscious user, or just someone who values their privacy, 
              ShadowVPN is your silent shield in a noisy world.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-blue-400">Military-grade encryption</strong> via WireGuard
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-green-400">Blazing fast connections</strong> worldwide
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-purple-400">Bypass censorship</strong> and access content globally
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-cyan-400">Zero-log policy</strong> — we don't collect or store your data
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-yellow-400">Cross-platform access</strong> — Android, iOS, Windows, macOS
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-pink-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-pink-400">Blockchain-ready architecture</strong> for next-gen privacy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Founder</h2>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Andre Lennox Lewis"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-blue-500/30"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-600/20 border-4 border-blue-500/30 hidden items-center justify-center">
                  <Users className="text-blue-400" size={48} />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Andre Lennox Lewis</h3>
                <p className="text-blue-400 font-medium mb-6">Founder & CEO, ShadowVPN</p>
                
                <div className="relative">
                  <Quote className="text-blue-400/30 absolute -top-4 -left-4" size={32} />
                  <blockquote className="text-lg text-gray-300 leading-relaxed italic pl-6">
                    "In a world where every click is tracked and every connection leaves a footprint, 
                    I built ShadowVPN as a digital sanctuary — a place where privacy is more than a promise; 
                    it's a principle."
                  </blockquote>
                  <br />
                  <blockquote className="text-lg text-gray-300 leading-relaxed italic pl-6">
                    "Our mission is to make online freedom accessible, secure, and future-proof. 
                    Whether you're working, traveling, or simply browsing, ShadowVPN is here to ensure 
                    your digital presence remains yours alone."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg">
                      <ValueIcon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Glimpse of the Future</h2>
          </div>

          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20">
            <p className="text-lg text-gray-300 leading-relaxed">
              As part of the <strong className="text-cyan-400">ALL Ecosystem</strong>, ShadowVPN will soon integrate 
              with decentralized identity (ALL-ID), crypto-enabled subscriptions, and smart access controls. 
              This means more than just security — it means <strong>sovereignty over your digital self</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-300">Building the future of digital privacy</p>
          </div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    {event.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-700 mx-auto mt-4"></div>
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-400 font-bold">{event.year}</span>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Privacy Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the movement toward a more private and secure internet.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get ShadowVPN Today
          </button>
        </div>
      </section>
    </Layout>
  );
}