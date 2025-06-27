
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingCart, Play, Star, Heart, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [cart, setCart] = useState({});
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const scrollRef = useRef(0);
  const navigate = useNavigate();

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  const reviews = [
    { name: 'Pawan Jha', text: 'Their work is absolutely magical and full of heart! Every moment captured tells a beautiful story that we will cherish forever.' },
    { name: 'Bobby ', text: 'The memories they captured are priceless forever! Professional service with incredible attention to detail.' },
    { name: 'Gagan Chouhan', text: 'Every moment was so beautifully documented by them! The quality and creativity exceeded our expectations completely.' },
    { name: 'Sahil', text: 'Can\'t stop watching our wedding trailer again & again! It perfectly captures the emotions and joy of our special day.' },
    { name: 'Amar Verma', text: 'This is the best decision we made for our big day! Outstanding service and incredible final results.' },
    { name: 'Amartya Anand', text: 'Highly professional, super friendly and talented team! They made us feel comfortable throughout the entire process.' },
    { name: 'Roshan Kumar', text: 'They turned our vision into reality effortlessly! Creative approach with perfect execution of our dream wedding.' },
    { name: 'Prachi Mishra', text: 'Couldn\'t have asked for a better wedding team! Their dedication and passion shows in every single shot.' },
    { name: 'Riya Patel', text: 'Pure emotions, joy and colors captured so perfectly! Every photo tells a story and brings back beautiful memories.' },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length, isAutoPlaying, isDragging]);

  // Mouse wheel scrolling
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;
    setCurrentReviewIndex((prev) => {
      const newIndex = prev + delta;
      if (newIndex < 0) return reviews.length - 1;
      if (newIndex >= reviews.length) return 0;
      return newIndex;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, [reviews.length]);

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    startXRef.current = e.clientX;
    scrollRef.current = 0;
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startXRef.current;
    scrollRef.current = deltaX;
    
    if (Math.abs(deltaX) > 100) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentReviewIndex((prev) => {
        const newIndex = prev + direction;
        if (newIndex < 0) return reviews.length - 1;
        if (newIndex >= reviews.length) return 0;
        return newIndex;
      });
      startXRef.current = e.clientX;
      scrollRef.current = 0;
    }
  }, [isDragging, reviews.length]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    scrollRef.current = 0;
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, []);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener('wheel', handleWheel, { passive: false });
  //     return () => container.removeEventListener('wheel', handleWheel);
  //   }
  // }, [handleWheel]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const getReviewStyle = (index) => {
    const diff = index - currentReviewIndex;
    const totalReviews = reviews.length;
    
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalReviews / 2) {
      normalizedDiff = diff > 0 ? diff - totalReviews : diff + totalReviews;
    }

    const absPos = Math.abs(normalizedDiff);
    
    if (normalizedDiff === 0) {
      // Main active review
      return {
        transform: 'translateX(0px) scale(1)',
        opacity: 1,
        zIndex: 100,
        filter: 'blur(0px)',
      };
    } else {
      // Faded reviews with layered positioning
      const translateX = normalizedDiff * 120;
      const scale = Math.max(0.6, 1 - absPos * 0.15);
      const opacity = Math.max(0.2, 1 - absPos * 0.3);
      const zIndex = Math.max(1, 100 - absPos * 10);
      const blur = Math.min(4, absPos * 1.5);
      
      return {
        transform: `translateX(${translateX}px) scale(${scale})`,
        opacity,
        zIndex,
        filter: `blur(${blur}px)`,
      };
    }
  };

  const handleAddToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  return (
    <div className="w-full min-h-screen text-[#c1b4a0] bg-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0  border-b">
        <div className="max-w-7xl mx-auto px-6 py-0 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <Camera className="h-8 w-8" style={{ color: '#c1b4a0' }} /> */}
            {/* <span className="text-2xl font-bold text-[#c1b4a0]">Dilse Productionsdn</span> */}
          </div>

          {/* <div className="flex items-center space-x-6">
            <div className="relative">
              <ShoppingCart className="h-10 w-10  cursor-pointer hover:scale-110 transition-transform" style={{ color: '#c1b4a0' }} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 mx bg-[#c1b4a0] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </div> */}

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/HomeVideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 mt-120 animate-fade-in">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #c1b4a0, #c1b4a0)',
              }}
            >
              {/* Dilse Productions */}
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fade-in opacity-90 leading-relaxed">
            Capturing love stories with cinematic elegance. Every moment, every emotion,
            preserved forever through our lens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            {/* <button className="group px-8 py-4 bg-[#c1b4a0] text-black font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#c1b4a0]/25">
              <span className="flex items-center gap-2">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </span>
            </button> */}

            <button
              onClick={() => navigate('/exploredilse')}
              className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-[#c1b4a0] cursor-pointer"
            >
              Explore Dilse 🧡
            </button>

          </div>
        </div>

        {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* Wedding Collections */}
      <section id="gallery" className="w-full py-24 px-6 bg-gradient-to-b from-[#978e80] to-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #c1b4a0, #c1b4a0)',
                }}
              >
                Wedding Collections
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Premium photography packages designed to capture every precious moment of your special day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: 'Golden Hour for You', price: '₹2,999', features: ['3 Hours Coverage', '100+ Photos', 'Highlight Reel'] },
              { id: 2, name: 'Platinum Elite', price: '₹4,999', features: ['8 Hours Coverage', '300+ Photos', 'Cinematic Film'] },
              { id: 3, name: 'Diamond Luxury', price: '₹17,999', features: ['Full Day Coverage', '5000+ Photos', 'Drone Footage'] },
              { id: 4, name: 'Royal Collection', price: '₹52,999', features: ['Multi-Day Coverage', 'Unlimited Photos', 'Premium Album'] }
            ].map((product) => (
              <div
                key={product.id}
                className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-[#c1b4a0]/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={`/cart${product.id}.webp`}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Heart className="absolute top-4 right-4 h-6 w-6 text-white/70 hover:text-[#c1b4a0] hover:scale-125 transition-all duration-300 cursor-pointer" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4" style={{ color: '#c1b4a0' }} />
                      ))}
                    </div>
                  </div>

                  <p className="text-3xl font-bold" style={{ color: '#c1b4a0' }}>{product.price}</p>

                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c1b4a0' }}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
  onClick={() =>
    navigate('/booknow', { state: { package: product } })
  }
  className="w-full bg-[#c1b4a0] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c1b4a0]/25 flex items-center justify-center space-x-2 cursor-pointer hover:bg-red-600 hover:text-white"
