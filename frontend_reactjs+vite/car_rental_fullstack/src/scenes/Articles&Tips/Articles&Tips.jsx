import Section from "../global/Section";
import img1 from "../global/imagesandvideo/article1.jpg";
import img2 from "../global/imagesandvideo/article2.jpg";
import img3 from "../global/imagesandvideo/article3.jpg";

//
import { IoIosArrowForward } from "react-icons/io";

const Articlentips = () => {
  return (
    <>
      <Section className="bg-white  py-11">
        <div>
          <div className="text-center px-6 md:px-0">
            <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl">
              Articles & Tips
            </h2>
            <p className="font-semibold text-black/40">
              Explore some of the best tips from around the world
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap  gap-7 justify-center">
            <div className="border mt-20 rounded-md border-black/10 w-85 transition delay-150 duration-500 ease-in-out hover:-translate-y-2 hover:scale-100 hover:shadow-2xl ">
              <div
                className="h-55 rounded-t-md bg-cover bg-center "
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className="pr-10 pl-7 mt-5  my-8">
                <span className="font-bold tracking-widest text-sm">
                  {" "}
                  January 12, 2017
                </span>
                <h2 className="mt-2 font-bold text-xl">
                  What To Do if Your Rental Car Has Met With An Accident
                </h2>
                <p className="mt-6 text-black/60">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache...
                </p>
                <span className=" mt-6 flex gap-1  text-black/60 hover:cursor-pointer hover:text-black ">
                  Read More
                  <IoIosArrowForward className="mt-1.5 " />
                </span>
              </div>
            </div>
            <div className="border mt-20 rounded-md border-black/10 w-85 transition delay-150 duration-500 ease-in-out hover:-translate-y-2 hover:scale-100 hover:shadow-2xl ">
              <div
                className="h-55 rounded-t-md bg-cover bg-center "
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
              <div className="pr-10 pl-7 mt-5  my-8">
                <span className="font-bold tracking-widest text-sm">
                  {" "}
                  January 12, 2017
                </span>
                <h2 className="mt-2 font-bold text-xl">
                  On The Trail of 6 Best Foods in North America
                </h2>
                <p className="mt-6 text-black/60">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache...
                </p>
                <span className=" mt-6 flex gap-1  text-black/60 hover:cursor-pointer hover:text-black ">
                  Read More
                  <IoIosArrowForward className="mt-1.5 " />
                </span>
              </div>
            </div>
            <div className="border mt-20 rounded-md border-black/10 w-85 transition delay-150 duration-500 ease-in-out hover:-translate-y-2 hover:scale-100 hover:shadow-2xl ">
              <div
                className="h-55 rounded-t-md bg-cover bg-center "
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div className="pr-10 pl-7 mt-5  my-8">
                <span className="font-bold tracking-widest text-sm">
                  {" "}
                  January 12, 2017
                </span>
                <h2 className="mt-2 font-bold text-xl">
                  Car Rental Mistakes That Can Cost You Big
                </h2>
                <p className="mt-6 text-black/60">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache...
                </p>
                <span className=" mt-6 flex gap-1  text-black/60 hover:cursor-pointer hover:text-black ">
                  Read More
                  <IoIosArrowForward className="mt-1.5 " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Articlentips;
