import SectionLayout from "../components/SectionLayout";
import WorkflowItem from "./WorkflowItem";
import { useState } from "react";
import AgileImg from "../assets/images/features-split-image-01.d9cb99ce.png";
import DevOpsImg from "../assets/images/features-split-image-02.3c569239.png";
import LeanImg from "../assets/images/features-split-image-03.87e4d053.png";
import WorkflowCard from "./WorkflowCard";

const colors = ["white", "yellow", "cyan"];

const workflows = [
  {
    title: "Agile",
    img: AgileImg,
    description:
      "This is our standard practice for services-oriented projects, code, and design deliverables. In Agile, client involvement and the flexibility to adapt to changing conditions are essential.",
  },
  {
    title: "DevOps",
    img: DevOpsImg,
    description:
      "What can be measured can be improved. Our cross-functional development teams keep a close eye on every relevant KPI while also embracing innovation and transparency.",
  },
  {
    title: "Lean",
    img: LeanImg,
    description:
      "Lean-oriented teams deliver complex projects on tight schedules. Our Lean Engineers work as efficiently as possible and are experts at avoiding resource waste.",
  },
];

const Workflow = () => {
  const [imageId, setImageId] = useState(-1);

  console.log({ imageId });

  return (
    <SectionLayout
      title="Workflow that just works"
      subtitle="We employ best practice processes and development methodologies as a foundation for rapid building of cutting-edge technology solutions in a structured and methodical way."
    >
      <div
        className="flex items-start px-16 gap-20 "
        style={{
          backgroundColor: colors[imageId],
          transition: "all 0.5s cubic-bezier(0.8, 0, 0.42, 1)",
        }}
      >
        <div className="w-full">
          {workflows.map((workflow, index) => {
            const { title, description } = workflow;
            return (
              <WorkflowItem
                key={index}
                title={title}
                description={description}
                index={index}
                setImage={setImageId}
              />
            );
          })}
        </div>
        <div className=" w-full h-screen sticky top-0 flex items-center justify-center">
          <div className="w-full relative">
            {workflows.map((workflow, index) => (
              <WorkflowCard
                img={workflow.img}
                index={index}
                imageId={imageId}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Workflow;
