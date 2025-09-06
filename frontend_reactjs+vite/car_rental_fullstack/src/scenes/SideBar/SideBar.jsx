import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove all tokens
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userToken"); // remove if you store user token

    // Optionally clear all localStorage
    // localStorage.clear();
    setIsOpen(false);
    localStorage.removeItem("cart");

    // Redirect to login page
    navigate("/home");
  };
  const token = localStorage.getItem("adminToken");
  let isAdmin = false;

  if (token) {
    try {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      isAdmin = decoded.roles?.includes("ROLE_Admin");
    } catch {
      isAdmin = false;
    }
  }

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "ContactUs",
    "FAQ",
    "Login",
    "Register",
    ...(isAdmin ? ["admin"] : []),
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-80 lg:w-96 bg-black bg-opacity-80 backdrop-blur-sm text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 mt-5">
          {/* Other sidebar buttons */}
          <button
            onClick={handleLogout}
            className="mt-4  px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white text-sm sm:text-base"
          >
            Logout
          </button>
          <button
            className="cursor-pointer p-3 rounded-full bg-[oklch(77.7%_0.152_181.912)]"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-4 text-3xl font-extrabold px-8 gap-5">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.replace(/\s/g, "")}`}
                className="hover:text-[oklch(77.7%_0.152_181.912)]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="w-full px-8 mt-10">
          <h2 className="font-bold text-xl">For More Informations</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            <li className="flex gap-2 items-center">
              <CiMobile4 className="text-lg" /> 1-567-124-44227
            </li>
            <li className="flex gap-2 items-center">
              <IoAlarmOutline className="text-lg" /> Mon - Sat 8.00 - 18.00
            </li>
          </ul>
          <ul className="my-7 flex flex-wrap gap-4">
            <li>
              <RiFacebookBoxFill className="text-blue-900 w-5 h-5  md:w-10 md:h-10" />
            </li>
            <li>
              <FaTwitter className="text-blue-400 w-5 h-5 md:w-9 md:h-9" />
            </li>
            <li>
              <TfiYoutube className="text-red-700 w-5 h-5  md:w-9 md:h-9" />
            </li>
            <li>
              <FaPinterest className="text-red-700 w-5 h-5  md:w-9 md:h-9" />
            </li>
            <li>
              <FaInstagram className="text-pink-500 w-5 h-5  md:w-9 md:h-9" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
