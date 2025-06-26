
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#978e80] via-amber-800 to-red-900 overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              background: `radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)`,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite ${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main 3D Container */}
      <div className="relative w-80 h-80 transform-gpu" style={{ perspective: '1000px' }}>
        {/* Central Rotating Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-64 h-64 border-4 border-amber-300/30 rounded-full"
            style={{
              animation: 'rotateRing 8s linear infinite',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(60deg)',
            }}
          />
        </div>

        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                width: '40px',
                height: '40px',
                transform: `
                  translate(-50%, -50%) 
                  rotateY(${i * 30}deg) 
                  translateZ(120px) 
                  rotateX(${Math.sin(i) * 20}deg)
                `,
                animation: `orbitPulse ${3 + i * 0.2}s ease-in-out infinite ${i * 0.1}s`,
              }}
            >
              <div
                className="w-full h-full bg-gradient-to-r from-amber-400 to-red-400 rounded-lg shadow-2xl"
                style={{
                  clipPath: i % 3 === 0 
                    ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                    : i % 3 === 1 
                    ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))',
                }}
              />
            </div>
          ))}
        </div>

        {/* Spinning Layers */}
        {Array.from({ length: 5 }).map((_, layer) => (
          <div
            key={layer}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation: `spin3D ${4 + layer}s linear infinite ${layer % 2 === 0 ? 'reverse' : 'normal'}`,
              transformStyle: 'preserve-3d',
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${20 + layer * 8}px`,
                  height: `${20 + layer * 8}px`,
                  transform: `
                    rotateY(${i * 45}deg) 
                    translateZ(${80 + layer * 20}px)
                    rotateX(${layer * 15}deg)
                  `,
                }}
              >
                <div
                  className="w-full h-full rounded-full bg-gradient-to-r from-amber-300 to-red-300 opacity-70"
                  style={{
                    filter: `blur(${layer * 0.5}px) drop-shadow(0 0 10px currentColor)`,
                    animation: `pulse ${2 + layer * 0.5}s ease-in-out infinite ${i * 0.1}s`,
                  }}
                />
              </div>
            ))}
          </div>
        ))}

        {/* Center Pulsing Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 via-red-400 to-amber-400"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(251, 191, 36, 0.8))',
              animation: 'corePulse 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-300 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particleFloat ${Math.random() * 4 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
                filter: 'drop-shadow(0 0 6px currentColor)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        @keyframes rotateRing {
          0% {
            transform: rotateX(60deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(60deg) rotateY(360deg);
          }
        }

        @keyframes orbitPulse {
          0%, 100% {
            transform: translate(-50%, -50%) rotateY(var(--rotate-y, 0deg)) translateZ(120px) rotateX(var(--rotate-x, 0deg)) scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) rotateY(var(--rotate-y, 0deg)) translateZ(150px) rotateX(var(--rotate-x, 0deg)) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes spin3D {
          0% {
            transform: rotateY(0deg) rotateX(15deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(15deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes corePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-25px) translateX(5px) rotate(270deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;