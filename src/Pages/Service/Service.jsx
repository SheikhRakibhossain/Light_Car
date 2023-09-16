import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <>
      <div className="w-1/2 mx-auto pb-4">
        <h4 className="heading">Service</h4>
        <h1 className="heading_title">Our Service Area</h1>
        <h1 className="heading_p">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don{"'"}t look even slightly
          believable.{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 py-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Service;