>
  <span>Book Now</span>
</button>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-10 px-6 bg-gradient-to-b from-red-900 to-[#978e80]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-2">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #c1b4a0, #c1b4a0)' }}>
              Our Story
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Founded with a passion for capturing life's most precious moments, Dilse Productions
            has been creating timeless memories for couples across the country. Our team of
            experienced photographers and cinematographers work tirelessly to ensure every
            emotion, every smile, and every tear of joy is preserved forever.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { number: '500+', label: 'Weddings Captured' },
              { number: '50+', label: 'Awards Won' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#c1b4a0' }}>{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section: Text + Button + Video */}
      <div className="w-full h-[60vh] relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c1b4a0] mb-4 ">
            Time is a Beautiful thing.
          </h2>
          <Link to="/explorefilms">
            <button className="px-6 py-3 bg-[#c1b4a0] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
              Explore More Films
            </button>
          </Link>

        </div>

        <video
          src="/home2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Customer Reviews Layered Section */}
      <section className="w-full bg-gradient-to-b from-[#978e80] to-red-900 py-20 overflow-hidden">
        <h2 className="text-center text-5xl font-bold text-[#c1b4a0] mb-8 animate-fade-in">
          𝓦𝓱𝓪𝓽  𝓞𝓾𝓻  𝓒𝓾𝓼𝓽😍𝓶𝓮𝓻'𝓼  𝓢𝓪𝔂
        </h2>

        <div 
          ref={containerRef}
          className="relative w-full h-96 flex items-center justify-center px-6 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          style={{ perspective: '1000px' }}
        >
          {reviews.map((review, index) => {
            const style = getReviewStyle(index);
            
            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out"
                style={style}
              >
                <div className="w-90 h-72 flex flex-col justify-center items-center text-center px-8 py-8 bg-gradient-to-br from-[#6f3d37] to-[#5a2e29] rounded-3xl text-white shadow-2xl border border-[#c1b4a0]/30 backdrop-blur-sm">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-6 text-[#fc7b19]">{review.name}</h4>
                  <p className="text-sm text-white/90 leading-relaxed line-clamp-4">
                    "{review.text}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Navigation dots */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentReviewIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className={`relative transition-all duration-300 ${
                index === currentReviewIndex
                  ? 'w-4 h-4 bg-[#c1b4a0] scale-125 shadow-lg'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-110'
              } rounded-full`}
            >
              {index === currentReviewIndex && (
                <div className="absolute inset-0 bg-[#c1b4a0] rounded-full animate-ping opacity-20"></div>
              )}
            </button>
          ))}
        </div>

        {/* Control indicators */}
        <div className="flex justify-center items-center space-x-8 mt-8 text-[#c1b4a0]/70 text-sm">
          {/* <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#c1b4a0]/50 rounded-full"></div>
            <span>Scroll with mouse wheel</span>
          </div> */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#c1b4a0]/50 rounded-full"></div>
            <span>Drag to navigate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Manual mode'}</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;