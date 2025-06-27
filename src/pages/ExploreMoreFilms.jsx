import React from 'react';

const videos = [
  {
    id: 1,
    src: '/contact.mp4',
    title: 'The Wedding Day',
    description: 'A timeless capture of love and joy.',
  },
  {
    id: 2,
    src: '/exploredilse.mp4',
    title: 'The Engagement Story',
    description: 'An elegant tale of two souls becoming one.',
  },
  {
    id: 3,
    src: '/home2.mp4',
    title: 'Haldi Ceremony',
    description: 'Bright colors and beautiful memories.',
  },
  {
    id: 4,
    src: '/HomeVideo.mp4',
    title: 'Reception Highlights',
    description: 'A grand celebration of love.',
  },
  // Add more video objects as needed
];

const ExploreMoreFilms = () => {
  return (
    <div className="min-h-screen w-full px-6 py-12 bg-gradient-to-b from-[#2c2c2c] to-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#c1b4a0]">
        Explore More Films 🎥
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <video
              src={video.src}
              controls
              className="w-full h-60 object-cover"
              preload="auto"
            ></video>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#c1b4a0]">{video.title}</h2>
              <p className="text-sm text-gray-300 mt-2">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMoreFilms;
