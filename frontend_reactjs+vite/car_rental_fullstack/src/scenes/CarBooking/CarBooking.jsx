import banner from "../global/imagesandvideo/cardimg3.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

//Icons
import { FaStar, FaRegStar, FaCar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoBagHandleOutline, IoAlarmOutline } from "react-icons/io5";
import { AiOutlineControl } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

const CarBooking = () => {
  const [sdata, setData] = useState([]);
  const { modelId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCarByModel/${modelId}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [modelId]);

  // Handle Book Now Click
  const handleBookNow = (model) => {
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/cart/${model}`);
    }
  };

  return (
    <>
      {sdata.map((data) => (
        <>
          {/* Banner Section */}
          <div
            className="w-full h-screen flex  justify-end"
            style={{
              backgroundImage: `url(${data.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  justify-end ">
              <div className="flex md:flex-col md:flex-wrap lg:flex-nowrap lg:flex-row md:text-center justify-center bg-black/90 rounded-t-sm lg:w-70 lg:h-20 lg:py-4 lg:mr-16 md:mr-10 md:w-52 text-white ">
                <span className="font-medium! text-lg mt-1 mx-1">₹</span>
                <h1 className="font-extrabold text-6xl">{data.price}</h1>
                <p className="my-5 ml-2 ">Per Day</p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className=" flex flex-wrap md:flex-nowrap bg-white">
            <div className="w-full px-5 md:max-w-4xl lg:pl-25 md:pl-5 md:pr-5 justify-between">
              {/* Car Details */}
              <div key={data.id} className=" w-40 mt-10 flex flex-wrap ">
                <h2 className="font-sans font-bold text-4xl">
                  <span className="mr-2">{data.make}</span>
                  <span>{data.model}</span>
                </h2>
                <ul className="flex mt-3">
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
                <span className="ml-3 mt-2 font-medium text-sm">4 Reviews</span>
              </div>

              <div className=" w-full flex flex-col md:flex-row mt-8 py-5 border-t border-b border-black/15">
                <ul className="flex flex-wrap md:flex-nowrap gap-9  md:gap-15 lg:gap-20">
                  <li className="flex md:flex-col lg:flex-row">
                    <BsPerson className="text-5xl text-black/70 mx-auto" />
                    <span className="text-sm text-black/60 ml-1 my-auto">
                      4 Passenger
                    </span>
                  </li>
                  <li className="flex md:flex-col lg:flex-row">
                    <IoBagHandleOutline className="text-5xl text-black/70 mx-auto" />
                    <span className="text-sm text-black/60 ml-1 my-auto">
                      4 Luggage
                    </span>
                  </li>
                  <li className="flex md:flex-col lg:flex-row">
                    <AiOutlineControl className="text-black/70 text-5xl mx-auto" />
                    <span className="text-sm text-black/60 ml-1 my-auto">
                      {data.geartype}
                    </span>
                  </li>
                  <li className="flex md:flex-col lg:flex-row">
                    <FaCar className="text-5xl text-black/70 mx-auto" />
                    <span className="text-sm text-black/60 ml-1 my-auto">
                      {data.cardoors}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Fixed terms access */}
              <div className="my-10">
                <h2 className="font-bold text-xl mb-4">Refueling</h2>
                <p className="text-lg">{data.terms[0]}</p>
              </div>

              <div className="my-10">
                <h2 className="font-bold text-xl mb-4">Car Wash</h2>
                <p className="text-lg">{data.terms[1]}</p>
              </div>

              <div className="my-10">
                <h2 className="font-bold text-xl mb-4">No Smoking</h2>
                <p className="text-lg">{data.terms[2]}</p>
              </div>

              {/* Fixed features access */}
              <div className="flex gap-5 border-t border-b border-black/15 py-4">
                <div>
                  {" "}
                  <h2 className="font-semibold text-lg">Included</h2>
                </div>
                <div className=" grid grid-flow-col grid-rows-6 mt-6 md:mt-0 md:grid-rows-3 gap-10 lg:gap-1 lg:ml-36 md:ml-10 ml-25 w-80 ">
                  <div className="flex ">
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

                  <div className="flex">
                    <IoMdCheckmark className="mt-1" />
                    {data.features[3]}
                  </div>

                  <div className="flex">
                    <IoMdCheckmark className="mt-1" />
                    {data.features[4]}
                  </div>

                  <div className="flex">
                    <IoMdCheckmark className="mt-1" />
                    {data.features[5]}
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-5  py-4">
                <div>
                  {" "}
                  <h2 className="font-semibold text-lg">Not Included</h2>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-evenly ml-17 w-80 ">
                  <div className="flex ">
                    <IoMdCheckmark className="mt-1" />
                    {data.notIncluded[0]}
                  </div>

                  <div className="flex">
                    <IoMdCheckmark className="mt-1" />
                    {data.notIncluded[1]}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="w-full mb-10 lg:max-w-2xl px-5 bg-white md:pl-0 lg:w-80 md:pr-10 mx-auto ">
              <div className="flex justify-end">
                <button
                  onClick={() => handleBookNow(data.model)}
                  className="bg-[#04DBC0]  text-white font-bold hover:bg-[#405de6]  mb-4 transition-all cursor-pointer duration-300 py-3 w-full md:w-52 lg:w-90 rounded-b-sm"
                >
                  Book Now
                </button>
              </div>
              <div className="flex gap-2 border border-black/20 p-4">
                <p>This car's been viewed 544 times in the past week</p>
                <IoAlarmOutline className="w-15 h-15" />
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default CarBooking;
