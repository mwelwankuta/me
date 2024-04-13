export const NavBar = () => {
  return (
    <div className="flex items-center justify-between container mx-auto px-5">
      <div>
        <p className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-700  via-orange-500 to-teal-900  hover:animate-rainbow duration-200">
          @Mwelwa Nkuta
        </p>
      </div>
      <div>
        <a href="#projects" className="lg:hidden flex px-3 py-2 text-white shadow-xl shadow-orange-500 rounded-full bg-orange-600">
          Go to Projects
        </a>
      </div>
    </div>
  );
};
