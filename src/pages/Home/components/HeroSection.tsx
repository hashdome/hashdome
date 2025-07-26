const HeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative pt-24 sm:pt-0">
      <div className="w-[95%] sm:w-[80%] md:w-[70%] flex flex-col items-center justify-center text-center">
        <div className="w-fit bg-neutral-50 border border-neutral-200 px-5 sm:px-7 py-2 mb-6 sm:mb-9 text-[10px] sm:text-sm rounded-full font-comfortaa">
          <p>Best software services in the planet</p>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl leading-tight font-extralight">
          Land on a Lengendary{" "}
          <span className="text-blue-600 font-comfortaa">Brand Planet</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
