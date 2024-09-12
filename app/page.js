"use client";
import Image from 'next/image';
import { Syncopate } from 'next/font/google';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const syncopate = Syncopate({
  weight: ['400', '700'], 
  subsets: ['latin'],     
});

export default function Home() {
  // Define animation variants for the image and text
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const scaleOnHover = {
    hover: { scale: 1.05 },
  };

  return (
    <div className="flex items-center justify-center mt-[7%]">
      <div className="relative w-screen max-w-full">
        {/* Background Image with animation */}
        <motion.div 
          className="relative w-screen h-auto group"
          initial="hidden"
          animate="visible"
          variants={fadeInUp} // Apply fadeInUp animation to the image container
        >
          <motion.div
            whileHover="hover" // Hover effect for scaling
            variants={scaleOnHover} // Scale up on hover
          >
            <Image 
              src="/Wireframe.png" // Add your image path here
              alt="Background"
              width={1920} // Large enough to cover full screen width
              height={990} // Adjust based on your image aspect ratio
              className="w-screen h-auto object-cover rounded-lg transition-transform duration-500 ease-in-out"
            />
          </motion.div>

          {/* Overlaying Text with animation */}
          <motion.div 
            className={`absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 rounded-lg ${syncopate.className}`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp} // Apply the same fadeInUp animation to the text
          >
            <motion.h1
              className=" text-white text-7xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1, color: '#ffffff' }} // Hover effect for text
              transition={{ duration: 0.3 }}
            >
              DHARANI SRI TG
            </motion.h1>
            <motion.p
              className="text-white text-xl"
              whileHover={{ scale: 1.1, color: '#e0e0e0' }} // Hover effect for text
              transition={{ duration: 0.3 }}
            >
              UI/UX DESIGNER
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
