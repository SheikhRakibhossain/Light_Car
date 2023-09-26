import person from "../../assets/images/about_us/person.jpg";
// import parts from "../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <>

        {/* daisy ui component */}
        <div className="hero min-h-screen bg-base-200">
          <div className="grid md:grid-cols-2 px-4">
            
            <div className=" sm:px-4 md:px-6 space-y-6">
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
            {/* image part */}
            <div className="sm:px-2 relative overflow-hidden">
              <img
                src={person}
              />
              {/* <img
                src={person}
                className="absolute h-40 w-36 -left-4 -bottom-16"
              /> */}
             
            </div>
          </div>
        </div>
     
    </>
  );
};

export default AboutUs;
