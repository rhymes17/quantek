import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const HeroTitle = () => {
  const { scrollY } = useScroll();

  useEffect(() => {
    console.log({ scrollY });
  }, [scrollY]);

  const borderRadius = useTransform(scrollY, [500, 900], ["0rem", "3.5rem"]);
  const paddingX = useTransform(scrollY, [500, 900], ["0rem", "4rem"]);

  console.log({ borderRadius, scrollY });

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
        <div className="flex w-[60%] flex-col gap-5 px-7 py-5 rounded-3xl">
          <h1 className="text-black text-[5rem] font-[500] leading-tight">
            Custom Software Development Services
          </h1>

          <h3 className="text-[1.3rem] text-black/60 ">
            We perform world-class custom software development services for
            startups, small-to-midsize (SMB), and enterprise-size businesses.
          </h3>
        </div>

        <div className="flex-1"></div>
      </motion.div>
    </motion.div>
  );
};

export default HeroTitle;
