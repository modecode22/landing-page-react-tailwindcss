import React from "react";
import img from "../assets/Group.png";


function NavBar() {
  return (
    <div className="flex items-center justify-between h-20 bg-slate-50 shadow-xl opacity-80">
      <div className="drop-shadow-md bg-gradient-to-r from-green-500 to-sky-500 mr-5 bg-clip-text text-transparent bg-[length:200%] tr h-12 ">
        جمعية المعالي
      </div>
      <div className="ml-5">
        <div className="relative peer z-10 cursor-pointer  shadow-sm shadow-black border-2 hover:shadow-none border-white bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center group">
          <div className="absolute opacity-0 group-hover:opacity-100  duration-300  group-hover:translate-x-24 group-hover:scale-100 scale-[0.1] font-black text-xl text-sky-500 w-full flex items-center ">
           الرئيسية 
          </div>
          <img
            src={img}
            className="w-12 group-hover:rotate-6 z-10 duration-300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
