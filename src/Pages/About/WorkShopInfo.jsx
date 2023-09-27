const WorkShopInfo = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="grid md:grid-cols-2 px-4">
          <div className=" sm:px-4 md:px-6 space-y-6">
            <div className=" space-y-4">
              <h2 className="text-3xl font-semi-bold pb-4 pt-4">
                <span className="text-black">Know Our</span>{" "}
                <span className="text-[#f22613]">Mission and Values!</span>
              </h2>
              <h1 className=" sm:text-4xl md:text-2xl  font-bold uppercase leading-10">
                To ensure the safety, reliability, and peace of mind of every
                vehicle owner who entrusts us with their car
              </h1>
              <p className="">
                At SRM, our mission is at the core of everything we do. We{"'"}
                re not just in the business of repairing cars; we{"'"}re on a
                mission to redefine your automotive service experience. Our
                values serve as the guiding principles that shape our actions
                and interactions with you.
              </p>
              <p className="font-bold">Our Core Values</p>
              <p>
                <strong className="text-orange-600">Integrity:</strong> We
                operate with unwavering integrity, always doing what{"'"}s
                right, even when no one is watching. We believe that trust is
                the foundation of any successful relationship.
                <br />
                <strong className="text-orange-600">Excellence:</strong> We are
                committed to excellence in every aspect of our work. From the
                precision of our repairs to the professionalism of our team, we
                never settle for anything less than the best. <br />
                <strong className="text-orange-600">
                  Customer-Centric:
                </strong>{" "}
                Your satisfaction is our top priority. We actively listen to
                your needs, provide transparent communication, and deliver
                solutions that align with your best interests. <br />{" "}
                <strong className="text-orange-600"> Innovation:</strong> We
                stay ahead of the curve by embracing the latest advancements in
                automotive technology and repair techniques. Innovation drives
                us to continually improve our services. <br />{" "}
                <strong className="text-orange-600"> Community:</strong> We{"'"}
                re not just a business in your community; we{"'"}re a part of
                it. We believe in giving back and supporting the neighborhoods
                we serve through various community initiatives. <br />
                <strong className="text-orange-600">
                  Environmental Responsibility:{" "}
                </strong>{" "}
                We{"'"}re committed to reducing our environmental footprint by
                implementing eco-friendly practices and recycling programs in
                our operations.
              </p>
            </div>
          </div>
          {/* image part */}
          <div className="sm:px-2 relative overflow-hidden">
            <img src="https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais" className="w-full h-full object-cover sm:py-3"/>
            {/* <img
                src={person}
                className="absolute h-40 w-36 -left-4 -bottom-16"
              /> */}
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="sm:flex sm:flex-col-reverse md:grid md:grid-cols-2 px-4 ">
          {/* image part */}
          <div className="sm:px-2 relative overflow-hidden">
            <img src="https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais"
            className="w-full h-full object-cover sm:py-3" />
          </div>
          <div className=" sm:px-4 md:px-6 space-y-6">
            <div className=" space-y-4">
              <h2 className="text-3xl font-semi-bold pb-4 pt-4">
                <span className="text-black">Why Our </span>{" "}
                <span className="text-[#f22613]">
                  Mission and Values Matter
                </span>
              </h2>
              <h1 className=" sm:text-4xl md:text-2xl  font-bold uppercase leading-10">
              We take pride in being an active part of the Car Raching community. Beyond our repair work, we{"'"}re involved in initiatives that give back to the community we serve.
              </h1>
              <p className="">
                Our mission and values aren{"'"}t just words on paper; they
                guide every interaction, every repair, and every decision we
                make. When you choose [Your Company Name], you{"'"}re choosing
                more than a car repair service. You{"'"}re choosing a team that
                cares about your safety, your vehicle{"'"}s longevity, and your
                satisfaction.
                <br />
                <br />
                Our commitment to these principles ensures that you receive not
                only top-notch automotive services but also an experience built
                on trust, transparency, and dedication to your well-being. We
                {"'"}re here to keep you safe on the road and to make every mile
                you drive a confident and worry-free journey.
                <br />
                Thank you for considering us as your automotive partner. We look
                forward to upholding our mission and values while serving you
                and your vehicle with the utmost care and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkShopInfo;
