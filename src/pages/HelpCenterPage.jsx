import React, { useState } from 'react';
import { Search, Book, Smartphone, Monitor, Shield, Zap, Globe, ChevronRight, MessageCircle, Mail } from 'lucide-react';
import Layout from '../components/Layout';

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: Smartphone,
      title: "Getting Started",
      description: "Setup guides and first steps",
      articles: [
        "How to create your ShadowVPN account",
        "Downloading and installing apps",
        "Connecting to your first server",
        "Understanding VPN basics"
      ]
    },
    {
      icon: Monitor,
      title: "App Guides",
      description: "Platform-specific instructions",
      articles: [
        "Windows app setup and features",
        "macOS installation guide",
        "iOS app configuration",
        "Android app tutorial",
        "Linux setup instructions"
      ]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Advanced security features",
      articles: [
        "Understanding our no-logs policy",
        "Kill switch protection",
        "DNS leak protection",
        "Split tunneling setup",
        "Advanced encryption options"
      ]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Speed optimization tips",
      articles: [
        "Choosing the fastest server",
        "Protocol selection guide",
        "Troubleshooting slow speeds",
        "Optimizing for streaming",
        "Gaming with VPN"
      ]
    },
    {
      icon: Globe,
      title: "Server Locations",
      description: "Global server network",
      articles: [
        "Available server locations",
        "Specialized servers",
        "Server load information",
        "Connecting to specific countries",
        "P2P-optimized servers"
      ]
    },
    {
      icon: Book,
      title: "Account & Billing",
      description: "Subscription management",
      articles: [
        "Managing your subscription",
        "Payment methods",
        "Refund policy",
        "Account settings",
        "Family sharing options"
      ]
    }
  ];

  const popularArticles = [
    "How to set up ShadowVPN on Windows",
    "Troubleshooting connection issues",
    "Best servers for streaming Netflix",
    "How to enable kill switch protection",
    "Setting up VPN on router",
    "Understanding VPN protocols",
    "How to change server locations",
    "Canceling your subscription"
  ];

  const quickLinks = [
    { icon: MessageCircle, title: "Live Chat", description: "Get instant help", action: "Start Chat" },
    { icon: Mail, title: "Email Support", description: "Send us a message", action: "Contact Us" },
    { icon: Book, title: "Setup Guides", description: "Step-by-step tutorials", action: "View Guides" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Help{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Find answers, tutorials, and support for all your ShadowVPN needs.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const LinkIcon = link.icon;
              
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:border-gray-600 transition-colors">
                  <div className="bg-blue-600/20 p-3 rounded-lg w-fit mx-auto mb-4">
                    <LinkIcon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{link.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{link.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    {link.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer flex items-center justify-between">
                <span className="text-gray-300">{article}</span>
                <ChevronRight className="text-gray-500" size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const CategoryIcon = category.icon;
              
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <CategoryIcon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between group">
                        <span>{article}</span>
                        <ChevronRight className="text-gray-500 group-hover:text-blue-400" size={14} />
                      </li>
                    ))}
                  </ul>

                  <button className="mt-4 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    View all articles →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How do I get started with ShadowVPN?",
                answer: "Simply sign up for an account, download the app for your device, and connect to any server location. Our setup guides will walk you through each step."
              },
              {
                question: "Can I use ShadowVPN on multiple devices?",
                answer: "Yes! All plans include up to 6 simultaneous connections, so you can protect all your devices with one account."
              },
              {
                question: "Which server should I choose?",
                answer: "For best performance, choose a server close to your location. For accessing geo-restricted content, select a server in the appropriate country."
              },
              {
                question: "Why is my VPN connection slow?",
                answer: "Try switching to a different server, changing VPN protocols, or check our speed optimization guide for detailed troubleshooting steps."
              },
              {
                question: "Do you really keep no logs?",
                answer: "Absolutely. We have a strict no-logs policy and don't track, store, or share any of your browsing activity or connection data."
              },
              {
                question: "How do I cancel my subscription?",
                answer: "You can cancel anytime from your account settings. If you need help, our support team is available 24/7 to assist you."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still Need{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Help?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert support team is available 24/7 to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Live Chat
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Send Email
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}