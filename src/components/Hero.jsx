import React from 'react'

function Hero() {
  return (
    <div className="p-5 gap-5 grid grid-cols-3">
      <div className="p-5  bg-slate-100 bg-opacity-30 duration-100 blur-sm hover:blur-none cursor-pointer shadow-md hover:shadow-none shadow-black  hover:bg-gradient-to-r from-greeny to-skyy col-span-2 flex items-center bg-[length:200%] tr justify-center rounded-lg">
        السلام عليكم ورحمة الله تعالى وبركاته
      </div>
      <div className="p-5  bg-slate-100 bg-opacity-30 duration-100 blur-sm hover:blur-none cursor-pointer shadow-md hover:shadow-none shadow-black  hover:bg-gradient-to-r from-greeny to-skyy  flex items-center bg-[length:200%] tr justify-center rounded-lg">
        السلام عليكم ورحمة الله تعالى وبركاته
      </div>
    </div>
  );
}

export default Hero
