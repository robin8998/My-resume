import React from 'react';

const MyBg = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <img
        src="/images/portfolioImg.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MyBg;