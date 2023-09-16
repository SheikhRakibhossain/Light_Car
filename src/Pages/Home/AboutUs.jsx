import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <>
      <section className="box-border w-fit h-fit my-48">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto py-3 gap-8">
          <div className="relative">
            <img
              src={person}
              alt="car makanik picture"
              className="h-48 w-96 object-cover md:h-128 md:w-3/5"
            />

            <img
              src={parts}
              alt=" car parts image"
              className="absolute -bottom-20 right-28 h-48 w-full object-cover md:h-72 md:w-64 border-8 border-white"
            />
          </div>

          <div className=" space-y-4">
            <h4 className="text-orange-500 leading-loose text-xl">About Us</h4>
            <h1 className=" text-5xl font-bold capitalize">
              We are qualified & of experience in this field
            </h1>
            <p className="">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don{"'"}t look even slightly
              believable.
            </p>
            <p className="">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don{"'"}t look even slightly
              believable.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
