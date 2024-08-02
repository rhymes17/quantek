import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 60,
    width: 150,
    opacity: 1,
  });

  return (
    <div className="fixed custom-shadow top-8 z-50 h-[7vh] w-[35%] left-[50%] translate-x-[-50%] bg-gradient-to-r from-white/70 to-white/70 backdrop-blur-lg px-7 py-5 rounded-full">
      <div className="flex relative justify-evenly text-black items-center h-[100%] py-1 text-lg">
        <Tab pathname={"/"} setPosition={setPosition}>
          Home
        </Tab>
        <Tab pathname={"/career"} setPosition={setPosition}>
          Career
        </Tab>
        <Tab pathname={"/contact"} setPosition={setPosition}>
          Contact Us
        </Tab>
        <Tab pathname={"/support"} setPosition={setPosition}>
          Support
        </Tab>
        <Cursor position={position} />
      </div>
    </div>
  );
};

export default Navbar;

const Tab = ({
  pathname,
  children,
  setPosition,
}: {
  pathname: string;
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
}) => {
  const ref = useRef(null);

  const location = useLocation();

  const changePillPosition = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  useEffect(() => {
    if (location.pathname === pathname && ref.current) {
      changePillPosition();
    }
  }, [ref, location]);

  const navigate = useNavigate();

  return (
    <li
      ref={ref}
      className="relative flex-shrink-0 z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      onClick={() => navigate(`${pathname}`)}
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-7 w-36 rounded-full bg-black md:h-12"
    />
  );
};
