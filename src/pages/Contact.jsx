import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
      .sendForm(
        'service_54vsh5t',
        'template_7865bgm',
        formRef.current,
        'mI3epPY0XT1CdnS_Y'
      )
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
    <div className="min-h-screen bg-gradient-to-br from-[#8e887e] via-[#4f4b44] to-red-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-[#c1b4a0]">Contact Us</h1>

      <p className="text-lg mb-6 max-w-xl text-center text-gray-300">
        We'd love to hear from you! Ask anything, we’ll reply — <span className="italic text-[#c1b4a0]">Dil Se</span>.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-[#c1b4a0] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#bfa98c]"
        />
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-[#c1b4a0] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#bfa98c]"
        />
        <textarea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-[#c1b4a0] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#bfa98c]"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#c1b4a0] hover:bg-[#e2d2b9] text-black font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-300 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default Contact;
