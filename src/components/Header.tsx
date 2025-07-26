import Icon from "../assets/icon.png";

const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between py-3 px-4 sm:px-8 md:px-16 lg:px-28 bg-transparent backdrop-blur-3xl border-b border-b-slate-200 fixed top-0 left-0 z-50 gap-3 sm:gap-0">
      {/* Left section */}
      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
        <img src={Icon} alt="hashdome icon" className="w-6 sm:w-7" />
        <h1 className="text-xl sm:text-2xl hidden sm:block font-medium text-blue-600">
          Hashdome
        </h1>
      </div>
      {/* Right section */}
      <div className="flex items-center">
        <button className="bg-blue-600 text-neutral-200 text-[10px] sm:text-sm rounded-full px-6 sm:px-8 py-2 cursor-pointer w-full sm:w-auto">
          Book a quick call
        </button>
      </div>
    </header>
  );
};

export default Header;
