import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center animate-bgChange">
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="flex items-center justify-center h-full relative z-10 text-center text-white px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">PUBLISH YOUR PASSION, YOUR WAY</h1>
          <p className="text-lg mb-6">explore the latest trends, tips, and insights in the world of blogging.</p>
          <a href="/blogs" className="bg-[#F29C32] text-white px-6 py-3 rounded-md hover:bg-[#333333]">View Blogs</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
