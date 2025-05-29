import React, { useState } from 'react';
import { Check, Shield, Zap, Globe, X } from 'lucide-react';
import Layout from '../components/Layout';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    monthly: [
      {
        name: "1 Month",
        price: "$12.99",
        period: "/month",
        popular: false,
        savings: null,
        features: [
          "Connect up to 6 devices",
          "60+ server locations worldwide",
          "24/7 customer support",
          "Kill switch protection",
          "No activity logs policy",
          "Unlimited bandwidth",
          "All VPN protocols"
        ]
      },
      {
        name: "6 Months",
        price: "$7.99",
        period: "/month",
        popular: true,
        savings: "Save 38%",
        features: [
          "Everything in 1 Month plan",
          "Priority customer support",
          "Advanced kill switch",
          "Split tunneling",
          "Ad & malware blocker",
          "Stealth mode",
          "6 months commitment"
        ]
      },
      {
        name: "1 Year",
        price: "$4.99",
        period: "/month",
        popular: false,
        savings: "Save 62%",
        features: [
          "Everything in 6 Months plan",
          "VIP priority support",
          "Advanced threat protection",
          "Dedicated IP option",
          "Router configuration help",
          "Business features",
          "12 months commitment"
        ]
      }
    ],
    yearly: [
      {
        name: "1 Year",
        price: "$4.99",
        period: "/month",
        popular: false,
        savings: "Save 62%",
        yearlyPrice: "$59.88",
        features: [
          "Connect up to 6 devices",
          "60+ server locations worldwide",
          "24/7 priority support",
          "Advanced kill switch",
          "No activity logs policy",
          "Unlimited bandwidth",
          "All advanced features"
        ]
      },
      {
        name: "2 Years",
        price: "$3.99",
        period: "/month",
        popular: true,
        savings: "Save 69%",
        yearlyPrice: "$95.76",
        features: [
          "Everything in 1 Year plan",
          "VIP customer support",
          "Advanced threat protection",
          "Dedicated IP included",
          "Router setup assistance",
          "Business collaboration tools",
          "24 months commitment"
        ]
      },
      {
        name: "3 Years",
        price: "$2.99",
        period: "/month",
        popular: false,
        savings: "Save 77%",
        yearlyPrice: "$107.64",
        features: [
          "Everything in 2 Years plan",
          "Premium support tier",
          "Custom server locations",
          "White-label options",
          "API access",
          "Enterprise features",
          "36 months commitment"
        ]
      }
    ]
  };

  const features = [
    { name: "Military-grade encryption", basic: true, premium: true, business: true },
    { name: "No-logs policy", basic: true, premium: true, business: true },
    { name: "6 simultaneous connections", basic: true, premium: true, business: true },
    { name: "60+ server locations", basic: true, premium: true, business: true },
    { name: "24/7 customer support", basic: true, premium: true, business: true },
    { name: "Kill switch protection", basic: true, premium: true, business: true },
    { name: "Split tunneling", basic: false, premium: true, business: true },
    { name: "Ad & malware blocker", basic: false, premium: true, business: true },
    { name: "Stealth mode", basic: false, premium: true, business: true },
    { name: "Dedicated IP", basic: false, premium: false, business: true },
    { name: "Priority support", basic: false, premium: true, business: true },
    { name: "Business collaboration", basic: false, premium: false, business: true }
  ];

  const currentPlans = plans[billingCycle];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose the perfect plan for your privacy needs. All plans include our 30-day money-back guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-800 p-2 rounded-xl border border-gray-700">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  billingCycle === 'yearly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save up to 77%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500 scale-105' 
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
                  
                  {plan.savings && (
                    <div className="mb-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {plan.savings}
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    {plan.yearlyPrice && (
                      <p className="text-gray-400 text-sm mt-2">
                        Billed {plan.yearlyPrice} annually
                      </p>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="text-green-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300">{feature}</span>
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

      {/* Feature Comparison */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Features</h2>
            <p className="text-gray-300">See what's included in each plan</p>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-700 bg-gray-700">
              <div className="font-semibold">Features</div>
              <div className="text-center font-semibold">Basic</div>
              <div className="text-center font-semibold">Premium</div>
              <div className="text-center font-semibold">Business</div>
            </div>

            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b border-gray-700 last:border-b-0">
                <div className="text-gray-300">{feature.name}</div>
                <div className="text-center">
                  {feature.basic ? (
                    <Check className="text-green-400 mx-auto" size={20} />
                  ) : (
                    <X className="text-gray-500 mx-auto" size={20} />
                  )}
                </div>
                <div className="text-center">
                  {feature.premium ? (
                    <Check className="text-green-400 mx-auto" size={20} />
                  ) : (
                    <X className="text-gray-500 mx-auto" size={20} />
                  )}
                </div>
                <div className="text-center">
                  {feature.business ? (
                    <Check className="text-green-400 mx-auto" size={20} />
                  ) : (
                    <X className="text-gray-500 mx-auto" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Do you offer a money-back guarantee?",
                answer: "Yes, we offer a 30-day money-back guarantee on all plans. No questions asked."
              },
              {
                question: "How many devices can I connect?",
                answer: "All plans allow up to 6 simultaneous connections across all your devices."
              },
              {
                question: "Do you keep logs?",
                answer: "No, we have a strict no-logs policy. We don't track or store your online activity."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}