const HeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative pt-24 sm:pt-0">
      <div className="w-[95%] sm:w-[80%] md:w-[70%] flex flex-col items-center justify-center text-center z-30">
        <div className="w-fit bg-neutral-50 border border-neutral-200 px-5 sm:px-7 py-2 mb-6 sm:mb-9 text-[10px] sm:text-sm rounded-full font-comfortaa">
          <p>Best software services in the planet</p>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl leading-tight font-extralight">
          Land on a Lengendary{" "}
          <span className="text-blue-600 font-comfortaa">Brand Planet</span>
        </h1>

        <div className="text-[10px] md:text-sm mt-7 bg-blue-600/85 text-white px-10 py-2 rounded-full">
          Coming Soon...
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-end [&>*]:blur-md [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:hover:h-[100%] backdrop-blur-2xl z-0">
        <div className="animated1 w-[50px] h-[70%]  bg-gradient-to-t from-blue-500 to-transparent"></div>
        <div className="animated2 w-[70px] h-[50%] bg-gradient-to-t from-yellow-500 to-transparent"></div>
        <div className="animated3 w-[40px] h-[30%] bg-gradient-to-t from-red-500 to-transparent"></div>

        <div className="animated1 w-[50px] h-[60%]  bg-gradient-to-t from-green-400 to-transparent"></div>
        <div className="animated2 w-[65px] h-[80%] bg-gradient-to-t from-fuchsia-500 to-transparent"></div>
        <div className="animated1 w-[70px] h-[40%] bg-gradient-to-t from-lime-400 to-transparent"></div>
        <div className="animated3 w-[80px] h-[60%] bg-gradient-to-t from-neutral-500 to-transparent"></div>
        <div className=" w-[80px] h-[40%] bg-gradient-to-t from-amber-700 to-transparent"></div>
        <div className="animated1 w-[80px] h-[30%] bg-gradient-to-t from-sky-500 to-transparent"></div>
        <div className="animated2 w-[80px] h-[50%] bg-gradient-to-t from-teal-500 to-transparent"></div>
        <div className="animated1 w-[80px] h-[70%] bg-gradient-to-t from-yellow-200 to-transparent"></div>
        <div className=" w-[50px] h-[70%]  bg-gradient-to-t from-blue-500 to-transparent"></div>
        <div className="animated2 w-[70px] h-[50%] bg-gradient-to-t from-yellow-500 to-transparent"></div>
        <div className="animated1 w-[40px] h-[30%] bg-gradient-to-t from-red-500 to-transparent"></div>

        <div className="animated3 w-[50px] h-[60%]  bg-gradient-to-t from-green-400 to-transparent"></div>
        <div className=" w-[65px] h-[80%] bg-gradient-to-t from-fuchsia-500 to-transparent"></div>
        <div className="animated2 w-[70px] h-[40%] bg-gradient-to-t from-lime-400 to-transparent"></div>
        <div className="animated1 w-[80px] h-[60%] bg-gradient-to-t from-neutral-500 to-transparent"></div>
        <div className=" w-[80px] h-[40%] bg-gradient-to-t from-amber-700 to-transparent"></div>
        <div className="animated3 w-[80px] h-[30%] bg-gradient-to-t from-sky-500 to-transparent"></div>
        <div className="animated2 w-[80px] h-[50%] bg-gradient-to-t from-teal-500 to-transparent"></div>
        <div className="animated1 w-[80px] h-[70%] bg-gradient-to-t from-yellow-200 to-transparent"></div>
      </div>
    </div>
  );
};

export default HeroSection;
