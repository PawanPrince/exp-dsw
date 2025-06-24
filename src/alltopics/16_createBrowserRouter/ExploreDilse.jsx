import React, { useState } from 'react';

const ExploreDilse = () => {
  const [notified, setNotified] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleNotifyClick = () => {
    setNotified(true);
    setShowPopup(true);

    // Hide popup after 3 seconds (optional)
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden text-[#c1b4a0]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src="/exploredilse.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#bbab85]">
          The Future of <span className="text-[#a29576]">Dilse Productions</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-[#d9cbb1] leading-relaxed">
          We’re working on something truly magical. From immersive cinematic storytelling to AI-powered
          editing tools, our vision is to redefine how love stories are captured and experienced.
          Stay tuned as we bring future-ready ideas to life.
        </p>

        <button
          onClick={handleNotifyClick}
          className={`px-8 py-3 ${
            notified ? 'bg-[#ff2f2f]' : 'bg-[#c1b4a0]'
          } text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
          {notified ? 'Thanks for being part of this ' : 'Notify Me When Live'}
        </button>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-50 px-6 py-10">
          <div className="bg-[#726b60] text-black px-3 py-3 rounded-2xl shadow-2xl text-2xl font-semibold border border-[#c1b4a0] animate-bounce -mt-20">
            You will receive email soon 💌
          </div>
        </div>
      )}

      {/* Future Ideas Section */}
      <div className="relative z-20 w-full px-8 py-20 bg-gradient-to-b from-red-900 to-[#978e80] text-[#d9cbb1]">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#c1b4a0]">What’s Coming Next?</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#f4e8cd] mb-2">AI-Powered Wedding Highlights</h3>
            <p>
              We are working on tools that will auto-generate beautiful cinematic highlight reels using artificial intelligence,
              saving time and enhancing storytelling quality.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#f4e8cd] mb-2">Personalized Wedding Websites</h3>
            <p>
              Soon, every couple will get a custom wedding website featuring their photos, videos, and love story —
              perfect for sharing memories with family and friends.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#f4e8cd] mb-2">Photography Tips & Tricks</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>How to pose naturally for pre-wedding shoots</li>
              <li>Lighting tips for dreamy couple portraits</li>
              <li>Creative props that elevate your theme</li>
              <li>Checklist for your bridal photo must-haves</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#f4e8cd] mb-2">Behind-the-Scenes Series</h3>
            <p>
              A video and blog series sharing how we shoot, edit, and bring wedding stories to life — perfect for aspiring
              photographers and curious couples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreDilse;
