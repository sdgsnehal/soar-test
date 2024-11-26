import { FaSearch } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left side: Soar Task Logo and Title */}
      <div className="flex items-center space-x-2 gap-10">
        <span className="text-xl font-semibold text-blue-800">Soar Task</span>
        <span className="text-xl font-semibold text-gray-500">Overview</span>
      </div>

      {/* Center: Search Bar */}
      {/* <div className="flex items-center border border-gray-300 rounded-full p-2 w-96">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for something"
          className="ml-2 p-1 w-full outline-none"
        />
      </div> */}

      {/* Right side: Icons and Profile */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-full p-2 w-96">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for something"
            className="ml-2 p-1 w-full outline-none"
          />
        </div>
        <FiSettings className="text-xl text-gray-500 hover:text-blue-500 cursor-pointer" />
        <IoNotificationsOutline className="text-xl text-gray-500 hover:text-blue-500 cursor-pointer" />
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Navbar;
