import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const WorkflowItem = ({
  title,
  description,
  index,
  setImage,
}: {
  title: string;
  description: string;
  index: number;
  setImage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (isInView) {
      setImage(index);
    }
  }, [isInView]);

  return (
    <div className="h-[100vh] flex flex-col gap-4 justify-center">
      <h1 ref={ref} className="text-3xl font-[500]">
        {title}
      </h1>
      <h3 className="text-lg text-white/60">{description}</h3>
    </div>
  );
};

export default WorkflowItem;
