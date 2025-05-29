import React from 'react';
import { Shield, Eye, Zap, Smartphone, Cpu, Lock, Globe, Server, Wifi, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

export default function FeaturesPage() {
  const featureCategories = [
    {
      title: "Security & Privacy",
      icon: Shield,
      color: "blue",
      features: [
        {
          name: "Military-Grade Encryption",
          description: "AES-256 encryption protects your data with the same standard used by governments and militaries worldwide.",
          icon: Lock
        },
        {
          name: "No-Logs Policy",
          description: "We never track, store, or share your online activity. Your privacy is guaranteed by our strict no-logs policy.",
          icon: Eye
        },
        {
          name: "Kill Switch Protection",
          description: "Automatically blocks internet traffic if VPN connection drops, ensuring your data never leaks.",
          icon: Shield
        },
        {
          name: "DNS Leak Protection",
          description: "Prevents DNS requests from bypassing the VPN tunnel, keeping your browsing truly private.",
          icon: Globe
        }
      ]
    },
    {
      title: "Performance & Speed",
      icon: Zap,
      color: "purple",
      features: [
        {
          name: "Lightning-Fast Servers",
          description: "Optimized servers across 60+ countries deliver blazing speeds without compromising security.",
          icon: Server
        },
        {
          name: "Unlimited Bandwidth",
          description: "Stream, download, and browse without limits. No throttling, no restrictions.",
          icon: Wifi
        },
        {
          name: "Smart Routing",
          description: "Intelligent server selection automatically connects you to the fastest available server.",
          icon: Zap
        },
        {
          name: "Multi-Protocol Support",
          description: "Choose from OpenVPN, IKEv2, and WireGuard protocols for optimal performance.",
          icon: Cpu
        }
      ]
    },
    {
      title: "Apps & Compatibility",
      icon: Smartphone,
      color: "green",
      features: [
        {
          name: "Cross-Platform Apps",
          description: "Native apps for Windows, Mac, iOS, Android, Linux, and browser extensions.",
          icon: Smartphone
        },
        {
          name: "6 Simultaneous Connections",
          description: "Protect all your devices with a single ShadowVPN account.",
          icon: Wifi
        },
        {
          name: "One-Click Connect",
          description: "Simple, intuitive interface makes connecting to VPN as easy as one click.",
          icon: CheckCircle
        },
        {
          name: "Router Support",
          description: "Configure ShadowVPN on your router to protect every device on your network.",
          icon: Globe
        }
      ]
    },
    {
      title: "Advanced Features",
      icon: Cpu,
      color: "cyan",
      features: [
        {
          name: "Split Tunneling",
          description: "Choose which apps use the VPN while others connect directly to the internet.",
          icon: Cpu
        },
        {
          name: "Ad & Malware Blocker",
          description: "Built-in protection against ads, trackers, and malicious websites.",
          icon: Shield
        },
        {
          name: "Stealth Mode",
          description: "Bypass VPN blocks and censorship with advanced obfuscation technology.",
          icon: Eye
        },
        {
          name: "Auto-Connect",
          description: "Automatically connect to VPN when joining unsecured Wi-Fi networks.",
          icon: Wifi
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-600 text-blue-400 border-blue-500",
      purple: "bg-purple-600 text-purple-400 border-purple-500",
      green: "bg-green-600 text-green-400 border-green-500",
      cyan: "bg-cyan-600 text-cyan-400 border-cyan-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Advanced{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              VPN Features
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the cutting-edge technology that makes ShadowVPN the ultimate privacy solution for modern digital life.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {featureCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.split(' ')[0]} rounded-2xl mb-4`}>
                    <CategoryIcon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon;
                    
                    return (
                      <div key={featureIndex} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${colorClasses.split(' ')[0]}/20 border ${colorClasses.split(' ')[2]}/30`}>
                            <FeatureIcon className={colorClasses.split(' ')[1]} size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ultimate Privacy?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of users who trust ShadowVPN to protect their digital freedom.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get ShadowVPN Free
          </button>
        </div>
      </section>
    </Layout>
  );
}