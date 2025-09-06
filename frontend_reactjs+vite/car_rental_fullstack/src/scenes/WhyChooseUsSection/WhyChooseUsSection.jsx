import { IoCarSportOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const WhyChooseUsSection = () => {
  return (
    <>
      {/* bg-[#5856d6] */}
      <div className="h-screen md:h-100 bg-[#5856d6]  text-white ">
        <div className="text-center  py-15 px-4">
          <h2 className="md:text-4xl font-extrabold text-2xl">Why Choose Us</h2>
          <p className="text-white/80 ">
            Explore our first class limousine & car rental services
          </p>
        </div>
        <div className="flex justify-evenly flex-wrap">
          <div className="w-80 mb-12 md:mb-0 md:w-70 text-center ">
            <div className="text-white mb-2">
              <IoCarSportOutline className="text-5xl mx-auto mb-2" />
              <h2 className="font-bold text-xl">Variety of Car Brands</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="w-80 mb-12 md:mb-0 md:w-70 text-center ">
            <div className="text-white mb-2">
              <BsEmojiSmile className="text-5xl mx-auto mb-2" />
              <h2 className="font-bold text-xl">Best Rate Guarantee</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="w-80 mb-12 md:mb-0 md:w-70 text-center ">
            <div className="text-white mb-2">
              <CiHeart className="text-5xl mx-auto mb-2" />
              <h2 className="font-bold text-xl">Awesome Customer Support</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
