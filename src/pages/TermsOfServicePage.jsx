import React from 'react';

function TermsOfServicePage() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-400 mb-4">
          Welcome to ShadowVPN. These Terms of Service ("Terms") govern your use of our VPN software, websites, and related services (collectively, the “Services”). By using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Eligibility</h2>
        <p className="text-gray-400 mb-4">
          You must be at least 18 years old or of legal age in your jurisdiction to use ShadowVPN. By agreeing to these Terms, you represent and warrant that you meet the eligibility requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. License</h2>
        <p className="text-gray-400 mb-4">
          ShadowVPN grants you a limited, non-exclusive, non-transferable, revocable license to use the Services for personal, non-commercial use, subject to your compliance with these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Acceptable Use</h2>
        <p className="text-gray-400 mb-4">
          You agree not to use our Services for any unlawful, harmful, or abusive purposes, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Engaging in illegal downloading or distribution of copyrighted content</li>
          <li>Transmitting viruses or malicious software</li>
          <li>Infringing on intellectual property rights</li>
          <li>Engaging in spamming, phishing, or fraud</li>
          <li>Attempting to breach or test system security</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. No-Log Policy</h2>
        <p className="text-gray-400 mb-4">
          ShadowVPN maintains a strict no-log policy. We do not store logs of your browsing activity, connection logs, traffic data, or DNS queries. Your privacy is our priority.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Account Security</h2>
        <p className="text-gray-400 mb-4">
          You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately if you suspect any unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Service Availability</h2>
        <p className="text-gray-400 mb-4">
          We strive to provide high-quality service, but we do not guarantee uninterrupted access or error-free performance. ShadowVPN is not liable for any service disruptions or data loss.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Refund Policy</h2>
        <p className="text-gray-400 mb-4">
          We offer a 30-day money-back guarantee for new users. To request a refund, contact our support team within 30 days of your initial purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Termination</h2>
        <p className="text-gray-400 mb-4">
          We reserve the right to suspend or terminate your account without notice if we believe you have violated these Terms. Upon termination, all licenses and rights granted to you will immediately cease.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Modifications</h2>
        <p className="text-gray-400 mb-4">
          We may update these Terms from time to time. We will notify users of any material changes. Continued use of our Services after such changes constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Governing Law</h2>
        <p className="text-gray-400 mb-4">
          These Terms shall be governed by the laws of the jurisdiction in which ShadowVPN is incorporated, without regard to conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">11. Contact Us</h2>
        <p className="text-gray-400 mb-4">
          If you have any questions about these Terms, please contact our legal team at support@shadowvpnow.com.
        </p>

        <p className="text-sm text-gray-500 mt-10 italic">
          Last updated: May 29, 2025
        </p>
      </div>
    </div>
  );
}

export default TermsOfServicePage;
