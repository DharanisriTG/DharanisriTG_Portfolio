"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Syncopate } from 'next/font/google';
import { motion } from 'framer-motion';

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function About() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null); 

  const handleScroll = () => {
    setShowContent(!showContent);
  };

  useEffect(() => {
    if (showContent) {
      
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showContent]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const imageHover = {
    hover: { scale: 1.05 },
  };

  const textFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5 } },
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-12">
      <h1 className={`text-4xl mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent ${syncopate.className}`}>
        About
      </h1>


      {/* Main profile section */}
      <div className="flex flex-col md:flex-row items-center mb-6 mt-6 space-y-4 md:space-y-0">
        {/* Image with framer-motion animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          whileHover="hover"
          className="w-full md:w-auto" 
        >
          <motion.div variants={imageHover} className="w-[500px] h-[250px]"> 
            <Image
              src="/About Dharani.avif"
              alt="Dharani Sri TG"
              width={500}
              height={250}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Text with framer-motion animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textFadeIn}
          className="md:ml-6 flex-1"
        >
          <p className="ml-8 text-base text-justify">
            I am Dharani Sri TG, a final-year engineering student. I do UI/UX Designing. I have designed several websites and apps with various themes focusing on user-centric and visually appealing designs. Currently, I’m integrating 3D models into my projects using Webflow and Wix Studio, leveraging tools like Spline to enhance interactivity and visual appeal.
          </p>
          <p className={`mt-10 ml-8 text-xl italic ${syncopate.className}`}>
            “LEARNING BY DOING”
          </p>
        </motion.div>
      </div>

      {/* Button with improved interaction */}
      <motion.button
        onClick={handleScroll}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`text-white py-2 px-6 text-lg mt-24 cursor-none transition-all duration-300 ease-in-out hover:text-xl ${syncopate.className}`}
      >
        ↓ Discover More
      </motion.button>

      {/* Content revealed on click */}
      {showContent && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full mt-16"
          ref={contentRef} 
        >
          <hr className="border-gray-600 mb-8" />
          
          {/* Education section */}
          <div className="mb-8">
            <h2 className={`text-xl mb-3 ${syncopate.className}`}>EDUCATION</h2>
            <p className="text-lg leading-relaxed">B.E. ECE 2021 - 2025 Panimalar Institute Of Technology, Chennai.</p>
          </div>
          
          <hr className="border-gray-600 mb-8" />

          {/* Experience section */}
          <div className="mb-8">
            <h2 className={`text-xl mb-3 ${syncopate.className}`}>EXPERIENCES</h2>
            <p className={`text-lg leading-relaxed mb-4 ${syncopate.className}`}>UI/UX INTERNSHIPS</p>
            <ul className="text-lg space-y-2 mt-2">
              <li>COGNIFYZ TECHNOLOGY - AUGUST-SEPTEMBER 2024</li>
              <li>CODSOFT - AUGUST-SEPTEMBER 2024</li>
              <li>NEXT24 TECHNOLOGY AND SERVICES - AUGUST-OCTOBER 2024</li>
            </ul>
          </div>
          
          <hr className="border-gray-600 mb-8" />

          {/* Certifications section */}
          <div className="mb-8">
            <h2 className={`text-xl mb-3 ${syncopate.className}`}>CERTIFICATIONS</h2>
            <ul className="mt-2 text-lg space-y-2">
              <li>Google UX Design Certificate - Empathize, Define, and Ideate, Coursera</li>
              <li>Google UX Design Certificate - Foundations of UX Design, Coursera</li>
              <li>Udemy - Adobe Illustrator</li>
              <li>Coursera Project Network - Mobile App Interface with Moqups</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
