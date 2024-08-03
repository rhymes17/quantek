import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Clients = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });

  console.log({ scrollYProgress });

  return (
    <div className="bg-black">
      <motion.div ref={ref} className="h-[80vh] overflow-y-scroll">
        <motion.div className="h-[200vh]">
          <div className="sticky top-0 h-[80vh] mx-auto flex justify-center items-center">
            <div className="sticky h-[100%] w-[100%] px-8 rounded-3xl flex justify-center items-center">
              <motion.div className="flex bg-[#e8f0f9] rounded-[3.5rem] h-[70vh]">
                <div className="flex w-[60%] h-[full] justify-center flex-col gap-8 px-7 py-5 rounded-3xl">
                  <h1 className="text-black text-[5rem] font-[500] leading-tight">
                    Custom Software Development Services
                  </h1>

                  <h3 className="text-[1.3rem] text-black/60 ">
                    We perform world-class custom software development services
                    for startups, small-to-midsize (SMB), and enterprise-size
                    businesses.
                  </h3>
                </div>

                <div className="relative h-[50vh] flex-1 flex justify-end border-2 px-8 items-center">
                  {/* <img className="h-[100%] rounded-2xl" src={Eth} /> */}
                  {/* <div className=" absolute bottom-[-25px] left-[35px] h-[7vh] w-[12vw] p-2 rounded-2xl flex justify-center items-center text-white font-[500] bg-gradient-to-r from-black/20 to-black/20 backdrop-blur-sm">
            Come Join Us
          </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Clients;
