import Section from "../global/Section";
import img1 from "../global/imagesandvideo/coupe.jpg";
import img2 from "../global/imagesandvideo/suv.jpg";
import img3 from "../global/imagesandvideo/sedan.jpg";

import { useNavigate } from "react-router-dom";

const CarByTypeCard = () => {
  const navigate = useNavigate();

  const types = [
    { name: "coupe", img: img1 },
    { name: "SUV", img: img2 },
    { name: "sedan", img: img3 },
  ];

  const handleClickCarType = (type) => {
    navigate(`/carType/${type}`);
  };

  return (
    <Section className="bg-white py-11">
      <div className="text-center">
        <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl">
          Find Car by Type
        </h2>
        <p className="font-semibold text-black/40">
          We offer professional car rental & limousine services in our range of
          high-end vehicles
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-8 justify-center lg:gap-8 md:gap-4">
        {types.map((type) => (
          <div
            key={type.name}
            onClick={() => handleClickCarType(type.name)}
            style={{ backgroundImage: `url(${type.img})` }}
            className="w-84 h-75 lg:w-84 md:w-55 md:h-50  lg:h-80 hover:shadow-2xl hover:duration-300 rounded-lg bg-cover bg-center object-cover flex flex-col justify-end p-4 cursor-pointer"
          >
            <p className="font-bold text-2xl text-white">{type.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CarByTypeCard;
