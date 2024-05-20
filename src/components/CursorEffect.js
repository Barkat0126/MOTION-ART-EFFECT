import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CursorEffect = () => {
  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const elements = document.querySelectorAll('.cursor-effect');

      elements.forEach(element => {
        gsap.to(element, {
          x: clientX,
          y: clientY,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-effect fixed top-0 left-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full pointer-events-none mix-blend-difference"></div>
    </>
  );
};

export default CursorEffect;
