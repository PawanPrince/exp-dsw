import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container-loader">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="aro" style={{ '--s': i }} />
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-loader {
    width: 300px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transform: perspective(600px) rotateX(60deg);
  }

  .aro {
    position: absolute;
    inset: calc(var(--s) * 10px);
    box-shadow: inset 0 0 80px dodgerblue;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    animation: pulseSpin 3s infinite ease-in-out both;
    animation-delay: calc(var(--s) * -0.1s);
  }

  @keyframes pulseSpin {
    0%, 100% {
      transform: translateZ(-100px) scaleX(-1);
    }
    50% {
      transform: translateZ(100px) scaleX(1);
    }
  }
`;

export default Loader;
