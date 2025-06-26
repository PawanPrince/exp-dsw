import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f3f3] to-[#ddd] text-gray-800 p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-[#6f4037]">Privacy Policy</h1>

        <p>
          At Dilse Weddings, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use,
          protect, and disclose your personal information. By accessing or using our website and services, you agree to
          the terms of this policy.
        </p>

        <h2 className="text-2xl font-semibold text-[#6f4037]">1. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personal details such as name, email address, phone number, and location.</li>
          <li>Event-related details including wedding dates, preferences, and budgets.</li>
          <li>Payment and billing information for transactions.</li>
          <li>Usage data like IP address, browser type, pages visited, and interactions.</li>
          <li>Any communications you send us including inquiries, reviews, or testimonials.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#6f4037]">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To provide our services and respond to your requests.</li>
          <li>To personalize your experience and offer customized content.</li>
          <li>To process payments and send relevant invoices.</li>
          <li>To improve our website, marketing, and customer service.</li>
          <li>To communicate updates, offers, or promotional messages.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#6f4037]">3. Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to others. We may share data with trusted partners who
          assist us in operating our website, conducting our business, or servicing you, provided those parties agree to
          keep this information confidential. We may also disclose your information if required by law.
        </p>

        <h2 className="text-2xl font-semibold text-[#6f4037]">4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. However, no
          method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to
          protect your data but cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-[#6f4037]">5. Cookies & Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and serve
          targeted ads. You can disable cookies through your browser settings, though some features may not function properly.
        </p>

        <h2 className="text-2xl font-semibold text-[#6f4037]">6. Third-Party Links</h2>
        <p>
          Our website may contain links to other sites. We are not responsible for the privacy practices or content of
          these third-party websites. We encourage you to read their privacy policies.
        </p>

        <h2 className="text-2xl font-semibold text-[#6f4037]">7. Your Rights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>You have the right to access, update, or delete your personal information.</li>
          <li>You may opt-out of receiving promotional emails by clicking the unsubscribe link.</li>
          <li>You can request data portability or object to the processing of your data.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#6f4037]">8. Children's Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13. We do not knowingly collect personal data from
          children. If we learn that we have collected information from a child under 13, we will delete it immediately.
        </p>

        <h2 className="text-2xl font-semibold text-[#6f4037]">9. Changes to This Policy</h2>
        <p>
          We reserve the right to update this privacy policy at any time. Changes will be posted on this page and the
          effective date will be updated accordingly. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold text-[#6f4037]">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <ul className="pl-5 mt-2">
          <li>Email: <a href="mailto:workfordilse@gmail.com" className="text-blue-600 hover:underline">workfordilse@gmail.com</a></li>
          <li>Phone: +91-9304936711</li>
          <li>Address: Korat Bari, Purnea, Bihar - 854301, India</li>
        </ul>

        <p className="text-sm text-center text-gray-500 mt-10">
          Last updated: June 26, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
