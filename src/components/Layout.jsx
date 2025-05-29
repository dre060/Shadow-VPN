import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

// Logo Components
function ShadowVPNLogo({ className = "", animated = false }) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <img 
          src="/logo.png" 
          alt="ShadowVPN Logo" 
          className={`w-8 h-8 object-contain ${animated ? 'animate-pulse' : ''}`}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <Shield className="w-8 h-8 text-blue-500 hidden" fill="currentColor" />
        {animated && (
          <div className="absolute inset-0 w-8 h-8 bg-blue-500 opacity-20 blur-md animate-ping"></div>
        )}
      </div>
      <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        ShadowVPN
      </span>
    </Link>
  );
}

// Vanishing Animation Component
function VanishingLogo({ src, alt, className }) {
  return (
    <img 
      src={src}
      alt={alt}
      className={`${className} animate-vanish logo-glow`}
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  );
}

// Main Layout Component - MUST be default export
function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <ShadowVPNLogo animated={true} />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-white hover:text-blue-400 transition-colors font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-white hover:text-blue-400 transition-colors font-medium">
                Pricing
              </Link>
              <Link to="/apps" className="text-white hover:text-blue-400 transition-colors font-medium">
                Apps
              </Link>
              <Link to="/help-center" className="text-white hover:text-blue-400 transition-colors font-medium">
                Support
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-blue-400 transition-colors font-medium">
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
                Get ShadowVPN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/features" className="text-white hover:text-blue-400 transition-colors">Features</Link>
                <Link to="/pricing" className="text-white hover:text-blue-400 transition-colors">Pricing</Link>
                <Link to="/apps" className="text-white hover:text-blue-400 transition-colors">Apps</Link>
                <Link to="/help-center" className="text-white hover:text-blue-400 transition-colors">Support</Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                  <button className="text-left text-white hover:text-blue-400 transition-colors">Sign In</button>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-left transition-colors">
                    Get ShadowVPN
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* ALL Ecosystem Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ALL Ecosystem
            </span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <VanishingLogo 
              src="/all-coin.png"
              alt="ALL Ecosystem Logo"
              className="w-16 h-16 mr-4"
            />
            <div className="text-left">
              <p className="text-2xl font-bold text-cyan-400">ALL Ecosystem</p>
              <p className="text-gray-400">Decentralized Privacy Network</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ShadowVPN is integrating with the{' '}
            <span className="text-cyan-400 font-semibold">ALL Ecosystem</span>{' '}
            to bring you decentralized identity, smart contracts, and cryptocurrency payments for the ultimate privacy experience.
          </p>
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-medium">Coming Q4 2025</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <ShadowVPNLogo className="mb-4" />
              <p className="text-gray-400">
                Your ultimate privacy companion for secure browsing and digital freedom.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/apps" className="hover:text-white transition-colors">Apps</Link></li>
                <li><Link to="/business" className="hover:text-white transition-colors">Business</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/setup-guides" className="hover:text-white transition-colors">Setup Guides</Link></li>
                <li><Link to="/status" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ShadowVPN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// CRITICAL: Default export must be at the end
export default Layout;