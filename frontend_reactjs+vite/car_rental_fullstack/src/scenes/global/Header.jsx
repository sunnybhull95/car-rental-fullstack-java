import Section from "./Section";
import logo from "../global/imagesandvideo/websiteLogo.png";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  const navigate = useNavigate();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // "brand", "type" or null
  const [isHoveredPage, setIsHoveredPage] = useState(false);

  const showDropdown = isHovered || activeSubMenu !== null;
  const page = isHoveredPage;

  //changes color
  const [color, setColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Section className=" px-5 sticky top-0 text-white flex justify-between py-6 z-30 transition-all duration-300 bg-black">
        <NavLink to="/home" className="pl-2">
          <img src={logo} width="175px" height="24px" />
        </NavLink>

        <ul className="flex pr-2 pt-1 gap-x-10 text-sm font-semibold relative z-50">
          {/* Home */}
          <li
            className="hidden lg:block"
            style={{ color: "oklch(77.7% 0.152 181.912)" }}
          >
            <NavLink to="/home" className="flex">
              Home
            </NavLink>
          </li>
          {/* Car Dropdown */}
          <li
            className="hidden relative lg:block hover:text-[oklch(77.7%_0.152_181.912)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setActiveSubMenu(null);
            }}
          >
            <NavLink to="/home" className="flex">
              Car <FaAngleDown className="mt-1 ml-1" />
            </NavLink>

            {showDropdown && (
              <div className="absolute mt-2 left-0 w-60 bg-black text-white p-4 rounded shadow space-y-2 z-50">
                {/* Car By Brand */}
                <div
                  onMouseEnter={() => setActiveSubMenu("brand")}
                  onMouseLeave={() => setActiveSubMenu(null)}
                  className="flex justify-between items-center hover:text-[oklch(77.7%_0.152_181.912)] cursor-pointer border-b border-[oklch(77.7%_0.152_181.912)]  hover:border-white py-2 relative"
                >
                  Car By Brand <IoIosArrowForward />
                  {/* Submenu - Brand */}
                  {activeSubMenu === "brand" && (
                    <div className="absolute  flex flex-col left-full top-0  w-46 bg-black text-white p-3 rounded shadow space-y-1 transition-opacity duration-300 z-50 px-4">
                      <NavLink
                        to="/car/bmw"
                        className="hover:text-[oklch(77.7%_0.152_181.912)] border-b border-[oklch(77.7%_0.152_181.912)] hover:border-white py-1 "
                        // onClick={() => handleClick("BMW")}
                      >
                        BMW
                      </NavLink>
                      <NavLink
                        to="/car/audi"
                        className="hover:text-[oklch(77.7%_0.152_181.912)] border-b border-[oklch(77.7%_0.152_181.912)] hover:border-white py-1"
                      >
                        Audi
                      </NavLink>
                      <NavLink
                        to="/car/mercedes"
                        className="hover:text-[oklch(77.7%_0.152_181.912)] border-b border-[oklch(77.7%_0.152_181.912)] hover:border-white py-1"
                      >
                        Mercedes
                      </NavLink>
                      <NavLink
                        to="/car/lexus"
                        className="hover:text-[oklch(77.7%_0.152_181.912)]"
                      >
                        Lexus
                      </NavLink>
                    </div>
                  )}
                </div>

                {/* Car By Type */}
                <div
                  onMouseEnter={() => setActiveSubMenu("type")}
                  onMouseLeave={() => setActiveSubMenu(null)}
                  className="flex justify-between items-center hover:text-[oklch(77.7%_0.152_181.912)] cursor-pointer py-0 relative"
                >
                  Car By Type <IoIosArrowForward />
                  {/* Submenu - Type */}
                  {activeSubMenu === "type" && (
                    <div className="absolute   flex flex-col left-full top-[-10]  w-46 bg-black text-white p-3 rounded shadow space-y-1 transition-opacity duration-300 z-50 px-6">
                      <NavLink
                        to="/carType/SUV"
                        className="hover:text-[oklch(77.7%_0.152_181.912)] border-b border-[oklch(77.7%_0.152_181.912)] hover:border-white py-1 "
                      >
                        SUV
                      </NavLink>
                      <NavLink
                        to="/carType/sedan"
                        className="hover:text-[oklch(77.7%_0.152_181.912)] border-b border-[oklch(77.7%_0.152_181.912)] hover:border-white py-1"
                      >
                        SEDAN
                      </NavLink>
                      <NavLink
                        to="/carType/coupe"
                        className="hover:text-[oklch(77.7%_0.152_181.912)] py-1"
                      >
                        COUPE
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
          {/* Pages */}

          {/* */}
          <li className="hidden lg:block hover:text-[oklch(77.7%_0.152_181.912)]">
            <NavLink to="/aboutUs" className="flex">
              AboutUs
            </NavLink>
          </li>
          {/* */}
          <li className="hidden lg:block hover:text-[oklch(77.7%_0.152_181.912)]">
            <NavLink to="/services" className="flex">
              Services
            </NavLink>
          </li>
          {/* */}
          <li className="hidden lg:block hover:text-[oklch(77.7%_0.152_181.912)]">
            <NavLink to="/contactUs" className="flex">
              ContactUs
            </NavLink>
          </li>
          {/* */}
          <li className="hidden lg:block hover:text-[oklch(77.7%_0.152_181.912)]">
            <NavLink to="/faq" className="flex">
              Faq
            </NavLink>
          </li>

          {/* Menu Icons */}
          <li className="flex ">
            <button
              onClick={() => setSideBarOpen(true)}
              className="cursor-pointer mb-1"
            >
              <FaBars />
            </button>
            <NavLink
              to="/cart/:cartByModel"
              className="border-none  bg-[oklch(77.7%_0.152_181.912)] cursor-pointer border rounded-full p-2 ml-1.5 text-center"
            >
              <LuShoppingCart className="mx-auto h-4 w-4" />
            </NavLink>
            {/* <NavLink
              to="/login"
              className="border-none  text-[oklch(77.7%_0.152_181.912)] cursor-pointer border rounded-full p-1.5 ml-4 text-center"
            >
              Login
            </NavLink>{" "}
            <NavLink
              to="/register"
              className="border-none text-[oklch(77.7%_0.152_181.912)] cursor-pointer border rounded-full p-1.5 ml-1.5 text-center"
            >
              Register
            </NavLink> */}
          </li>
        </ul>
      </Section>
      <SideBar isOpen={sideBarOpen} setIsOpen={setSideBarOpen} />
    </>
  );
};

export default Header;
