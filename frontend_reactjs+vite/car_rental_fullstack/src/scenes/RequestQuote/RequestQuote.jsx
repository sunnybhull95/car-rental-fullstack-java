import Hero from "../global/imagesandvideo/Home.mp4";
import Section from "../global/Section";

const RequestQuote = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-white overflow-hidden">
        <video
          className="  w-full h-full object-cover object-center z[-1]"
          src={Hero}
          autoPlay
          loop
          muted
        />

        <div
          style={{ textAlign: "center" }}
          className="absolute md:px-15 top-65 lg:left-0 lg:px-78 px-12 "
        >
          <h1 className=" md:text-4xl lg:text-5xl text-2xl font-bold lg:mb-1  text-white">
            Our Fleet, Your Fleet
          </h1>
          <p className="text-sm font-bold  text-white mb-8">
            We know the difference is in the details and that’s why our car
            rental services, in the tourism and business industry, stand out for
            their quality and good taste, to offer you an unique experience
          </p>

          <h2 className=" text-4xl mb-6  text-white">
            Call Now (54)-344-4533-4
          </h2>

          <button className="text-white px-10 font-semibold py-3 rounded-md bg-[oklch(77.7%_0.152_181.912)] hover:bg-blue-800 duration-350 cursor-pointer">
            Request a Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default RequestQuote;
