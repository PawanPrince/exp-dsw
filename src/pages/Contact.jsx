import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

// Animated Input Component
const AnimatedInput = ({ type = "text", name, value, onChange, placeholder, icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(value.length > 0);
  };

  return (
    <div className="relative">
      <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 z-10 ${isFocused || hasValue ? 'text-green-400' : 'text-red-400'}`}>
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          setHasValue(e.target.value.length > 0);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-transparent transition-all duration-300 focus:outline-none focus:bg-white/15 ${isFocused ? 'border-red-400 shadow-lg shadow-amber-400/25' : 'border-white/30 hover:border-white/50'}`}
        placeholder={placeholder}
      />
      <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${isFocused || hasValue || value ? 'top-2 text-xs text-yellow-300 font-medium' : 'top-1/2 transform -translate-y-1/2 text-gray-300'}`}>
        {placeholder}
      </label>
    </div>
  );
};

// Animated Textarea Component
const AnimatedTextarea = ({ name, value, onChange, placeholder, rows = 4, icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(value.length > 0);
  };

  return (
    <div className="relative">
      <div className={`absolute left-4 top-4 transition-all duration-300 z-10 ${isFocused || hasValue ? 'text-green-400' : 'text-red-400'}`}>
        {icon}
      </div>
      <textarea
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          setHasValue(e.target.value.length > 0);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={rows}
        className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-transparent transition-all duration-300 focus:outline-none focus:bg-white/15 resize-none ${isFocused ? 'border-amber-400 shadow-lg shadow-amber-400/25' : 'border-white/30 hover:border-white/50'}`}
        placeholder={placeholder}
      />
      <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${isFocused || hasValue || value ? 'top-2 text-xs text-amber-300 font-medium' : 'top-4 text-gray-300'}`}>
        {placeholder}
      </label>
    </div>
  );
};

// Main Contact Component
const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = formData;

    if (!user_name || !user_email || !message) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm('service_54vsh5t', 'template_7865bgm', formRef.current, 'mI3epPY0XT1CdnS_Y')
      .then(
        () => {
          setSuccess('Message sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        () => {
          setError('Something went wrong. Please try again.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">

      {/* 🔁 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
      >
        <source src="/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center mb-2">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Contact
            <span className="ml-3 bg-gradient-to-r from-[#c1b4a0] to-red-300 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-xl mx-auto">
            We'd love to hear from you — <span className="text-red-400 font-semibold italic">Dil Se</span>.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c1b4a0] to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="w-full max-w-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <AnimatedInput
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              icon={<User className="w-5 h-5" />}
            />
            <AnimatedInput
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              icon={<Mail className="w-5 h-5" />}
            />
            <AnimatedTextarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              icon={<MessageSquare className="w-5 h-5" />}
              rows={5}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#c1b4a0] to-red-700 hover:from-green-400 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <div className="flex items-center justify-center space-x-3">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            </button>

            {error && <div className="text-red-300 text-center">{error}</div>}
            {success && <div className="text-green-300 text-center">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
