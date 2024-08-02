import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Service = ({
  service,
  setModal,
}: {
  service: { title: string; index: number; icon: string; description: string };
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
}) => {
  const ref = useRef(null);

  const [showMarque, setShowMarque] = useState(false);

  const { title, icon } = service;

  const length = 14;

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        setModal({
          active: true,
          index: service.index,
        });
        setShowMarque(true);
      }}
      onMouseLeave={() => {
        setModal({
          active: false,
          index: service.index,
        });
        setShowMarque(false);
      }}
      style={{
        transition: "all 0.1s linear"
      }}
      className="h-[9rem] hover:bg-yellow-400 hover:text-black cursor-pointer px-8 py-8 flex items-center border-b-[1px] border-b-gray-500 overflow-hidden"
    >
      {showMarque ? (
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: "-22.45%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-32 flex-shrink-0 h-[100%] overflow-hidden"
        >
          {Array.from({ length }).map((_, index) => (
            <div key={index} className="text-3xl h-[100%]">
              <img className="h-[100%]" src={icon} alt={`icon-${index}`} />
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="text-3xl h-[100%]">{title}</div>
      )}
    </div>
  );
};

export default Service;
