import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Ball() {
  const ballRef = useRef();

  const [ballX, setBallX] = useState(0);
  const [ballY, setBallY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const speed = 0.03;

  function animate(mX, mY) {
    const distX = mX - ballX;
    const distY = mY - ballY;

    setBallX(ballX + (distX * speed));
    setBallY(ballY + (distY * speed));

    ballRef.current.style.left = `${ballX}px`;
    ballRef.current.style.top = `${ballY}px`;
    console.log(ballRef.current.style.left);
    console.log(ballRef.current.style.top);
  }

  const handleMouseMove = (ev) => {
    setMouseX(ev.pageX);
    setMouseY(ev.pageY);
  };

  useEffect(() => {
    animate(mouseX, mouseY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BallStyles ref={ballRef} />
  );
}

const BallStyles = styled.div`
  background: white;
  width: 200px;
  height: 200px;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);

  mix-blend-mode: difference;
  z-index: 1;
`;
