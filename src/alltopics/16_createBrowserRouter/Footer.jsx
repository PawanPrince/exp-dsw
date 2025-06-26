import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Instagram, Facebook, Youtube, ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-red-900 via-red-00 to-[#3f3939] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-900 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-amber-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="group flex items-center gap-3 mb-6 transition-transform hover:scale-105">
              <div className="relative">
                <img src="/logoHome.png" alt="Dilse Weddings Logo" className="w-24 h-24 object-contain rounded-full ring-2 ring-red-400/50 group-hover:ring-pink-400 transition-all duration-300" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-red-400 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  Dil से Weddings
                </h2>
                <p className="text-xs text-gray-300">With Love & Passion</p>
              </div>
            </Link>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p className="text-sm leading-relaxed text-gray-300">
                Capturing your love stories with heart and soul. Photography, films, and magical memories made{' '}
                <span className="inline-flex items-center gap-1 text-red-400 font-semibold">
                  <Heart className="w-3 h-3 fill-current animate-pulse" />
                  Dil Se
                </span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-grey-500 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Contact', 'Sign Up', 'Founder'].map((item, index) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`;
                return (
                  <li key={index}>
                    <Link
                      to={path}
                      className="group flex items-center gap-3 text-gray-300 hover:text-yellow-200 transition-all duration-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-grey-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              Services
            </h3>
            <div className="space-y-3">
              {['Wedding Photography', 'Pre-Wedding Shoots', 'Cinematic Films', 'Creative Direction'].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-red-500 hover:border-red-400 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-grey-500 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              Get in Touch
            </h3>

            <div className="space-y-4">
              <a href="mailto:info@dilseweddings.com" className="group flex items-center gap-3 text-gray-300 hover:text-pink-300 transition-all duration-300">
                <Mail className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">workfordilse@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+91-9304936711</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-sm">India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, color: 'hover:bg-pink-500' },
                  { icon: Facebook, color: 'hover:bg-blue-500' },
                  { icon: Youtube, color: 'hover:bg-red-500' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 ${social.color} hover:scale-110 hover:border-transparent transition-all duration-300`}
                  >
                    <social.icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-12 mb-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-red-500 to-grey-200 px-6 py-2 rounded-full">
              <Heart className="w-4 h-4 text-white fill-current animate-pulse" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dilse Weddings. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-pink-400 transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-pink-400 transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-pink-400 transition-colors duration-300">Cookie Policy</Link>
            </div>

          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-white">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
            <span>for capturing love stories</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
