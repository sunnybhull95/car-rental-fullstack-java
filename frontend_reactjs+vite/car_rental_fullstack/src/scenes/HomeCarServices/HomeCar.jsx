import Section from "../global/Section";
import img1 from "../global/imagesandvideo/cardimg1.jpg";
import img2 from "../global/imagesandvideo/cardimg2.jpg";
import img3 from "../global/imagesandvideo/cardimg3.jpg";
import img4 from "../global/imagesandvideo/cardimg4.jpg";
import img5 from "../global/imagesandvideo/cardimg5.jpg";
import img6 from "../global/imagesandvideo/cardimg6.jpg";

import { useNavigate } from "react-router-dom";

const HomeCar = () => {
  const navigate = useNavigate();

  const brands = [
    { name: "Audi", img: img1 },
    { name: "BMW", img: img2 },
    { name: "Lexus", img: img3 },
    { name: "Mercedes", img: img4 },
    { name: "Mini", img: img5 },
    { name: "Porsche", img: img6 },
  ];

  const handleClick = (brand) => {
    navigate(`/car/${brand}`);
  };

  return (
    <Section className="bg-white py-11">
      <div className="text-center">
        <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl">
          First Class Car Rental & Limousine Services
        </h2>
        <p className="font-semibold text-black/40">
          We offer professional car rental & limousine services in our range of
          high-end vehicles
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-8 justify-center lg:gap-8 md:gap-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            onClick={() => handleClick(brand.name)}
            style={{ backgroundImage: `url(${brand.img})` }}
            className="w-84 h-75 lg:w-84 md:w-55 md:h-50  lg:h-80 hover:shadow-2xl hover:duration-300 rounded-lg bg-cover bg-center object-cover flex flex-col justify-end p-4 cursor-pointer"
          >
            <p className="font-bold text-2xl text-white">{brand.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HomeCar;
