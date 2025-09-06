//
import banner from "../global/imagesandvideo/servicesBanner.jpg";
import img1 from "../global/imagesandvideo/service1.jpg";
import img2 from "../global/imagesandvideo/service2.jpg";
import img3 from "../global/imagesandvideo/service3.jpg";

//icons
import { IoCarSportOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Services = () => {
  return (
    <>
      <div>
        <div>
          <img src={banner} className="h-75 w-full object-cover" />
        </div>
        <div className="h-screen md:h-100 bg-[#5856d6] text-white ">
          <div className="text-center  py-15 px-4">
            <h2 className="md:text-4xl font-extrabold text-2xl">
              Premium Car Rental & Limousines Services
            </h2>
          </div>
          <div className="flex justify-evenly flex-wrap md:flex-nowrap">
            <div className="w-80 mb-12 md:mb-0 md:w-70 text-center ">
              <div className="text-white mb-2">
                <IoCarSportOutline className="text-5xl mx-auto mb-2" />
                <h2 className="font-bold text-xl">Variety of Car Brands</h2>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
            <div className="w-80 mb-12 md:mb-0 md:w-70 text-center ">
              <div className="text-white mb-2">
                <BsEmojiSmile className="text-5xl mx-auto mb-2" />
                <h2 className="font-bold text-xl">Best Rate Guarantee</h2>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
            <div className="w-80 mb-12 md:mb-12 md:w-70 text-center ">
              <div className="text-white mb-2">
                <CiHeart className="text-5xl mx-auto mb-2" />
                <h2 className="font-bold text-xl">Awesome Customer Support</h2>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap">
          <img src={img1} className="md:max-w-2/4 w-full h-130 object-cover" />
          <div className="bg-white w-full">
            <div className=" mx-auto my-20 md:w-10/14  w-10/13 font-sm">
              <h2 className="md:text-4xl text-2xl font-bold mb-6">
                Car Rental
              </h2>
              <p className="text-black/70 mb-6">
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache fanny pack nostrud. Photo booth anim
                8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
                flexitarian Truffaut synth art party deep v chillwave. Seitan
                High Life reprehenderit consectetur cupidatat kogi. Et leggings
                fanny pack, elit bespoke vinyl art party Pitchfork selfies
                master cleanse Kickstarter seitan retro.
              </p>

              <button className="bg-[oklch(77.7%_0.152_181.912)] hover:bg-[#5856d6] transition-all duration-350 hover:cursor-pointer text-white font-sm px-6 py-2 rounded-sm">
                View Plan & Price
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap md:flex-nowrap flex-row-reverse">
          <img src={img2} className="md:max-w-2/4 w-full h-130 object-cover" />
          <div className="bg-white w-full">
            <div className=" mx-auto my-20 md:w-10/14  w-10/13 font-sm">
              <h2 className="md:text-4xl text-2xl font-bold mb-6">
                Limousine{" "}
              </h2>
              <p className="text-black/70 mb-6">
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache fanny pack nostrud. Photo booth anim
                8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
                flexitarian Truffaut synth art party deep v chillwave. Seitan
                High Life reprehenderit consectetur cupidatat kogi. Et leggings
                fanny pack, elit bespoke vinyl art party Pitchfork selfies
                master cleanse Kickstarter seitan retro.
              </p>

              <button className="bg-[oklch(77.7%_0.152_181.912)] hover:bg-[#5856d6] transition-all duration-350 hover:cursor-pointer text-white font-sm px-6 py-2 rounded-sm">
                View Plan & Price
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap md:flex-nowrap">
          <img src={img3} className="md:max-w-2/4 w-full h-130 object-cover" />
          <div className="bg-white w-full">
            <div className=" mx-auto my-20 md:w-10/14  w-10/13 font-sm">
              <h2 className="md:text-4xl text-2xl font-bold mb-6">
                Weddings & Parties
              </h2>
              <p className="text-black/70 mb-6">
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache fanny pack nostrud. Photo booth anim
                8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
                flexitarian Truffaut synth art party deep v chillwave. Seitan
                High Life reprehenderit consectetur cupidatat kogi. Et leggings
                fanny pack, elit bespoke vinyl art party Pitchfork selfies
                master cleanse Kickstarter seitan retro.
              </p>

              <button className="bg-[oklch(77.7%_0.152_181.912)] hover:bg-[#5856d6] transition-all duration-350 hover:cursor-pointer text-white font-sm px-6 py-2 rounded-sm">
                View Plan & Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
