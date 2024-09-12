// components/CustomCursor.js
"use client";
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
    className="fixed w-8 h-8 bg-transparent border-2 border-white rounded-full shadow-lg pointer-events-none transition-transform duration-200 ease-in-out"
      style={{
        left: `${position.x - 16}px`, 
        top: `${position.y - 16}px`,  
      }}
    />
  );
};

export default CustomCursor;
