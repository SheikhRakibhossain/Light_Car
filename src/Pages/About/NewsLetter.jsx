import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <>
      <section className="flex  justify-center items-center -mb-10 pt-20 ">
        <div className=" w-[70%] grid grid-col md:grid-cols-2 bg-orange-600 gap-6 py-8 px-8 rounded">
          <div className="">
            <h2 className="text-2xl text-white ">
             Learn More And Get Update With Us?
            </h2>
            <p>
              We will update you about our discount, services, different blog,
              version repair, exchnage car and auctionable cars. So why you
              aviod it? Just put your eamil and get update with us.
            </p>
          </div>
          <div className="">
            <div className=" flex justify-center items-center">
              <input
                className="block w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="email"
                placeholder="Write your email"
                name="email"
                required
              />
              <input
                className="py-1.5 px-3 bg-primary text-white cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
            <div className="pt-3">
              <h2 className="text-xl font-semibold text-white">Follow us on </h2>
              <p className="flex justify-start items-center gap-4 text-xl pt-3">
                <FaFacebook /> <FaTwitter />
                <FaInstagram /> <FaLinkedin />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
