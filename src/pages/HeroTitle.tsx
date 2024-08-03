import { motion, useScroll, useTransform } from "framer-motion";
import Eth from "../assets/images/eth.jpg";

const HeroTitle = () => {
  const { scrollY } = useScroll();

  const borderRadius = useTransform(scrollY, [500, 900], ["0rem", "3.5rem"]);
  const paddingX = useTransform(scrollY, [500, 900], ["0rem", "4rem"]);
  
  return (
    <motion.div
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
      transition={{
        duration: 9,
      }}
      className="h-[100vh] flex justify-between items-center bg-black px-8"
    >
      <motion.div
        style={{
          borderRadius,
        }}
        className="flex bg-[#e8f0f9] rounded-[3.5rem] px-8 py-16"
      >
        <div className="flex w-[60%] flex-col gap-8 px-7 py-5 rounded-3xl">
          <h1 className="text-black text-[5rem] font-[500] leading-tight">
            Custom Software Development Services
          </h1>

          <h3 className="text-[1.3rem] text-black/60 ">
            We perform world-class custom software development services for
            startups, small-to-midsize (SMB), and enterprise-size businesses.
          </h3>
        </div>

        <div className="relative h-[50vh] flex-1 flex justify-end px-8 items-center">
          <img className="h-[100%] rounded-2xl" src={Eth} />
          {/* <div className=" absolute bottom-[-25px] left-[35px] h-[7vh] w-[12vw] p-2 rounded-2xl flex justify-center items-center text-white font-[500] bg-gradient-to-r from-black/20 to-black/20 backdrop-blur-sm">
            Come Join Us
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroTitle;
