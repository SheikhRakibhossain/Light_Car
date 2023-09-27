// import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import ServiceHero from "./ServiceHero";

const Service = () => {
  // const services = useLoaderData();
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ServiceHero />
      <div className="md:w-1/2 px-3 pt-4 mx-auto pb-4">
        <h4 className="heading">Service</h4>
        <h1 className="heading_title">Our Service Area</h1>
        <h1 className="heading_p">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don{"'"}t look even slightly
          believable.
        </h1>
      </div>
      {/* grid card make by map looping */}
      <div className="grid min-h-screen sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 space-y-4 py-6 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Service;
