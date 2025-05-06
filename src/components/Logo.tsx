import React from 'react';

const Logo = () => (
  <div className="relative w-16 h-16 mb-8">
    {/* Main circle with gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full"></div>
    
    {/* Inner black circle */}
    <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
      {/* Abstract emotion representation */}
      <div className="relative w-8 h-8">
        {/* Wave-like shapes representing emotional flow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-1 h-4 bg-orange-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-4 h-1 bg-orange-400 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-orange-400 rounded-full transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-1/2 right-0 w-4 h-1 bg-orange-400 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
        {/* Central dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  </div>
);

export default Logo; 