import { useState } from "react";

//icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
//
import { CiMobile4 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";

//image
import banner from "../global/imagesandvideo/contactUsBanner.jpg";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);

  //ends

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Store errors for required fields
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the form data
    setFormData({ ...formData, [name]: value });

    // Clear the error as the user types
    setErrors({ ...errors, [name]: "" });
    setSuccessMessage("");
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh

    let newErrors = {};

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    // Show errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccessMessage("Thank you for your message. It has been sent.");
  };

  return (
    <>
      <div className="bg-white ">
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="bg-fixed flex flex-col justify-end w-full h-screen bg-cover bg-center text-white "
        >
          <div className="text-center w-full px-22 md:px-0 mx-auto">
            <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl">FAQs</h2>
            <p className="font-semibold text-white/70 mt-1 mb-6">
              This is sample of page tagline and you can set it up using page
              option
            </p>
          </div>
        </div>
        {/* ends */}

        <div className="flex flex-wrap md:flex-nowrap pr-20">
          <div className=" max-w-4xl p-6 pl-20 pr-35">
            <h2 className="font-bold text-2xl mb-4 ml-4">Payment</h2>
            <div className=" mb-2">
              <button
                onClick={() => setIsOpen1(!isOpen1)}
                className="flex w-full text-left px-4 py-3 mb-4 font-bold text-lg"
              >
                {isOpen1 ? (
                  <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                ) : (
                  <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                )}
                Are there any extra fees that I will have to pay on top of the
                listed price?
              </button>
              <div
                className={`transition-all duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                  isOpen1 ? "max-h-40 py-2" : "max-h-0 py-0"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labolore magna aliqua. Ut enim ad
                minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                do.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                ad minim veniam.
              </div>
              {/* 2 */}
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="flex w-full text-left px-4 py-3 mb-4  font-bold text-lg"
              >
                {isOpen2 ? (
                  <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                ) : (
                  <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                )}
                Should I print a receipt to show when I arrive?
              </button>
              <div
                className={`transition-all duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                  isOpen2 ? "max-h-40 py-2" : "max-h-0 py-0"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labolore magna aliqua. Ut enim ad
                minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                do.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                ad minim veniam.
              </div>
              {/* 3*/}
              <button
                onClick={() => setIsOpen3(!isOpen3)}
                className="flex w-full text-left px-4 py-3 mb-4  font-bold text-lg"
              >
                {isOpen3 ? (
                  <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                ) : (
                  <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                )}
                Should I print a receipt to show when I arrive?
              </button>
              <div
                className={`transition-all mb-15 duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                  isOpen3 ? "max-h-40 py-2" : "max-h-0 py-0"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labolore magna aliqua. Ut enim ad
                minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                do.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                ad minim veniam.
              </div>

              {/* end Accord */}
              <h2 className="font-bold text-2xl mb-4 ml-4">Preparation</h2>
              <div className=" mb-2">
                <button
                  onClick={() => setIsOpen4(!isOpen4)}
                  className="flex w-full text-left px-4 py-3 mb-4 font-bold text-lg"
                >
                  {isOpen4 ? (
                    <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  ) : (
                    <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  )}
                  What should I wear?{" "}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                    isOpen4 ? "max-h-40 py-2" : "max-h-0 py-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                  ad minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                  do.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labolore magna aliqua. Ut
                  enim ad minim veniam.
                </div>
                {/* 5 */}
                <button
                  onClick={() => setIsOpen5(!isOpen5)}
                  className="flex w-full text-left px-4 py-3 mb-4  font-bold text-lg"
                >
                  {isOpen5 ? (
                    <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  ) : (
                    <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  )}
                  What do I need to bring?{" "}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                    isOpen5 ? "max-h-40 py-2" : "max-h-0 py-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                  ad minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                  do.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labolore magna aliqua. Ut
                  enim ad minim veniam.
                </div>
                {/* 6*/}
                <button
                  onClick={() => setIsOpen6(!isOpen6)}
                  className="flex w-full text-left px-4 py-3 mb-4  font-bold text-lg"
                >
                  {isOpen6 ? (
                    <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  ) : (
                    <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  )}
                  How much does it cost to do a private limousine?{" "}
                </button>
                <div
                  className={`transition-all mb-15 duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                    isOpen6 ? "max-h-40 py-2" : "max-h-0 py-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                  ad minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                  do.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labolore magna aliqua. Ut
                  enim ad minim veniam.
                </div>
              </div>
              {/* end Accord */}
              <h2 className="font-bold text-2xl mb-4 ml-4">Reservation</h2>
              <div className=" mb-2">
                <button
                  onClick={() => setIsOpen7(!isOpen7)}
                  className="flex w-full text-left px-4 py-3 mb-4 font-bold text-lg"
                >
                  {isOpen7 ? (
                    <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  ) : (
                    <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  )}
                  What is your refund policy?{" "}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                    isOpen7 ? "max-h-40 py-2" : "max-h-0 py-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                  ad minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                  do.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labolore magna aliqua. Ut
                  enim ad minim veniam.
                </div>
                {/* 8 */}
                <button
                  onClick={() => setIsOpen8(!isOpen8)}
                  className="flex w-full text-left px-4 py-3 mb-4  font-bold text-lg"
                >
                  {isOpen8 ? (
                    <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  ) : (
                    <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  )}
                  Do you offer 30 days money back guarantee?{" "}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                    isOpen8 ? "max-h-40 py-2" : "max-h-0 py-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                  ad minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                  do.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labolore magna aliqua. Ut
                  enim ad minim veniam.
                </div>
                {/* 9*/}
                <button
                  onClick={() => setIsOpen9(!isOpen9)}
                  className="flex w-full text-left px-4 py-3 mb-4  font-bold text-lg"
                >
                  {isOpen9 ? (
                    <IoIosArrowDown className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  ) : (
                    <IoIosArrowForward className="bg-[#04dbc0] rounded-full w-7 h-7 text-white p-1 font-bold mr-4" />
                  )}
                  Do I have to make a reservation?{" "}
                </button>
                <div
                  className={`transition-all mb-15 duration-300 ease-in-out  bg-white border-t border-black/20  overflow-hidden ${
                    isOpen9 ? "max-h-40 py-2" : "max-h-0 py-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labolore magna aliqua. Ut enim
                  ad minim veniam. Lorem ipsum dosectetur adipisicing elit, sed
                  do.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labolore magna aliqua. Ut
                  enim ad minim veniam.
                </div>
              </div>
            </div>
          </div>
          <div className="w-75 mt-10">
            <form
              onSubmit={handleSubmit}
              className="p-3 border border-black/20 rounded-md"
            >
              <div className="border-b border-black/10 text-xl font-bold  text-black mb-6">
                <h2>Can’t Find Answer? Ask Us </h2>
              </div>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-sm text-black/70">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  // placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-black/10 outline-none text-black p-2 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-sm text-black/70">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  // placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-black/10 outline-none text-black p-2 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Input */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-sm text-black/70">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  // placeholder="Subject "
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-black/10 outline-none text-black p-2 rounded-md"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-sm text-black/70">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  // placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-black/10 outline-none text-black p-2 rounded-md"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[oklch(77.7%_0.152_181.912)] text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
              {successMessage && (
                <p className="text-whiet border-2 px-6 py-1 border-green-600 mt-4 ">
                  {successMessage}
                </p>
              )}
            </form>

            <div className="w-full mt-10 border border-black/20 rounded-sm px-3 py-4">
              <div className="font-bold mb-6 text-xl border-b border-black/10">
                <h2>For More Informations</h2>
              </div>
              <ul className="mt-3">
                <li className="flex gap-2  mb-3 text-black/80">
                  <CiMobile4 className="mt-1 mb-4 text-lg" />
                  1-567-124-44227
                </li>

                <li className="flex gap-2  text-black/80">
                  <IoAlarmOutline className="mb-4 text-lg" />
                  Mon - Sat 8.00 - 18.00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
