import { useEffect } from "react";
import Abbas from "../assets/images/abbas.jpeg";
import Pranav from "../assets/images/pranav.png";
import Rahul from "../assets/images/rahul.jpg";

const Career = () => {
  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8545");
    ws.addEventListener("open", () => {
      console.log("WebSocket connection opened successfully.");
    });
    ws.addEventListener("error", (error) => {
      console.error("WebSocket connection error:", error);
    });
  }, []);

  return (
    <div className="h-[100vh] bg-white pt-[7rem]">
      <div className="w-[70vw] flex flex-col mx-auto">
        <div className="w-[250px]">
          <h1 className="text-[4rem] font-[500] leading-[75px]">the Team.</h1>
        </div>

        <div className="display flex justify-center items-center">
          <div className="h-[80vh] md:w-[35vw] lg:w-[55vw] mt-[2rem] grid grid-rows-6 grid-col-6 gap-4 ">
            {/* Abbas */}
            <div className="border-2 h-full row-span-2 col-span-6 rounded-xl px-4 py-2 flex gap-8 items-center justify-center">
              <img
                className="h-[163.46px] w-[163.46px] rounded-lg"
                src={Abbas}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-[450]">Abbas Ali Lokhandwala</h1>
                  <h3 className="text-xl text-black/50">CEO</h3>
                </div>
                <h3 className="text-black/40">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta illum placeat quaerat atque! Iste eligendi cupiditate
                  impedit pariatur sunt ipsa dolorem minus voluptatum delectus,
                  perspiciatis expedita alias laudantium recusandae sit.
                </h3>
              </div>
            </div>
            {/* Pranav */}
            <div className="border-2 h-full row-span-4 col-span-2 rounded-xl px-4 py-4 flex flex-col gap-4 overflow-hidden items-center">
              <img
                className="h-[163.46px] w-[163.46px] mx-auto rounded-lg object-cover"
                src={Pranav}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-[450]">Pranav Maheshwari</h1>
                  <h3 className="text-xl text-black/50">Software Engineer</h3>
                </div>
                <h3 className="text-black/40">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta illum placeat quaerat atque! Iste eligendi cupiditate.
                </h3>
              </div>
            </div>
            {/* Rahul */}
            <div className="border-2 h-full col-span-2 row-span-2 rounded-xl px-4 py-4 flex flex-col gap-2 overflow-hidden items-center">
              <img
                className="h-[123.46px] w-[123.46px] rounded-lg mx-auto object-cover"
                src={Rahul}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-xl font-[450]">Rahul Dev Choudhari</h1>
                  <h3 className=" text-black/40">Solutions Engineer</h3>
                </div>
              </div>
            </div>
            <div className="border-2 h-full col-span-2 row-span-2 rounded-xl px-4 py-2 flex flex-col gap-2 overflow-hidden justify-center items-center">
              <img
                className="h-[123.46px] w-[123.46px] rounded-lg mx-auto object-cover"
                src={Rahul}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-xl font-[450]">Saurabh Joshi</h1>
                  <h3 className=" text-black/40">Solutions Engineer</h3>
                </div>
              </div>
            </div>
            <div className="border-2 h-full col-span-2 row-span-2 rounded-xl px-4 py-2 flex flex-col gap-2 overflow-hidden justify-center items-center">
              <img
                className="h-[123.46px] w-[123.46px] rounded-lg mx-auto object-cover"
                src={Rahul}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-xl font-[450]">Somesh Balani</h1>
                  <h3 className=" text-black/40">Solutions Engineer</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[30vh]"></div>
    </div>
  );
};

export default Career;
