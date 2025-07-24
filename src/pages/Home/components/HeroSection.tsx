const HeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div className="w-[60%] flex flex-col items-center justify-center text-center">
        <div className="w-fit bg-yellow-200 px-7 py-2 text-sm rounded-full font-semibold font-comfortaa">
          <p>Best software services in the planet</p>
        </div>

        <h1 className="text-7xl leading-28">
          Land on a Lengendary{" "}
          <span className="text-blue-600 font-medium font-comfortaa">
            Brand Planet
          </span>
        </h1>

        <button className="mt-3 border-2 border-blue-600 text-blue-600 rounded-full px-20 py-2 cursor-pointer">
          Explore
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full ">
        <svg height="80" width="1440" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="720" ry="150" cx="720" cy="160" fill="#155dfc" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
