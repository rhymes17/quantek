import HeroImage from "../assets/images/quantek 1.png";
const HeroSection = () => {
  return (
    <div className="h-[100vh] relative">
      <img src={HeroImage} className="h-[100vh] object-cover w-[100vw]" />

      {/* <div className="absolute top-[2.5rem] left-[2.5rem]">
    <img src={Logo} className="h-[70px]" />
  </div> */}

      <div className="absolute flex flex-col gap-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] ">
        <h1 className="text-[7rem] text-white text-center tracking-[2.1rem] font-[600]">
          QUANTEK
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
