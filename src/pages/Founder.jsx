import React from 'react';

const Founder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-[#978e80] to-red-900 text-white p-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#c1b4a0] mb-4">Meet the Founder</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Behind every great vision is a dreamer who dares to turn it into reality. Get to know the heart and soul of Dilse Weddings.
        </p>
      </header>

      {/* Image + Bio */}
      <section className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="flex-1">
          <img
            src="/p.png"
            alt="Founder"
            className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-[#c1b4a0] object-cover"
          />
        </div>
        <div className="flex-1 space-y-6 text-gray-200">
          <h2 className="text-3xl font-semibold text-[#c1b4a0]">Pawan Kumar Jha</h2>
          <p>
            With over a decade of experience in cinematic storytelling and wedding photography, Pawan has crafted a brand
            that puts emotion, culture, and timeless elegance at its core. His dedication to preserving authentic love stories
            and raw emotions has touched hundreds of families across the country.
          </p>
          <p>
            Pawan’s vision started with a single camera and a belief — that every wedding is a sacred story, worthy of cinematic preservation.
            Today, Dilse Weddings is one of India’s most loved names in wedding storytelling.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#c1b4a0] mb-10 text-center">Journey & Milestones</h2>
        <div className="space-y-12">
          {[
            {
              year: '2010',
              title: 'The Dream Begins',
              desc: 'Left a corporate job to pursue the dream of storytelling through a lens.'
            },
            {
              year: '2013',
              title: 'First Wedding Shot',
              desc: 'Captured the first wedding solo — with a rented DSLR and infinite passion.'
            },
            {
              year: '2017',
              title: 'Dilse Weddings Founded',
              desc: 'Launched the company officially with a dedicated creative team.'
            },
            {
              year: '2020',
              title: 'Award-Winning Film',
              desc: 'Won "Best Wedding Film" at National Wedding Creators Awards.'
            },
            {
              year: '2023',
              title: 'Expanded Nationwide',
              desc: 'Built production teams in 5 metro cities to serve all of India.'
            },
          ].map((item, i) => (
            <div key={i} className="relative pl-8 border-l-4 border-[#c1b4a0]">
              <div className="absolute top-0 left-0 transform -translate-x-2.5 -translate-y-2.5 w-5 h-5 bg-[#c1b4a0] rounded-full"></div>
              <h3 className="text-xl font-semibold text-[#c1b4a0]">{item.year} — {item.title}</h3>
              <p className="text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mt-24 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#c1b4a0] mb-6">Philosophy</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          "Photography is not just about capturing smiles — it’s about preserving the soul of a moment.
          At Dilse Weddings, we believe in storytelling that feels real, raw, and unforgettable.
          Every frame is a promise — to keep your memories alive, forever."
        </p>
      </section>

      {/* Quote Banner */}
      <div className="my-24 py-20 bg-[#56587718] rounded-xl shadow-xl text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-[#c1b4a0] max-w-4xl mx-auto">
          "Anyone can take a photo — but only a storyteller can make you feel it."
        </h3>
      </div>

      {/* Footer Style Call-to-Action */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-300 mb-4">Want to know more about our journey?</p>
        <button className="px-6 py-3 bg-[#c1b4a0] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
          Read Our Blog
        </button>
      </div>
    </div>
  );
};

export default Founder;