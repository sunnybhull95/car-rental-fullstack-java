import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../global/imagesandvideo/HeroSection.mp4";

const HeroSection = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    brand: "",
    type: "",
    price: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    // Build query string
    const query = new URLSearchParams(filters).toString();
    navigate(`/filterDisplay?${query}`);
  };

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <video
        className="w-full h-full object-cover object-center z-[-1]"
        src={Hero}
        autoPlay
        loop
        muted
      />

      <div
        style={{ textAlign: "center" }}
        className="absolute md:left-35 top-65 lg:left-85 px-4"
      >
        <h1 className="md:text-4xl lg:text-5xl font-bold text-white">
          Find Best Car & Limousine
        </h1>
        <p className="text-sm font-bold text-white">
          From as low as $10 per day with limited time offer discounts
        </p>
      </div>

      <div className="absolute top-90 flex justify-center w-full">
        <form
          className="flex gap-2 items-center md:flex-row lg:flex-row flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Brand */}
          <div className="bg-white rounded-sm w-65 md:w-40 lg:w-65  pr-1">
            <select
              id="brand"
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

          {/* Type */}
          <div className="bg-white rounded-sm w-65 md:w-40 lg:w-65 pr-1">
            <select
              id="type"
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

          {/* Price */}
          <div className="bg-white rounded-sm w-65 md:w-40 lg:w-65 pr-1">
            <select
              id="price"
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

          <div>
            <button
              type="button"
              onClick={handleSearch}
              className="w-56 bg-[oklch(77.7%_0.152_181.912)] hover:bg-black text-white font-bold py-2 px-4 rounded-md"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
