import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <>

        {/* daisy ui component */}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="md:w-1/2 sm:px-2 relative overflow-hidden">
              <img
                src={person}
                className="md:max-w-sm rounded-lg shadow-2xl h-48 md:full object-cover md:h-128"
              />
              <img
                src={parts}
                className="md:max-w-sm md:w-64 sm:w-40 sm:h-48 md:h-80 object-cover rounded-lg shadow-2xl border-8 border-white absolute -bottom-12 right-12"
              />
            </div>
            <div className="md:w-1/2 sm:px-4 md:px-6 space-y-6">
              <div className=" space-y-4">
                <h4 className="text-orange-500 leading-loose text-xl">
                  About Us
                </h4>
                <h1 className=" sm:text-4xl md:text-5xl  font-bold capitalize">
                  We are qualified & of experience in this field
                </h1>
                <p className="">
                  The majority have suffered alteration in some form, by
                  injected humour, or randomised words which don{"'"}t look even
                  slightly believable.
                </p>
                <p className="">
                  The majority have suffered alteration in some form, by
                  injected humour, or randomised words which don{"'"}t look even
                  slightly believable.
                </p>
                <button className="btn btn-primary">Get More Info</button>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default AboutUs;
