import { FaHome, FaCreditCard, FaMoneyBillAlt, FaCog } from "react-icons/fa";
import { FiBriefcase, FiBarChart, FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex max-h-screen">
      {/* Sidebar */}
      <div className="w-52 bg-white text-black h-screen p-4">
        <ul className="space-y-6">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <MdAccountCircle />
              <span>Accounts</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <FiBriefcase />
              <span>Investments</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <FaCreditCard />
              <span>Credit Cards</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <FiShoppingCart />
              <span>Loans</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <FiBarChart />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <FaMoneyBillAlt />
              <span>My Privileges</span>
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <FaCog />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      {/* <div className="flex-1 p-8"> */}
      {/* Add your main content here */}
      {/* <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1> */}
      {/* </div> */}
    </div>
  );
}

export default Sidebar;
