import "./GetService.css";
import { FaCar, FaPeopleArrows, FaThumbsUp, FaTrophy } from "react-icons/fa";

const GetService = () => {
  const handleGetServiceNow = (event) => {
    console.log(event);
  };
  return (
    <>
      <section className="grid md:grid-cols-2 bg-white px-10 ">
        {/* form part */}
        <div className="py-10">
          <div className="py-10 space-y-4">
            <h2 className="text-3xl font-semibold">
              Get A <span className="text-[#f22613]">Service Now !</span>
            </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              delectus animi velit nobis totam libero quae iure ipsum, quisquam,
              laudantium error et similique.
            </p>
          </div>

          {/* form start */}
          <form onSubmit={handleGetServiceNow} className=" py-8 pr-10 ">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative z-0 mb-6 group">
                <input
                  type="text"
                  name="user_name"
                  className="form_input peer"
                  placeholder=" "
                  required
                />
                <label className="from_label">Write your name</label>
              </div>
              <div className="relative z-0 mb-6 group">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="form_input peer"
                  placeholder=" "
                  required
                />
                <label className="from_label">Email address</label>
              </div>
              <div className="relative z-0  mb-6 group">
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  className="form_input peer"
                  placeholder=" "
                  required
                />
                <label className="from_label">Phone</label>
              </div>
              <div className="relative z-0  mb-6 group">
                <input
                  type="date"
                  id="phone"
                  name="date"
                  className="form_input peer"
                  placeholder=" "
                  required
                />
                <label className="from_label">Pick a date</label>
              </div>
            </div>
            <div className="relative z-0  mb-6 group">
              <textarea
                type="text"
                name="user_message"
                id="message"
                rows="4"
                cols="50"
                className="form_input peer"
                placeholder=" "
                required
              />
              <label className="from_label">Write your message</label>
            </div>
            <input
              className="btn btn-secondary btn-sm"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>

        {/* portfolio part */}
        <div className="overlay" style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/car-mechanic-changing-wheels-car_1303-27465.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=ais)",
          backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"top-center"

        }}>
          <div className="grid md:grid-cols-2 justify-items-center justify-center-center gap-6 p-12">
            <div className=" p-2 space-y-4 flex flex-col justify-center items-center text-center z-10">
              <p className="text-6xl text-white">
                <FaCar />{" "}
              </p>
              <h2 className="text-3xl text-[#f22613]">570+</h2>
              <h4 className="text-xl font-semibold text-white">VEHICLES SERVICED</h4>
              <p className="text-white">Architecto ullam tenetur quia nemo ratione tempora.</p>
            </div>
            <div className=" p-2 space-y-4 flex flex-col justify-center items-center  text-center z-10">
              <p className="text-6xl text-white">
                <FaPeopleArrows />{" "}
              </p>
              <h2 className="text-3xl text-[#f22613]">646+</h2>
              <h4 className="text-xl font-semibold text-white">HAPPY CLIENTS</h4>
              <p className="text-white">Architecto ullam tenetur quia nemo ratione tempora.</p>
            </div>
            <div className=" p-2 space-y-4 flex flex-col justify-center items-center  text-center z-10">
              <p className="text-6xl text-white">
                <FaThumbsUp />{" "}
              </p>
              <h2 className="text-3xl text-[#f22613]">1804+</h2>
              <h4 className="text-xl font-semibold text-white">PEOPLE LIKES</h4>
              <p className="text-white">Architecto ullam tenetur quia nemo ratione tempora.</p>
            </div>
            <div className=" p-2 space-y-4 flex flex-col justify-center items-center  text-center z-10">
              <p className="text-6xl text-white">
                <FaTrophy/>{" "}
              </p>
              <h2 className="text-3xl text-[#f22613]">1020+</h2>
              <h4 className="text-xl font-semibold text-white">AWARDS WON</h4>
              <p className="text-white">Architecto ullam tenetur quia nemo ratione tempora.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetService;
