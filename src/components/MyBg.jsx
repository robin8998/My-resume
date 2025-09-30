import React from 'react';

const MyBg = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <img
        src="/images/portfolioImg.jpg"
        alt="Background"
        className="w-full h-full object-cover"
        style={{
          // Ensure the image scales correctly while covering the entire area
          objectFit: 'cover',
          // Use 'auto' height to maintain aspect ratio, and width 100%
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default MyBg;
