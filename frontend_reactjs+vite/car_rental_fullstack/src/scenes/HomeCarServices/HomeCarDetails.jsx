import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Section from "../global/Section";

//images
import img1 from "../global/imagesandvideo/rentalTips.jpg";
import img2 from "../global/imagesandvideo/rentalTips2.jpg";
import img3 from "../global/imagesandvideo/rentalTips3.jpg";

//Icons

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineControl } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
//
import { CiMobile4 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
//
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HomeCarDetails = () => {
  const { carName } = useParams();
  const [carData, setCardata] = useState([]);
  const [banner, setBanner] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCarByMake/${carName}`)
      .then((res) => {
        console.log(res);
        setCardata(res.data);
      })
      .catch((err) => console.error(err));
  }, [carName]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCarByMake/${carName}`)
      .then((res) => {
        setBanner(res.data[0]);
      })
      .catch((err) => console.error(err));
  }, [carName]);

  return (
    <>
      <div
        className="w-full h-screen "
        style={{
          backgroundImage: `url(${banner.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{ textAlign: "center" }}
          className="flex flex-col justify-end h-screen "
        >
          <h2 className="text-white text-4xl font-bold">{carName}</h2>
          <p className="text-white/80  font-bold mb-5.5">
            This is description of car brand. You can set it from car brand
            admin page .
          </p>
        </div>
      </div>
      <Section className="bg-white py-4 px-8 md:pr-0! lg:pr-20! ">
        <div className="flex md:justify-between flex-wrap md:flex-nowrap gap-9 ">
          <div className=" lg:w-190!">
            {carData.map((data) => (
              <div
                key={data.id}
                style={{ width: "740px" }}
                className="my-6 md:w-120! lg:w-full! w-90! "
              >
                <div
                  className="w-full cursor-pointer rounded-md md:h-69! lg:h-95!"
                  style={{
                    backgroundImage: `url(${data.imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "420px",
                  }}
                  onClick={() => navigate(`/model/${data.model}`)}
                ></div>
                {/* name,model,price,review */}
                <div className="flex flex-wrap justify-between mt-4">
                  <div className=" w-40 flex flex-wrap">
                    <h2 className="font-sans font-bold text-2xl">
                      <span className="mr-2">{data.make}</span>
                      <span>{data.model}</span>
                    </h2>

                    <ul className="flex mt-2">
                      <li>
                        <FaStar className="text-sm text-blue-700" />
                      </li>
                      <li>
                        <FaStar className="text-sm text-blue-700" />
                      </li>
                      <li>
                        <FaStar className="text-sm text-blue-700" />
                      </li>
                      <li>
                        <FaRegStar className="text-sm text-black" />
                      </li>
                      <li>
                        <FaRegStar className="text-sm text-black" />
                      </li>
                    </ul>
                    <span className="ml-3 mt-1 font-semibold">4 Reviews</span>
                  </div>
                  <div>
                    <span className="font-bold text-3xl">
                      <span className="font-medium text-1xl">₹</span>
                      {data.price}
                    </span>
                    <p className="ml-11 text-black/60 text-sm">Per Day</p>
                  </div>

                  <div className=" w-full flex flex-col md:flex-row mt-3">
                    <ul className="flex gap-6">
                      <li className="mr-3">
                        <BsPerson className="text-xl" />
                        <span className="text-sm text-black/60 ml-1">4</span>
                      </li>
                      <li className="mr-3">
                        <IoBagHandleOutline className="text-xl" />
                        <span className="text-sm text-black/60 ml-1">4</span>
                      </li>
                      <li>
                        <AiOutlineControl className="text-xl" />
                        <span className="text-sm text-black/60 ml-1">
                          {data.geartype}
                        </span>
                      </li>
                    </ul>

                    <div className="grid grid-flow-col grid-rows-6 mt-6 md:mt-0 md:grid-rows-3 gap-6 lg:gap-1 lg:ml-36 md:ml-10 w-80 ">
                      <div className="flex">
                        <IoMdCheckmark className="mt-1" />
                        {data.features[0]}
                      </div>
                      <div className="flex">
                        <IoMdCheckmark className="mt-1" />
                        {data.features[1]}
                      </div>
                      <div className="flex">
                        <IoMdCheckmark className="mt-1" />
                        {data.features[2]}
                      </div>
                      {/* <div className="flex">
                      <IoMdCheckmark className="mt-1" />
                      {data.features[3]}
                    </div> */}
                      <div className="flex">
                        <IoMdCheckmark className="mt-1" />
                        {data.features[4]}
                      </div>
                      <div className="flex">
                        <IoMdCheckmark className="mt-1" />
                        {data.features[5]}
                      </div>
                      <div className="flex">
                        <IoMdCheckmark className="mt-1" />
                        {data.features[6]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-95 md:w-54 lg:w-72 mt-5.5">
            <div className="p-4 border border-black/20 rounded-md">
              <h2 className="border-b border-black/10 font-bold text-xl">
                For More Informations
              </h2>
              <ul className="mt-3">
                <li className="flex gap-2 text-black/60">
                  <CiMobile4 className="mt-1 text-lg" />
                  1-567-124-44227
                </li>
                <li className="flex gap-2 text-black/60">
                  <IoAlarmOutline className="mt-1 text-lg" />
                  Mon - Sat 8.00 - 18.00
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="p-4 border border-black/20 rounded-md mt-8">
              <h2 className="border-b border-black/10 font-bold text-xl">
                Rental Tips
              </h2>
              <div>
                <div className="flex mt-6">
                  <img src={img1} className="rounded-full w-18 h-18" />
                  <div className="ml-3">
                    <p className=" font-bold text-md">
                      America Car Rental Offers Lowest Car Rental Rates
                    </p>
                    <span className="text-black/40 font-semibold text-xs">
                      January 5, 2017
                    </span>
                  </div>
                </div>
                <div className="flex mt-6">
                  <img src={img2} className="rounded-full w-18 h-18" />
                  <div className="ml-3">
                    <p className=" font-bold text-md">
                      How to Enjoy Sightseeing Los Angeles With Car Rentals
                    </p>
                    <span className="text-black/40 font-semibold text-xs">
                      January 4, 2017
                    </span>
                  </div>
                </div>
                <div className="flex mt-6">
                  <img src={img3} className="rounded-full w-18 h-18" />
                  <div className="ml-3">
                    <p className=" font-bold text-md">
                      Ride Across the Blue Ridge Parkway
                    </p>
                    <span className="text-black/40 font-semibold text-xs">
                      January 3, 2017
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-black/20 rounded-md mt-6">
              <h2 className="border-b border-black/10 font-bold text-xl">
                Connect with Us
              </h2>
              <ul className="mt-3 flex md:flex-wrap md:justify-center gap-4">
                <li>
                  <RiFacebookBoxFill className=" text-blue-900 w-10 h-10" />
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
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomeCarDetails;
