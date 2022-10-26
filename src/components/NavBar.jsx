import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-between h-20 bg-slate-50 shadow-xl opacity-80">
      <div className="drop-shadow-md bg-gradient-to-r from-green-500 to-sky-500 mr-5 bg-clip-text text-transparent bg-[length:200%] tr h-12 ">
        جمعية المعالي
      </div>
      <div className="ml-5">logo</div>
    </div>
  );
}

export default NavBar;
