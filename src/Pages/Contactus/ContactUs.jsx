import ContactUsImage from "../../assets/images/login/login.svg";
const ContactUs = () => {
  const handleContactUs = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.userName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const helpContact = { name, email, phone, message };
    console.log(helpContact);
  };
  return (
    <>
      <h2 className="text-4xl py-8 font-bold text-center">
        I am contact us page for client !!!
      </h2>

      <section className="grid md:grid-cols-2">
        <div>
          <img
            src={ContactUsImage}
            alt="contact us page image made by grapich design"
          />
        </div>

        <div>
          <h1 className="text-center text-4xl ">
            Need Help? Just Ping Us A Message !!!
          </h1>
          <form onSubmit={handleContactUs}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="userName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Write your name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Write Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                cols="50"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
               Write your message
              </label>
            </div>
            <input className="btn btn-secondary btn-sm" type="submit" value="Send Message" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
