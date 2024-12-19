"use client";
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-medium">Celina</div>

        <div className="flex items-center gap-8">
          <div className="flex gap-8 bg-white/10 backdrop-blur-md px-8 py-2 rounded-full">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Services
            </a>
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
              Resources
            </a>
          </div>
        </div>
        <button className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
