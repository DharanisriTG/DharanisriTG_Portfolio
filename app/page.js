// pages/index.js
import Image from 'next/image';
import { Syncopate } from 'next/font/google';

const syncopate = Syncopate({
  weight: ['400', '700'], 
  subsets: ['latin'],     
});

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-[7%]">
      <div className="relative w-screen max-w-full">
        {/* Background Image */}
        <div className="relative w-screen h-auto group">
          <Image 
            src="/Wireframe.png" // Add your image path here
            alt="Background"
            width={1920} // Large enough to cover full screen width
            height={990} // Adjust based on your image aspect ratio
            className="w-screen h-auto object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* Overlaying Text */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 rounded-lg ${syncopate.className}`}>
            <h1 className="text-white text-7xl mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-300">
              DHARANI SRI TG
            </h1>
            <p className="text-white text-xl transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-300">
              UI/UX DESIGNER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
