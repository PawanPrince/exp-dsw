import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#978e80] to-red-900 text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-[#c1b4a0]">Cookie Policy</h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          This Cookie Policy explains how <span className="font-semibold text-[#c1b4a0]">Dilse Weddings</span> uses cookies and similar technologies to recognize you when you visit our website at dilseweddings.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#c1b4a0]">What are cookies?</h2>
          <p className="text-gray-300">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work or work more efficiently, as well as to provide reporting information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#c1b4a0]">Why do we use cookies?</h2>
          <p className="text-gray-300">
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate. Others help us to track and target the interests of our users to enhance their experience. Third parties serve cookies through our website for analytics and other purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#c1b4a0]">Types of cookies we use:</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website.</li>
            <li><strong>Performance and Functionality Cookies:</strong> These cookies enhance the performance and functionality of our website.</li>
            <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used.</li>
            <li><strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#c1b4a0]">How can you control cookies?</h2>
          <p className="text-gray-300">
            You have the right to decide whether to accept or reject cookies. You can set your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#c1b4a0]">Changes to this Cookie Policy</h2>
          <p className="text-gray-300">
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#c1b4a0]">Contact us</h2>
          <p className="text-gray-300">
            If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:workfordilse@gmail.com" className="text-[#c1b4a0] underline">workfordilse@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
