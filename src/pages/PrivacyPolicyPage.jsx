import React from 'react';
import { Shield, Eye, Lock, Globe } from 'lucide-react';
import Layout from '../components/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Your privacy is our priority. Here's how we protect it.
            </p>
            <p className="text-gray-400 mt-4">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-blue-400" size={24} />
                <h2 className="text-xl font-bold m-0">Our Commitment</h2>
              </div>
              <p className="text-gray-300 m-0">
                ShadowVPN operates under a strict no-logs policy. We do not collect, store, or share your personal browsing data, connection logs, or any information that could identify your online activities.
              </p>
            </div>

            <h2>1. Information We Don't Collect</h2>
            <p>We do NOT collect or log:</p>
            <ul>
              <li>Your browsing history or websites visited</li>
              <li>Connection timestamps or session duration</li>
              <li>DNS queries or IP addresses</li>
              <li>Bandwidth usage or connection metadata</li>
              <li>Any data transmitted through our VPN servers</li>
            </ul>

            <h2>2. Information We May Collect</h2>
            <p>We only collect minimal information necessary to provide our service:</p>
            <ul>
              <li><strong>Account Information:</strong> Email address and payment information (processed by third-party providers)</li>
              <li><strong>Technical Information:</strong> App version, device type (for troubleshooting only)</li>
              <li><strong>Support Communications:</strong> Messages you send to our support team</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>Any information we collect is used solely to:</p>
            <ul>
              <li>Provide and maintain our VPN service</li>
              <li>Process payments and manage subscriptions</li>
              <li>Respond to customer support requests</li>
              <li>Send important service updates</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>We work with trusted third-party providers for:</p>
            <ul>
              <li><strong>Payment Processing:</strong> Stripe, PayPal (they have their own privacy policies)</li>
              <li><strong>Analytics:</strong> We use privacy-focused analytics that don't track individuals</li>
              <li><strong>Customer Support:</strong> Support platform providers with data encryption</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We protect your information with:</p>
            <ul>
              <li>AES-256 encryption for all data transmission</li>
              <li>Secure servers in privacy-friendly jurisdictions</li>
              <li>Regular security audits and updates</li>
              <li>Strict employee access controls</li>
            </ul>

            <h2>6. Legal Requests</h2>
            <p>Since we don't collect or store user activity logs, we cannot provide information we don't have. We will:</p>
            <ul>
              <li>Challenge any request that violates user privacy</li>
              <li>Notify users of any valid legal requests when legally permitted</li>
              <li>Operate from jurisdictions with strong privacy protections</li>
            </ul>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access any personal information we have about you</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of non-essential communications</li>
              <li>Contact us with privacy concerns</li>
            </ul>

            <h2>8. Changes to This Policy</h2>
            <p>We will notify users of any material changes to this privacy policy via email and app notifications. Continued use of our service after changes constitutes acceptance.</p>

            <h2>9. Contact Us</h2>
            <p>For privacy-related questions or concerns:</p>
            <ul>
              <li>Email: privacy@shadowvpn.com</li>
              <li>Contact form: /contact-us</li>
            </ul>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold mb-3">Questions About Our Privacy Policy?</h3>
              <p className="text-gray-300 mb-4">
                We're committed to transparency. If you have any questions about how we protect your privacy, don't hesitate to reach out.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Privacy Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}