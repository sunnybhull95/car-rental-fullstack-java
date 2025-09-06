import { useState } from "react";
//image
import banner from "../global/imagesandvideo/contactUsBanner.jpg";
import branch from "../global/imagesandvideo/contactUsBranch.jpeg";
import branch2 from "../global/imagesandvideo/contactUsBranch2.jpeg";

//icons
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
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
      <div>
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="bg-fixed flex flex-col justify-end w-full h-screen bg-cover bg-center text-white "
        >
          <div className="text-center w-full px-22 md:px-0 mx-auto">
            <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl">
              Contact Us
            </h2>
            <p className="font-semibold text-white/70 mt-1 mb-6">
              This is sample of page tagline and you can set it up using page
              option
            </p>
          </div>
        </div>
        {/*  */}
        <div className="bg-white py-15 ">
          <div className="max-w-4xl text-center mx-auto">
            <h2 className="font-extrabold text-xl mb-6 px-8 md:px-30">
              Just over a month into my trip and I wonder how I’ve changed, if
              at all. Certainly the experiences I’ve had and things I’ve seen
              have shaped me in someway.
            </h2>

            <ul className="flex items-center justify-center gap-2 ">
              <li className="w-10 h-10 bg-[#2D5F9A] rounded-full flex items-center justify-center">
                <FaFacebookF className="text-white text-lg" />
              </li>
              <li className="w-10 h-10 bg-[#00C3F3] rounded-full flex items-center justify-center">
                <FaTwitter className="text-white text-sm" />
              </li>

              <li className="w-10 h-10 bg-[#cc181e] rounded-full flex items-center justify-center">
                <TfiYoutube className="text-white text-lg" />
              </li>
              <li className="w-10 h-10 bg-[#bd081c] rounded-full flex items-center justify-center">
                <FaPinterest className="text-white text-lg" />
              </li>
              <li className="w-10 h-10 bg-[#405de6] rounded-full flex items-center justify-center">
                <FaInstagram className="text-white text-lg" />
              </li>
            </ul>

            <div className="max-w-3xl mx-auto mt-10 p-10  shadow-lg ">
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-4 ">
                  <label className="block mb-1 text-sm font-medium text-left">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    // placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/20  text-black p-2 rounded-md"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-left">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    // placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/20  text-black p-2 rounded-md"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject Input */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-left">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    // placeholder="Subject "
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/20  text-black p-2 rounded-md"
                  />
                </div>

                {/* Message Textarea */}
                <div className="mb-4">
                  <label className="block mb-1 font-medium text-left">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    // placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full  bg-white border border-black/20  text-black p-2 rounded-md"
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
                  <p className="text-whiet border-2 px-6 py-1 border-green-600 mt-4 text-left">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="md:flex ">
          <div className="relative w-full h-100 text-center text-white flex flex-col justify-center items-center">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-50"
              style={{ backgroundImage: `url(${branch})` }}
            ></div>

            {/* Overlay content */}
            <div className="relative z-10">
              <h2 className="font-bold text-3xl">California</h2>
              <ul className="text-lg flex flex-col justify-center gap-2">
                <li>0078 Collective Street</li>
                <li>Manhattan</li>
                <li>Kingston</li>
                <li>United State</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="relative w-full h-100 text-center text-white flex flex-col justify-center items-center">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-50"
              style={{ backgroundImage: `url(${branch2})` }}
            ></div>

            {/* Overlay content */}
            <div className="relative z-10">
              <h2 className="font-bold text-3xl">London</h2>
              <ul className="text-lg flex flex-col justify-center gap-2">
                <li>0732/21 Second Street</li>
                <li>King Street</li>
                <li>Kingston</li>
                <li>United Kingdom</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
