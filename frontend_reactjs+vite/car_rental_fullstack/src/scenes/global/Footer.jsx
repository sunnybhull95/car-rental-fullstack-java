import Section from "./Section";
import { NavLink } from "react-router-dom";
//Icons
import { CiMobile4 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
//
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//
import logo from "../global/imagesandvideo/websiteLogo.png";

//
import { useState } from "react";

const Footer = () => {
  const [inpValue, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const valid = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inpValue);
  };

  const click = () => {
    if (inpValue.trim() === "") {
      setMessage("Please Enter You Email");
      setMessageColor("text-red-600");
    } else if (!valid(inpValue)) {
      setMessage("Please Enter a valid email");
      setMessageColor("text-red-600");
    } else {
      setMessage("Subscribed");
      setMessageColor("text-green-600");
    }
  };

  return (
    <>
      <Section>
        <div className="text-white pt-16 flex justify-center gap-10 flex-wrap md:flex-nowrap">
          <div className="w-85">
            <h2 className="font-bold text-xl">About Us</h2>
            <p className="my-6 text-white/80">
              About Us Getting dressed up and traveling with good friends makes
              for a shared, unforgettable experience.
            </p>
            <img src={logo} className="w-45" />
          </div>
          <div className="w-85">
            <h2 className="font-bold text-xl">Contact Info</h2>
            <ul className="mt-3">
              <li className="flex gap-2 text-white/80">
                <CiMobile4 className="mt-1 mb-4 text-lg" />
                1-567-124-44227
              </li>
              <li className="flex gap-2  text-white/80">
                <IoLocationOutline className="mb-4 text-lg" />
                184 Main Street East Perl Habour 8007
              </li>
              <li className="flex gap-2  text-white/80">
                <IoAlarmOutline className="mb-4 text-lg" />
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </li>
            </ul>

            {/*  */}
            <ul className="mt-3 flex md:flex-wrap  gap-4">
              <li>
                <RiFacebookBoxFill className="   text-blue-900 w-10 h-10" />
              </li>
              <li>
                <FaTwitter className=" text-blue-400 w-9 h-9" />
              </li>{" "}
              <li>
                <TfiYoutube className=" text-red-700 w-9 h-9" />
              </li>{" "}
              <li>
                <FaPinterest className=" text-red-700 w-9 h-9" />
              </li>{" "}
              <li>
                <FaInstagram className=" text-pink-500 w-9 h-9" />
              </li>
            </ul>
          </div>
          <div className="w-85">
            <h2 className="font-bold text-xl">Newsletter</h2>
            <p className="my-3 text-white/80">
              Don't miss a thing! Sign up to receive daily deals
            </p>
            <input
              type="text"
              value={inpValue}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Your Email Address"
              className="w-full p-2 text-center bg-white text-black rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[oklch(77.7%_0.152_181.912)]"
            />

            {message && (
              <p className={`mb-2 text-center font-medium ${messageColor}`}>
                {message}
              </p>
            )}
            <button
              onClick={click}
              className="w-full bg-[oklch(77.7%_0.152_181.912)] text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 flex-wrap md:flex-nowrap text-white/80 justify-center md:justify-between border-t border-white/10 mt-15 py-6">
          <p className="text-sm md:w-90 lg:w-full px-4">
            © Copyright Grand Car Rental Theme Demo - Theme by ThemeGoods
          </p>

          <ul className="flex justify-center gap-6 text-xs ">
            <NavLink to="aboutUs" className="w-15">
              About Us
            </NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="faq">FAQs</NavLink>
            <NavLink to="contactUs" className="w-15">
              Contact Us
            </NavLink>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Footer;
