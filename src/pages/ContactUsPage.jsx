import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Shield, Zap } from 'lucide-react';
import Layout from '../components/Layout';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@shadowvpn.com",
      description: "Get help via email within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant help from our support team"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 hours",
      description: "Average first response time"
    },
    {
      icon: Shield,
      title: "Technical Support",
      details: "24/7 Available",
      description: "Expert help with setup and issues"
    }
  ];

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'business', label: 'Business Solutions' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'media', label: 'Media & Press' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Support
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Need help? Our expert support team is here 24/7 to assist you with any questions or issues.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const InfoIcon = info.icon;
              
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
                  <div className="bg-blue-600/20 p-3 rounded-lg w-fit mx-auto mb-4">
                    <InfoIcon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please provide detailed information about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-gray-400 text-sm">
                  * Required fields. We typically respond within 2 hours during business hours.
                </p>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Quick Answers</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly do you respond?",
                    answer: "We typically respond to all inquiries within 2 hours during business hours, and within 24 hours on weekends."
                  },
                  {
                    question: "Do you offer phone support?",
                    answer: "Currently, we provide support via email and live chat. Our live chat is available 24/7 for instant assistance."
                  },
                  {
                    question: "Can you help with setup?",
                    answer: "Absolutely! Our technical support team can guide you through setup on any device or platform."
                  },
                  {
                    question: "What about billing questions?",
                    answer: "For billing inquiries, refunds, or payment issues, select 'Billing & Payments' category for fastest response."
                  },
                  {
                    question: "Do you offer business solutions?",
                    answer: "Yes! We have enterprise solutions for businesses. Contact us using the 'Business Solutions' category."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-600/20 rounded-lg border border-blue-600/30">
                <h3 className="font-bold mb-2 text-blue-400">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-4">
                  For urgent technical issues, use our live chat feature available 24/7 in the bottom right corner.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}