import "./GetService.css";

const GetService = () => {
  const handleGetServiceNow = (event) => {
    console.log(event);
  };
  return (
    <>
      <section className="grid md:grid-cols-2">
        {/* form part */}
        <div className="py-10 px-5">
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
          <form onSubmit={handleGetServiceNow} className="shadow-2xl p-8 ">
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
        <div></div>
      </section>
    </>
  );
};

export default GetService;
