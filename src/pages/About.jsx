import React, { useState, useEffect } from 'react';
import { Camera, Film, Heart, Award, Users, Star } from 'lucide-react';

const About = () => {
  // Array of images for the introduction section carousel
  const introImages = [
    "/about1.jpg",
    "/about1.0.jpg", 
    "/about1.01.jpg",
  ];

  const [introImageIndex, setIntroImageIndex] = useState(0);

  // Auto-scroll effect for introduction carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIntroImageIndex((prevIndex) => 
        prevIndex === introImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [introImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(142,136,126)] via-red-900 to-red-900 text-gray-200">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="/aboutPic.jpg" 
          alt="Wedding Photography" 
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4 mt-20 tracking-wide animate-fade-in">About Dilse Weddings</h1>
            <p className="text-xl text-gray-200 max-w-2xl animate-fade-in">Crafting Timeless Love Stories with Passion and Artistry</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="px-6 py-16">
        {/* Introduction */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-[#c1b4a0]">
            READY TO CREATE YOUR MEMORY OF A LIFETIME?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-left">
                Welcome to <span className="font-semibold text-[#c1b4a0]">Dilse Weddings</span>, where every moment is crafted
                with emotion, elegance, and authenticity. We believe that love stories are not just events—they're timeless
                experiences that deserve to be captured with heart and soul.
              </p>
              
              <p className="text-lg leading-8 text-left">
                Our team of passionate creators, storytellers, and artists has documented countless beautiful beginnings.
                At Dilse Weddings, we pour dedication into each frame and strive to create memories that will make you smile
                generations from now.
              </p>
              
              <p className="text-lg leading-8 text-left">
                Whether it's through photography, films, or creative direction, we are with you every step of the way to make
                your moments magical — <span className="italic text-[#c1b4a0] font-semibold">Dil Se</span>.
              </p>
            </div>
            
            <div className="relative h-80 overflow-hidden rounded-lg shadow-2xl">
              {/* Image Carousel Container */}
              <div className="relative w-full h-full">
                {introImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === introImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Wedding couple ${index + 1}`} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>

              {/* Carousel Indicators */}
              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {introImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setIntroImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === introImageIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div> */}

              {/* Navigation Arrows */}
              {/* <button
                onClick={() => setIntroImageIndex(
                  introImageIndex === 0 ? introImages.length - 1 : introImageIndex - 1
                )}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button> */}

              {/* <button
                onClick={() => setIntroImageIndex(
                  introImageIndex === introImages.length - 1 ? 0 : introImageIndex + 1
                )}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-[#c1b4a0] mb-8 text-center">Our Story</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-400 to-[#ff0303] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#c1b4a0]">Born from Passion</h4>
                <p className="text-gray-300 leading-6">
                  Founded in 2015 by a team of artists who believed that every love story deserves to be told with authenticity and emotion.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-400 to-[#ff0303] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#c1b4a0]">Artistic Vision</h4>
                <p className="text-gray-300 leading-6">
                  We combine traditional wedding photography with contemporary artistic techniques to create unique visual narratives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-400 to-[#ff0303] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#c1b4a0]">Cinematic Excellence</h4>
                <p className="text-gray-300 leading-6">
                  Our wedding films are not just recordings—they're cinematic experiences that capture the essence of your special day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-[#c1b4a0] mb-12 text-center">Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Camera className="w-12 h-12 text-[#c1b4a0] mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-white">Wedding Photography</h4>
              <p className="text-gray-300 leading-6">
                Capturing every precious moment with artistic flair and technical excellence. From intimate ceremonies to grand celebrations.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Film className="w-12 h-12 text-[#c1b4a0] mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-white">Wedding Videography</h4>
              <p className="text-gray-300 leading-6">
                Cinematic wedding films that tell your unique love story with emotion, beauty, and professional quality.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Heart className="w-12 h-12 text-[#c1b4a0] mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-white">Pre-Wedding Shoots</h4>
              <p className="text-gray-300 leading-6">
                Romantic pre-wedding sessions that capture your chemistry and create beautiful memories before your big day.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="w-12 h-12 text-[#c1b4a0] mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-white">Event Coverage</h4>
              <p className="text-gray-300 leading-6">
                Complete coverage of all wedding events - mehendi, sangeet, reception, and more with dedicated teams.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Award className="w-12 h-12 text-[#c1b4a0] mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-white">Custom Packages</h4>
              <p className="text-gray-300 leading-6">
                Tailored packages to suit your specific needs, budget, and vision for your perfect wedding coverage.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Star className="w-12 h-12 text-[#c1b4a0] mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-white">Destination Weddings</h4>
              <p className="text-gray-300 leading-6">
                Specialized in capturing destination weddings across India and internationally with travel arrangements.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-[#c1b4a0] mb-12 text-center">Why Choose Dilse Weddings?</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/about2.jpg" 
                alt="Wedding team at work" 
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#c1b4a0] w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Professional Excellence</h4>
                  <p className="text-gray-300 leading-6">
                    Over 8 years of experience with state-of-the-art equipment and award-winning photography techniques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#c1b4a0] w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Personalized Approach</h4>
                  <p className="text-gray-300 leading-6">
                    We understand that every couple is unique, and we tailor our services to match your personality and style.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#c1b4a0] w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Unobtrusive Style</h4>
                  <p className="text-gray-300 leading-6">
                    Our team captures candid moments naturally without disrupting the flow of your special day.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#c1b4a0] w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Quick Delivery</h4>
                  <p className="text-gray-300 leading-6">
                    Fast turnaround times with sneak peeks within 48 hours and complete gallery delivery within 2-3 weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-[#c1b4a0] mb-12 text-center">Meet Our Creative Team</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-[#ff0303] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Lead Photographers</h4>
                <p className="text-gray-300 leading-6">
                  Our certified photographers bring years of experience and artistic vision to capture your perfect moments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-[#ff0303] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Film className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Videography Team</h4>
                <p className="text-gray-300 leading-6">
                  Professional videographers who specialize in creating cinematic wedding films with storytelling excellence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-[#ff0303] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Support Staff</h4>
                <p className="text-gray-300 leading-6">
                  Dedicated coordinators and assistants who ensure smooth operations and exceptional client service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-[#c1b4a0] mb-12 text-center">Our Achievements</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-[#c1b4a0] mb-2">500+</div>
              <div className="text-white text-lg">Weddings Captured</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-[#c1b4a0] mb-2">8+</div>
              <div className="text-white text-lg">Years Experience</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-[#c1b4a0] mb-2">15+</div>
              <div className="text-white text-lg">Awards Won</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-[#c1b4a0] mb-2">98%</div>
              <div className="text-white text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h3 className="text-3xl font-bold text-[#c1b4a0] mb-8">Our Philosophy</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <blockquote className="text-xl italic text-gray-200 leading-8 mb-6">
              "We believe that every wedding is a unique story waiting to be told. Our mission is to capture not just the events, 
              but the emotions, the connections, and the love that makes each celebration truly special. We work with passion, 
              dedication, and an unwavering commitment to excellence because we know that these moments are once-in-a-lifetime treasures."
            </blockquote>
            <p className="text-lg text-[#c1b4a0] font-semibold">— Team Dilse Weddings</p>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <div className="relative h-[20vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Wedding celebration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-200">Let's create magic together — Dil Se</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
