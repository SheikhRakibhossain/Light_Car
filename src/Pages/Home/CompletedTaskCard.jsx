import CTCard from "./CTCard";


const CompletedTaskCard = ({ project }) => {
  console.log(project);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center py-8 px-8 ">
        {project.map((pro) => (
          <CTCard key={pro._id} pro={pro}></CTCard>
        ))}
      </div>
    </>
  );
};

export default CompletedTaskCard;
