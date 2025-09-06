import img1 from "../global/imagesandvideo/aboutUsBanner.jpg";
import { useState, useEffect } from "react";

//img
import t1 from "../global/imagesandvideo/team1.jpeg";
import t2 from "../global/imagesandvideo/team2.jpeg";
import t3 from "../global/imagesandvideo/team3.jpeg";
import t4 from "../global/imagesandvideo/team4.jpeg";
import t5 from "../global/imagesandvideo/team5.jpeg";

//icons
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const AboutUs = () => {
  //icon
  const team = [
    { image: t1, name: "Jessica Lee", post: "CEO" },
    { image: t2, name: "John Bennett", post: "Asia Tour Expert" },
    { image: t3, name: "Christina Hardy", post: "Marketing Manager" },
    { image: t4, name: "Oliver Doe", post: "Europe Tour Expert" },
    { image: t5, name: "Jane Bennett", post: "Customer Support" },
  ];

  //
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const target2 = 7010;

  const target = 1109;
  const speed = 1; // milliseconds per increment step (medium-slow)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCount2((prev) => {
        if (prev < target2) {
          return prev + 1;
        } else {
          clearInterval(interval2);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval2);
  }, []);

  //Ends

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
          style={{ backgroundImage: `url(${img1})` }}
          className="bg-fixed flex flex-col justify-center w-full h-screen bg-cover bg-center text-white "
        >
          <div className="text-center w-160 mx-auto">
            <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl">
              We are Grand Car Rental Best Car Rental WordPress Theme
            </h2>
            <p className="font-semibold text-white/70 mt-1">
              Car rental, limousine, and car hire. All in one service
            </p>
          </div>
        </div>
        {/* Section ends */}
        <div className="flex  justify-center pt-15 w-full h-screen bg-[#5856d6] text-white ">
          <div className="text-center w-125 mx-auto">
            <h2 className="font-bold text-center text-3xl lg:text-4xl md:text-4xl">
              This adventure isn’t about change but it seems to be an
              inevitability.
            </h2>
            <p className="  text-white/80 mt-7 text-center">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud.Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
              pack, elit bespoke vinyl art party Pitchfork selfies master
              cleanse.
            </p>

            {/* Ends */}

            <div className="bg-[#5856d6] text-white flex justify-center mt-18">
              <div className="flex justify-center gap-35  w-56">
                <div className="text-center">
                  <span className="text-6xl font-light">{count}</span>
                  <p className="text-white/40 font-light">Trips</p>
                </div>
                <div className="text-center">
                  <span className="text-6xl  font-light">{count2}</span>
                  <p className="text-white/40 font-light">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Ends */}

        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="  w-full  bg-cover bg-center text-white pt-15 pb-45 pl-25"
        >
          <div className="max-w-xl mt-10 p-10  bg-black  shadow-lg rounded-md">
            <h2 className="text-4xl font-extrabold  text-white mb-2">
              Get In Touch With Us
            </h2>
            <p className=" text-white/80 font-bold mb-6">
              This is sample of sub title.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  // placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white outline-none text-black p-2 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  // placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white outline-none text-black p-2 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Input */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  // placeholder="Subject "
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white outline-none text-black p-2 rounded-md"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  // placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white outline-none text-black h-80 p-2 rounded-md"
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
          </div>
        </div>

        {/* Section End */}
        <div className="bg-gray-100 py-16 px-6 lg:px-32 text-center">
          <h2 className="text-4xl font-bold text-black mb-2">Meet Our Team</h2>
          <p className="text-black/30 font-semibold max-w-2xl mx-auto mb-12">
            Car rental, limousine, and car hire. All in one service.
          </p>
          <div className="flex gap-7">
            {team.map((data) => (
              <div className="w-46">
                <div className="group relative w-46 h-46">
                  {/* Background Image */}
                  <div
                    style={{ backgroundImage: `url(${data.image})` }}
                    className="w-46 h-46 bg-cover bg-center rounded-full"
                  ></div>

                  {/* Social Icons - Show on hover */}
                  <ul className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li className="w-9 h-9 bg-black/70 rounded-full flex items-center justify-center">
                      <FaTwitter className="text-white text-sm" />
                    </li>
                    <li className="w-9 h-9 bg-black/70 rounded-full flex items-center justify-center">
                      <FaFacebookF className="text-white text-sm" />
                    </li>
                    <li className="w-9 h-9 bg-black/70 rounded-full flex items-center justify-center">
                      <FaGooglePlusG className="text-white text-lg" />
                    </li>
                    <li className="w-9 h-9 bg-black/70 rounded-full flex items-center justify-center">
                      <FaLinkedinIn className="text-white text-sm" />
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold">{data.name}</h2>
                  <p className="font-semibold text-black/40">{data.post}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
