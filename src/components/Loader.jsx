import React from 'react';
import { Dumbbell } from 'lucide-react';

const GymLoader = () => {
  return (
    <>
      <style jsx>{`
        @keyframes loadingProgress {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        .progress-bar {
          animation: loadingProgress 4s ease-in-out infinite;
        }
      `}</style>
      
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
        <div className="relative w-40 h-40">
          {/* Circular track */}
          <div className="w-full h-full rounded-full border-8 border-gray-700"></div>
          
          {/* Moving dumbbell */}
          <div className="absolute top-0 left-0 w-full h-full animate-spin [animation-duration:3s] [animation-timing-function:linear]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2">
              <Dumbbell className="w-8 h-8 text-gray-900" />
            </div>
          </div>
          
          {/* Pulsing "LOADING" text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl animate-pulse">
            LOADING
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-2 bg-gray-700 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-green-500 rounded-full progress-bar"></div>
        </div>
      </div>
    </>
  );
};

export default GymLoader;