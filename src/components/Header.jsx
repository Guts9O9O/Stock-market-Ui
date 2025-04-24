import logo from "../assets/logo.png";

const Header = () => {
    return (
      <div className="bg-cardDark p-6 rounded-2xl shadow-md flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Left: Company Name */}
        <div className="flex items-center space-x-4">
        <img src={logo} alt="Company logo" className="w-10 h-10" />
        <h2 className="text-xl font-semibold">
          AAPL{" "}
          <span className="font-normal text-gray-300">
            Apple Inc.
          </span>
        </h2>
      </div>
  
        {/* Right: Stock Price */}
        <div className="mt-4 md:mt-0 text-right">
        <div className="flex items-baseline justify-end space-x-2">
          <span className="text-3xl font-bold text-green-400">
            $25,901
          </span>
          <span className="inline-flex items-center bg-green-900 bg-opacity-50 px-2 py-1 rounded-full text-sm text-green-400">
            ▲ 0.27%
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          28 January, 4:00 pm EST | Market Open
        </p>
      </div>
      </div>
    )
  }
  
  export default Header;
  