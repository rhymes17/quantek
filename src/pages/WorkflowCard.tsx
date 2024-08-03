import { motion } from "framer-motion";

const colors = ["#91DDCF", "#FFD3B6", "#DCA47C"];

const cardAnimation = {
  initial: { x: "-50%", y: "-50%" },
  open: {
    x: "-50%",
    y: "-50%",
    filter: "blur(18rem)",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    x: "-50%",
    y: "-50%",
    filter: "blur(18rem)",
    transition: {
      duration: 0.5,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

const WorkflowCard = ({
  img,
  index,
  imageId,
}: {
  img: string;
  index: number;
  imageId: number;
}) => {
  return (
    <motion.div
      style={{
        opacity: imageId === index ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.76, 0, 0.42, 1)",
      }}
      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
    >
      <div className=" h-[50vh] w-[50vw] flex justify-center items-center px-5 py-5 rounded-sm relative">
        <motion.div
          variants={cardAnimation}
          initial={"initial"}
          animate={imageId === index ? "open" : "closed"}
          style={{
            backgroundColor: colors[imageId],
            opacity: 0.6,
            // filter: "blur(8rem)",
            transition: "all 1.5s cubic-bezier(0.76, 0, 0.42, 1)",
          }}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[80%] w-[80%] z-20 "
        ></motion.div>
        <div className="absolute top-0 w-[80%] flex justify-center items-center bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-lg z-50">
          <img className="w-[100%]" src={img} />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkflowCard;
