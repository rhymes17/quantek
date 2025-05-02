import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import FetchLogo from "../assets/images/plexus_logo.3787b2b7.png";
import PlexusLogo from "../assets/images/plexus_logo.3787b2b7.png";
import XneeloLogo from "../assets/images/xneelo_banner.94b59c36.png";

const Clients = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll progress: ", latest);
  });

  const translateY = useTransform(scrollY, [0, 17500], ["0%", "-500%"]);
  const translateYRev = useTransform(scrollY, [0, 17500], ["-500%", "0%"]);

  const length = 50;

  return (
    <div className="bg-black">
      <div className=" h-[90vh] mx-auto flex justify-center items-center">
        <div className="sticky h-[100%] w-[100%] px-8 rounded-3xl flex justify-center items-center">
          <div className="flex bg-[#e8f0f9] w-full rounded-[3.5rem] h-[90vh] items-center">
            <div className="flex w-full h-full justify-start flex-col gap-8 px-8 py-5 rounded-3xl">
              <h1 className="text-black text-[5rem] font-[500] leading-tight">
                Our Clients
              </h1>
            </div>

            <div className="w-[70%] h-full flex items-center justify-center overflow-hidden">
              <div className="h-[90%] w-[90%] rounded-[1.5rem] mx-auto bg-[#21242c]  overflow-hidden">
                <div className="h-full w-[120%] flex gap-24 items-center justify-center overflow-hidden">
                  <div
                    style={{
                      transform: "rotate(-30deg)",
                    }}
                    className="h-[150%] w-full overflow-hidden flex flex-col items-center "
                  >
                    <motion.div
                      style={{
                        translateY: translateY,
                      }}
                      className="h-full w-full flex flex-col items-center gap-8 "
                    >
                      {Array.from({ length }).map((_, index) => (
                        <div className="flex flex-col gap-8">
                          <div key={index}>
                            <img
                              className="w-[9rem] object-contain"
                              src={FetchLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                          <div key={index}>
                            <img
                              className="w-[9rem] object-contain"
                              src={PlexusLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                          <div key={index}>
                            <img
                              className="h-full"
                              src={XneeloLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Main  */}
                  <div
                    style={{
                      transform: "rotate(-30deg)",
                    }}
                    className="h-[150%] w-full overflow-hidden flex flex-col items-center "
                  >
                    <motion.div
                      style={{
                        translateY: translateYRev,
                      }}
                      className="h-full w-full flex flex-col items-center gap-8 "
                    >
                      {Array.from({ length }).map((_, index) => (
                        <div className="flex flex-col gap-8">
                          <div key={index}>
                            <img
                              className="w-[9rem] object-contain"
                              src={FetchLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                          <div key={index}>
                            <img
                              className="w-[9rem] object-contain"
                              src={PlexusLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                          <div key={index}>
                            <img
                              className="h-full"
                              src={XneeloLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  <div
                    style={{
                      transform: "rotate(-30deg)",
                    }}
                    className="h-[150%] w-full overflow-hidden flex flex-col items-center "
                  >
                    <motion.div
                      style={{
                        translateY: translateY,
                      }}
                      className="h-full w-full flex flex-col items-center gap-8 "
                    >
                      {Array.from({ length }).map((_, index) => (
                        <div className="flex flex-col gap-8">
                          <div key={index}>
                            <img
                              className="w-[9rem] object-contain"
                              src={FetchLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                          <div key={index}>
                            <img
                              className="w-[9rem] object-contain"
                              src={PlexusLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                          <div key={index}>
                            <img
                              className="h-full"
                              src={XneeloLogo}
                              alt={`icon-${index}`}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Clients;
