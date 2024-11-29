import React from 'react';
import Leftside from '../component/leftside';
import Middleside from '../component/middleside';
import Rightside from '../component/rightside';

function Home() {
  return (
    <div className="w-full h-[100%] bg-[#080710] text-white flex fixed">
      {/* Left Sidebar */}
      <div className="fixed w-[20%] px-4 py-6 bg-[#1b1f2a] border-r border-white/10 hidden md:block">
        <Leftside />
      </div>

      {/* Middle Section */}
      <div className="flex-1 px-4 py-6 ml-auto bg-[#10141b] border-x border-white/10 overflow-auto">
        <Middleside />
      </div>

      {/* Right Sidebar */}
      <div className="w-[25%] px-4 py-6 bg-[#1b1f2a] border-l border-white/10 hidden lg:block">
        <Rightside />
      </div>
    </div>
  );
}

export default Home;
