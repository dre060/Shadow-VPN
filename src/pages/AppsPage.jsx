import React from 'react';import { Smartphone, Monitor, Router, Chrome, Download, Shield, Zap, Globe } from 'lucide-react';
import Layout from '../components/Layout';

export default function AppsPage() {
  const apps = [
    {
      name: "Windows",
      icon: Monitor,
      version: "v2.4.1",
      size: "45 MB",
      description: "Full-featured VPN client for Windows 10/11 with advanced security options.",
      features: ["Kill switch", "Split tunneling", "Auto-connect", "Protocol selection"],
      downloadUrl: "#"
    },
    {
      name: "macOS",
      icon: Monitor,
      version: "v2.4.1",
      size: "38 MB", 
      description: "Native macOS app with seamless integration and optimized performance.",
      features: ["Menu bar widget", "Quick connect", "Network protection", "Auto-start"],
      downloadUrl: "#"
    },
    {
      name: "iOS",
      icon: Smartphone,
      version: "v2.3.8",
      size: "22 MB",
      description: "Secure VPN for iPhone and iPad with one-tap connection.",
      features: ["Widget support", "Siri shortcuts", "Background protection", "Touch ID"],
      downloadUrl: "#"
    },
    {
      name: "Android",
      icon: Smartphone,
      version: "v2.3.9",
      size: "18 MB",
      description: "Fast and secure VPN app for Android devices.",
      features: ["Always-on VPN", "Split tunneling", "Wi-Fi protection", "Quick tiles"],
      downloadUrl: "#"
    },
    {
      name: "Linux",
      icon: Monitor,
      version: "v2.1.5",
      size: "25 MB",
      description: "Command-line and GUI clients for major Linux distributions.",
      features: ["Multiple distros", "CLI interface", "GUI available", "Open source"],
      downloadUrl: "#"
    },
    {
      name: "Router",
      icon: Router,
      version: "Setup Guide",
      size: "Manual",
      description: "Configure ShadowVPN on your router to protect all devices.",
      features: ["DD-WRT support", "OpenWrt support", "ASUS routers", "Netgear routers"],
      downloadUrl: "#"
    }
  ];

  const browserExtensions = [
    {
      name: "Chrome Extension",
      icon: Chrome,
      users: "2M+ users",
      rating: "4.8/5",
      description: "Lightweight browser extension for secure browsing.",
      downloadUrl: "#"
    },
    {
      name: "Firefox Extension", 
      icon: Browser, // Using Browser instead of Firefox
      users: "800K+ users",
      rating: "4.7/5",
      description: "Privacy-focused extension for Firefox users.",
      downloadUrl: "#"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "All apps use AES-256 encryption and advanced security protocols."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with minimal impact on your connection."
    },
    {
      icon: Globe,
      title: "Global Network", 
      description: "Access to 60+ server locations worldwide from any device."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Download{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ShadowVPN
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get ShadowVPN on all your devices. One account protects up to 6 devices simultaneously.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-600/30">
              <Shield size={16} className="inline mr-2" />
              Secure
            </span>
            <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full border border-green-600/30">
              <Zap size={16} className="inline mr-2" />
              Fast
            </span>
            <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full border border-purple-600/30">
              <Globe size={16} className="inline mr-2" />
              Global
            </span>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Native Apps</h2>
            <p className="text-gray-300">Download ShadowVPN for your platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => {
              const AppIcon = app.icon;
              
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <AppIcon className="text-blue-400" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{app.name}</h3>
                      <p className="text-gray-400 text-sm">{app.version} • {app.size}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{app.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browser Extensions */}  
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browser Extensions</h2>
            <p className="text-gray-300">Lightweight VPN protection for your browser</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {browserExtensions.map((extension, index) => {
              const ExtIcon = extension.icon;
              
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <ExtIcon className="text-blue-400" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{extension.name}</h3>
                      <p className="text-gray-400 text-sm">{extension.users} • {extension.rating}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{extension.description}</p>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Add to Browser
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Apps?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <FeatureIcon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">System Requirements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold mb-3">Windows</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Windows 10 or later</li>
                <li>• 50 MB free space</li>
                <li>• Internet connection</li>
                <li>• Administrator privileges</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold mb-3">macOS</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• macOS 10.14 or later</li>
                <li>• 40 MB free space</li>
                <li>• Internet connection</li>
                <li>• Admin password</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold mb-3">Mobile</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• iOS 12.0+ / Android 6.0+</li>
                <li>• 25 MB free space</li>
                <li>• Internet connection</li>
                <li>• VPN permission</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Freedom
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download ShadowVPN today and experience the internet without limits.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get Started Free
          </button>
        </div>
      </section>
    </Layout>
  );
}