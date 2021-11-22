import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Gradient() {
  const gradientRef = useRef();

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const animateGradient = (mX, mY) => {
    const windowWidth = getWindowDimensions().width;
    const windowHeight = getWindowDimensions().height;

    // const mouseXpercentage = Math.round((mX / windowWidth) * 100);
    // const mouseYpercentage = Math.round((mY / windowHeight) * 100);
    const mouseXdeg = Math.round((mX / windowWidth) * 360);
    const mouseYdeg = Math.round((mY / windowHeight) * 360);
    const mouseZdeg = Math.round(((mX + mY) / (windowWidth + windowHeight)) * 360);
    console.log(mY, windowHeight);

    // gradientRef.current.style.background = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #F5CE7A, #F4BAF0, #7BABF5)`;
    // gradientRef.current.style.background = `linear-gradient(${mouseXdeg}deg, rgba(255,0,0,0.8), rgba(255,0,0,0) 70.71%), `
    //                                      + `linear-gradient(${mouseYdeg}deg, rgba(0,255,0,0.8), rgba(0,255,0,0) 70.71%), `
    //                                      + `linear-gradient(${mouseZdeg}deg, rgba(0,0,255,0.8), rgba(0,0,255,0) 70.71%)`;
    gradientRef.current.style.background = `linear-gradient(${mouseXdeg}deg, rgba(245, 206, 122, 1), rgba(245, 206, 122, 0.5) 70.71%), `
                                         + `linear-gradient(${mouseYdeg}deg, rgba(244, 186, 240, 1), rgba(244, 186, 240, 0.5) 70.71%), `
                                         + `linear-gradient(${mouseZdeg}deg, rgba(123, 171, 245, 1), rgba(123, 171, 245, 0.5) 70.71%)`;
  };

  useEffect(() => {
    animateGradient(mouseX, mouseY);
  }, [mouseX, mouseY]);

  const handleMouseMove = (ev) => {
    setMouseX(ev.pageX);
    setMouseY(ev.pageY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <GradientStyles ref={gradientRef} />
  );
}

const GradientStyles = styled.div`
  z-index: -1;
  position:fixed;
  top:0px;
  left:0px;
  height:100%;
  width:100%;

  /*Fallback if gradeints don't work */
  background: #9b59b6;
  /*Linear gradient... */
  /* background:
    radial-gradient(
     at center, #3498db, #9b59b6
    ); */
  background: linear-gradient(200deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  /* background: linear-gradient(217deg, rgba(245, 206, 122, 0.5), rgba(245, 206, 122, 1) 70.71%), linear-gradient(127deg, rgb(123, 171, 245, 0.5), rgb(123, 171, 245, 1) 70.71%), linear-gradient(336deg, rgba(244, 186, 240, 0.5), rgba(244, 186, 240, 1) 70.71%); */
`;
