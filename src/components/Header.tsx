import { Link } from "react-router-dom";
import Icon from "../assets/icon.png";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between  py-5 px-28 bg-transparent backdrop-blur-3xl border-b border-b-slate-200 fixed top-0 left-0 z-50">
      {/* Left section */}

      <div className="flex items-center space-x-15">
        <div className="flex items-center space-x-3">
          <img src={Icon} alt="hashdome icon" className="w-7" />
          <h1 className="text-2xl font-medium text-blue-600">Hashdome</h1>
        </div>

        <div className="flex items-center space-x-10">
          <Link to={""}>About</Link>
          <Link to={""}>Solutions</Link>
          <Link to={""}>Blogs</Link>
          <Link to={""}>Solutions</Link>
          <Link to={""}>Pricing</Link>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center">
        <button className="bg-blue-600 text-neutral-200 text-sm rounded-full px-8 py-2 cursor-pointer">
          Book a quick call
        </button>
      </div>
    </header>
  );
};

export default Header;
