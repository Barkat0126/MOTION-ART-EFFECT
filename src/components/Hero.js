import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(".hero-text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section className="hero bg-gradient-to-r from-orange-500 to-blue-500 h-screen flex items-center justify-center">
      <h1 className="hero-text text-6xl font-bold text-white">Welcome to Motion Art Effect</h1>
    </section>
  );
};

export default Hero;
