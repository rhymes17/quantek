const SectionLayout = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className=" bg-black text-white">
      <div className="pt-[7rem] flex justify-center items-center flex-col gap-6 pb-16">
        <h1 className="text-5xl uppercase font-[500]">{title}</h1>
        {subtitle && (
          <h3 className=" w-[50%] z-20 bg-gradient-to-r from-white/10 to-white/10 backdrop-blur-lg text-white px-8 py-5 rounded-xl">
            {subtitle}
          </h3>
        )}
        <div className="absolute h-[6rem] w-[6rem] rounded-full bg-white blur-[7rem] top-50 z-10"></div>
      </div>

      {children}
    </div>
  );
};

export default SectionLayout;
