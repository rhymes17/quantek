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
    <div
      style={{
        opacity: imageId === index ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.76, 0, 0.42, 1)"
      }}
      className="absolute top-1/2 -translate-y-1/2"
    >
      <img src={img} />
    </div>
  );
};

export default WorkflowCard;
