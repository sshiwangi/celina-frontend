"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-4 items-center flex justify-between w-full backdrop-blur-sm ">
      <div className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
        Celina
      </div>

      <div className="flex items-center gap-8">
        <div className="flex gap-8  backdrop-blur-md px-8 py-2 rounded-full">
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Product
          </a>
        </div>
      </div>
      <Link
        href={"/dashboard"}
        className="px-6 py-2.5 flex items-center rounded-full bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/10 transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]"
      >
        Dashboard
      </Link>
    </nav>
  );
};

export default Navbar;
