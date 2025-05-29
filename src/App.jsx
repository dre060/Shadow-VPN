import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import AppsPage from './pages/AppsPage';
import BusinessPage from './pages/BusinessPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactUsPage from './pages/ContactUsPage';
import SetupGuidesPage from './pages/SetupGuidesPage';
import StatusPage from './pages/StatusPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/setup-guides" element={<SetupGuidesPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  );
}