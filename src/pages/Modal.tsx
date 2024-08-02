import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

const Modal = ({
  modal,
  services,
}: {
  modal: {
    active: boolean;
    index: number;
  };
  services: {
    title: string;
    index: number;
    icon: string;
    description: string;
    color: string;
  }[];
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(containerRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);

  return (
    <motion.div
      ref={containerRef}
      variants={scaleAnimation}
      initial={"initial"}
      animate={modal.active ? "open" : "closed"}
      className="z-50 pointer-events-none rounded-lg h-[50vh] w-[30vw] bg-gradient-to-r from-white/30 to-white/30 backdrop-blur-2xl flex justify-center items-center fixed overflow-hidden"
    >
      <div className="h-[100%] w-[100%] custom-transition absolute">
        {services.map((service, index) => {
          const { title, description, color } = service;

          return (
            <div
              style={{
                top: `${modal.index * -100}%`,
                backgroundColor: color,
                transition: "all 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
              }}
              key={index}
              className="relative h-[100%] flex flex-col gap-6 text-white justify-center items-center "
            >
              <div className="text-white flex flex-col gap-2 justify-center items-center">
                {/* <img className="h-[10vh]" src={icon} /> */}
                <h1 className="text-2xl font-[500]">{title}</h1>
              </div>
              <div className="flex px-16">
                <h3>{description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;
