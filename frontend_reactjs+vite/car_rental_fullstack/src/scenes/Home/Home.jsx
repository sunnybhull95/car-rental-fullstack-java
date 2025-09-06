import HeroSection from "../HeroSection/HeroSection";
import HomeCar from "../HomeCarServices/HomeCar";
import CarByTypeCard from "../HomeCarServices/CarByTypeCard";
import RequestQuote from "../RequestQuote/RequestQuote";
import WhyChooseUsSection from "../WhyChooseUsSection/WhyChooseUsSection";
import Articlentips from "../Articles&Tips/Articles&Tips";
import CarBooking from "../CarBooking/CarBooking";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeCar />
      <CarByTypeCard />
      <RequestQuote />
      <WhyChooseUsSection />
      <Articlentips />
    </>
  );
};

export default Home;
