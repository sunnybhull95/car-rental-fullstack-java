import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Section from "../global/Section";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineControl } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

import img from "../global/imagesandvideo/article2.jpg";

const FilterDisplay = () => {
  const navigate = useNavigate();
  const [carData, setCarData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  // Filters from HeroSection via URL query
  const [searchParams] = useSearchParams();
  const heroFilters = {
    brand: searchParams.get("brand") || "",
    type: searchParams.get("type") || "",
    price: searchParams.get("price") || "",
  };

  // Filters for manual changes inside FilterDisplay
  const [filters, setFilters] = useState(heroFilters);

  // Fetch all cars
  useEffect(() => {
    axios
      .get("http://localhost:8080/allCars")
      .then((res) => setCarData(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Apply filtering whenever carData or filters change
  useEffect(() => {
    if (carData.length > 0) {
      const result = carData.filter((car) => {
        return (
          (filters.brand === "" ||
            car.make.toLowerCase() === filters.brand.toLowerCase()) &&
          (filters.type === "" ||
            car.cartype.toLowerCase() === filters.type.toLowerCase()) &&
          (filters.price === "" || car.price <= parseInt(filters.price))
        );
      });
      setFilteredCars(result);
    }
  }, [carData, filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    // Filtering is handled automatically by useEffect
  };

  // Navigate to car booking page
  const handleClickCar = (model) => {
    navigate(`/model/${model}`);
  };

  return (
    <>
      {/* Banner */}
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col justify-end h-screen"
          style={{ textAlign: "center" }}
        >
          <h2 className="text-white text-4xl font-bold">Available Cars</h2>
          <p className="text-white/80 font-bold mb-5.5">
            Explore our wide range of cars filtered as per your preferences.
          </p>
        </div>
      </div>

      <Section className="bg-white py-4 px-8 md:pr-0 lg:pr-20">
        {/* Filter Form */}
        <div className="bg-black/10 py-5 rounded-md flex justify-center w-full">
          <form
            className="flex gap-2 items-center md:flex-row lg:flex-row flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="bg-white rounded-sm w-64 pr-1">
              <select
                name="brand"
                value={filters.brand}
                onChange={handleChange}
                className="w-full outline-none rounded-md px-3 py-2"
              >
                <option value="">Any Brand</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="lexus">Lexus</option>
                <option value="mini">Mini</option>
                <option value="porsche">Porsche</option>
              </select>
            </div>

            <div className="bg-white rounded-sm w-64 pr-1">
              <select
                name="type"
                value={filters.type}
                onChange={handleChange}
                className="w-full outline-none rounded-md px-3 py-2"
              >
                <option value="">Any Type</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="coupe">Coupe</option>
              </select>
            </div>

            <div className="bg-white rounded-sm w-64 pr-1">
              <select
                name="price"
                value={filters.price}
                onChange={handleChange}
                className="w-full outline-none rounded-md px-3 py-2"
              >
                <option value="">Any Price</option>
                <option value="5000">Below ₹5,000</option>
                <option value="10000">Below ₹10,000</option>
                <option value="20000">Below ₹20,000</option>
              </select>
            </div>
          </form>
        </div>

        {/* Car Listing */}
        <div className="flex md:justify-between flex-wrap md:flex-nowrap gap-9 mt-6">
          <div className="lg:w-190">
            {filteredCars.length > 0 ? (
              filteredCars.map((data) => (
                <div
                  key={data.id}
                  className="my-6 md:w-120 lg:w-full w-90 cursor-pointer"
                  onClick={() => handleClickCar(data.model)}
                >
                  <div
                    className="w-full rounded-md md:h-69 lg:h-95"
                    style={{
                      backgroundImage: `url(${data.imageUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "420px",
                    }}
                  ></div>
                  <div className="flex flex-wrap justify-between mt-4">
                    <div className="w-40 flex flex-wrap">
                      <h2 className="font-sans font-bold text-2xl">
                        <span className="mr-2">{data.make}</span>
                        <span>{data.model}</span>
                      </h2>
                      <ul className="flex mt-2">
                        <FaStar className="text-sm text-blue-700" />
                        <FaStar className="text-sm text-blue-700" />
                        <FaStar className="text-sm text-blue-700" />
                        <FaRegStar className="text-sm text-black" />
                        <FaRegStar className="text-sm text-black" />
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
                    <div className="w-full flex flex-col md:flex-row mt-3">
                      <ul className="flex gap-6">
                        <li className="mr-3">
                          <BsPerson className="text-xl" />
                          <span className="text-sm text-black/60 ml-1">
                            {data.totalpassengers}
                          </span>
                        </li>
                        <li className="mr-3">
                          <IoBagHandleOutline className="text-xl" />
                          <span className="text-sm text-black/60 ml-1">
                            {data.totalluggage}
                          </span>
                        </li>
                        <li>
                          <AiOutlineControl className="text-xl" />
                          <span className="text-sm text-black/60 ml-1">
                            {data.geartype}
                          </span>
                        </li>
                      </ul>
                      <div className="grid grid-flow-col grid-rows-6 mt-6 md:mt-0 md:grid-rows-3 gap-6 lg:gap-1 lg:ml-36 md:ml-10 w-80">
                        {data.features.slice(0, 6).map((feat, index) => (
                          <div className="flex" key={index}>
                            <IoMdCheckmark className="mt-1" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl text-center mt-6">
                No cars match your filters
              </p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default FilterDisplay;
