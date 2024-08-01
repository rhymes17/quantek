const Navbar = () => {
  return (
    <div className="fixed  custom-shadow  top-8 z-50 h-[7vh] w-[35%] left-[50%] translate-x-[-50%] bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-lg px-7 py-5 rounded-full">
      <div className="flex text-black justify-evenly items-center h-[100%] py-1 text-lg">
        <div className="bg-black px-5 py-2 text-[0.9rem] rounded-full uppercase text-white cursor-pointer">
          <h1 className="mix-blend-exclusion">Home</h1>
        </div>
        <div className=" px-5 py-2 text-[0.9rem] mix-blend-exclusion rounded-full uppercase text-white cursor-pointer">
          Career
        </div>
        <div className=" px-5 py-2 text-[0.9rem] mix-blend-exclusion rounded-full uppercase text-white cursor-pointer">
          Contact Us
        </div>
        <div className=" px-5 py-2 text-[0.9rem] mix-blend-exclusion rounded-full uppercase text-white cursor-pointer">
          Support
        </div>
      </div>
    </div>
  );
};

export default Navbar;
