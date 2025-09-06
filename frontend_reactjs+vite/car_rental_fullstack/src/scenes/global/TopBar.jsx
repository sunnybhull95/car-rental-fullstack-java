import { useState, useEffect } from "react";
import Section from "../global/Section";

//Icons
import { IoLocationOutline } from "react-icons/io5";
import { TfiMobile } from "react-icons/tfi";
import { TfiAlarmClock } from "react-icons/tfi";
//
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopBar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 60;

      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
          // Scrolling down past threshold
          setShowHeader(false);
        } else {
          // Scrolling up
          setShowHeader(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <Section
        className={`flex flex-col md:flex-row bg-black text justify-between p-4 px-0 text-white 
 top-0 w-full z-50 transition-transform duration-400 ${
   showHeader ? "translate-y-0" : "-translate-y-full"
 }`}
      >
        <ul className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
          <li className="flex  lg:mr-19 md:mr-4 mr-0 w-full justify-center">
            <IoLocationOutline
              className="w-7 h-4"
              style={{ color: "oklch(77.7% 0.152 181.912)" }}
            />
            <p className="font-sans text-xs font-bold ">
              184 Main Street East 8007
            </p>
          </li>

          <li className="flex mx-auto  md:max-0 lg:mx-0 mt-5 md:mt-0 lg:mt:0">
            <TfiMobile
              className="w-7 h-4"
              style={{ color: "oklch(77.7% 0.152 181.912)" }}
            />

            <p className="font-sans text-xs font-bold">1.800.456.6743</p>
          </li>

          <li className="flex lg:ml-19 md:ml-9  mx-auto md:max-0 lg:mx-0 mt-5 md:mt-0 lg:mt:0">
            <TfiAlarmClock
              className="w-7 h-4"
              style={{ color: "oklch(77.7% 0.152 181.912)" }}
            />

            <p className="md:w-32 font-sans text-xs font-bold">
              Mon-Fri 09.00 - 17.00
            </p>
          </li>
        </ul>

        <ul className="flex mx-auto mt-7 md:mt-0 lg:mt-0 md:max-0 lg:mx-0">
          <li className="mx-2">
            <a href="https://www.facebook.com/" target="_blank">
              <RiFacebookBoxFill className="w-4 h-4 transition duration-300 hover:text-[oklch(77.7%_0.152_181.912)]" />
            </a>
          </li>
          <li className="mx-2">
            <a href="https://x.com/" target="_blank">
              <FaTwitter className="w-4 h-4 transition duration-300 hover:text-[oklch(77.7%_0.152_181.912)]" />
            </a>
          </li>
          <li className="mx-2">
            <a href="https://www.youtube.com/" target="_blank">
              {" "}
              <TfiYoutube className="w-4 h-4 transition duration-300 hover:text-[oklch(77.7%_0.152_181.912)]" />
            </a>
          </li>
          <li className="mx-2">
            <a href="https://www.pinterest.com/" target="_blank">
              {" "}
              <FaPinterest className="w-4 h-4 transition duration-300 hover:text-[oklch(77.7%_0.152_181.912)]" />
            </a>
          </li>
          <li className="mx-2">
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="w-4 h-4 transition duration-300 hover:text-[oklch(77.7%_0.152_181.912)]" />
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
};

export default TopBar;
